import 'cypress-axe';

const publicPages = [
  { name: 'Homepage', path: '/' },
  { name: 'Careers', path: '/careers' },
  { name: 'Legal', path: '/legal' },
];

const wcagScanOptions = {
  runOnly: {
    type: 'tag',
    values: ['wcag2a', 'wcag2aa'],
  },
  includedImpacts: ['serious', 'critical'],
  rules: {
    // Keep contrast checks on because brochure sites rely heavily on legibility.
    'color-contrast': { enabled: true },
  },
};

function logViolations(violations) {
  violations.forEach((violation) => {
    Cypress.log({
      name: 'a11y',
      message: `${violation.impact || 'unknown'} ${violation.id} (${violation.nodes.length} nodes)`,
      consoleProps: () => violation,
    });
  });
}

function assertHeadingStructure() {
  cy.document().then((doc) => {
    const headingSelector = 'main h1, main h2, main h3, main h4, main h5, main h6';
    const headings = [...doc.querySelectorAll(headingSelector)];
    const mainH1Count = headings.filter((heading) => heading.tagName === 'H1').length;

    expect(headings.length, 'at least one heading in main').to.be.greaterThan(0);
    expect(mainH1Count, 'single h1 in main').to.equal(1);

    let previousLevel = 0;
    const skips = [];

    headings.forEach((heading) => {
      const currentLevel = Number(heading.tagName.slice(1));

      if (previousLevel && currentLevel - previousLevel > 1) {
        skips.push(`${heading.tagName}: ${heading.textContent.trim().slice(0, 80)}`);
      }

      previousLevel = currentLevel;
    });

    expect(skips, `heading level skips: ${skips.join(', ')}`).to.have.length(0);
  });
}

function assertImageAltCoverage() {
  cy.get('img').each(($img) => {
    const src = $img.attr('src') || '[inline image]';
    expect($img, `image ${src} should include an alt attribute`).to.have.attr('alt');
  });
}

function assertFormLabelling() {
  cy.document().then((doc) => {
    const controls = [...doc.querySelectorAll('form input, form textarea, form select')].filter((control) => {
      const type = (control.getAttribute('type') || '').toLowerCase();
      return !['hidden', 'submit', 'button', 'reset'].includes(type);
    });

    const missingLabels = controls
      .filter((control) => {
        const hasVisibleLabel = Boolean(control.labels && control.labels.length);
        const hasAriaLabel = Boolean(control.getAttribute('aria-label'));
        const hasAriaLabelledBy = Boolean(control.getAttribute('aria-labelledby'));

        return !(hasVisibleLabel || hasAriaLabel || hasAriaLabelledBy);
      })
      .map((control) => control.getAttribute('name') || control.id || control.tagName.toLowerCase());

    expect(missingLabels, `unlabelled form controls: ${missingLabels.join(', ')}`).to.have.length(0);
  });
}

function assertInteractiveAccessibleNames() {
  cy.document().then((doc) => {
    const isVisible = (element) => {
      if (!(element instanceof HTMLElement)) {
        return false;
      }

      const style = doc.defaultView.getComputedStyle(element);
      const rect = element.getBoundingClientRect();

      return (
        !element.hasAttribute('hidden')
        && style.display !== 'none'
        && style.visibility !== 'hidden'
        && rect.width > 0
        && rect.height > 0
      );
    };

    const getLabelledByText = (element) => {
      const labelledBy = element.getAttribute('aria-labelledby');

      if (!labelledBy) {
        return '';
      }

      return labelledBy
        .split(/\s+/)
        .map((id) => doc.getElementById(id)?.textContent?.trim() || '')
        .join(' ')
        .trim();
    };

    const missingNames = [...doc.querySelectorAll('a, button')]
      .filter((element) => isVisible(element) && !element.hasAttribute('disabled'))
      .filter((element) => {
        const text = element.textContent?.trim() || '';
        const ariaLabel = element.getAttribute('aria-label')?.trim() || '';
        const labelledByText = getLabelledByText(element);
        const title = element.getAttribute('title')?.trim() || '';
        const imageAltText = [...element.querySelectorAll('img[alt]')]
          .map((image) => image.getAttribute('alt')?.trim() || '')
          .join(' ')
          .trim();

        const accessibleName = text || ariaLabel || labelledByText || title || imageAltText;
        return !accessibleName;
      })
      .map((element) => {
        const tag = element.tagName.toLowerCase();
        const href = element.getAttribute('href');
        const id = element.id ? `#${element.id}` : '';
        return `${tag}${id}${href ? `(${href})` : ''}`;
      });

    expect(missingNames, `interactive elements without accessible names: ${missingNames.join(', ')}`).to.have.length(0);
  });
}

describe('Automated accessibility checks (WCAG-focused)', () => {
  publicPages.forEach((page) => {
    it(`${page.name}: axe scan (wcag2a/wcag2aa)`, () => {
      cy.visit(page.path);
      cy.injectAxe();
      cy.checkA11y('body', wcagScanOptions, logViolations);
    });

    it(`${page.name}: practical accessibility structure checks`, () => {
      cy.visit(page.path);

      cy.get('main').should('exist');
      cy.get('nav').should('exist');
      cy.get('footer').should('exist');

      assertHeadingStructure();
      assertImageAltCoverage();
      assertFormLabelling();
      assertInteractiveAccessibleNames();
    });
  });
});
