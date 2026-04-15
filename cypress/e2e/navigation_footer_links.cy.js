describe('Navigation, footer, and key links', () => {
  const pathMatcher = (path) => {
    if (path === '/') {
      return /^\/$/;
    }

    return new RegExp(`^${path}/?$`);
  };

  it('Serves key brochure pages successfully', () => {
    const pages = [
      { path: '/', marker: 'Igniting Your' },
      { path: '/careers', marker: 'Careers' },
      { path: '/legal', marker: 'Legal' },
    ];

    cy.wrap(pages).each((page) => {
      cy.request(page.path).its('status').should('eq', 200);
      cy.visit(page.path);
      cy.location('pathname').should('match', pathMatcher(page.path));
      cy.contains('body', page.marker).should('be.visible');
    });
  });

  it('Navigates homepage anchor links from desktop primary nav', () => {
    const navTargets = [
      { label: 'Services', hash: '#services' },
      { label: 'Mentoring', hash: '#mentoring' },
      { label: 'Approach', hash: '#process' },
      { label: 'Why Us', hash: '#why-us' },
      { label: 'Testimonials', hash: '#testimonials' },
      { label: 'Get in Touch', hash: '#contact' },
    ];

    cy.viewport(1366, 768);
    cy.visit('/');

    cy.wrap(navTargets).each((target) => {
      cy.get('#navbar').within(() => {
        cy.contains('a', target.label).click({ force: true });
      });

      cy.location('pathname').should('eq', '/');
      cy.location('hash').should('eq', target.hash);
      cy.get(target.hash).should('be.visible');
    });
  });

  it('renders and follows critical footer links', () => {
    cy.visit('/');

    cy.get('footer').within(() => {
      cy.contains('a', 'Services').should('have.attr', 'href', '/#services');
      cy.contains('a', 'Testimonials').should('have.attr', 'href', '/#testimonials');
      cy.contains('a', 'Legal').should('have.attr', 'href', '/legal');
      cy.contains('a', 'Careers').should('have.attr', 'href', '/careers');
      cy.contains('a', 'ckeane@niosfearr.ie')
        .should('have.attr', 'href', 'mailto:ckeane@niosfearr.ie');
    });

    cy.get('footer a[href="/legal"]').click();
    cy.location('pathname').should('match', pathMatcher('/legal'));
    cy.contains('h1', 'Legal').should('be.visible');

    cy.get('footer a[href="/careers"]').click();
    cy.location('pathname').should('match', pathMatcher('/careers'));
    cy.contains('h1', 'Careers').should('be.visible');
  });

  it('has non-broken internal section targets for primary hash links', () => {
    const sectionIds = ['services', 'mentoring', 'process', 'why-us', 'testimonials', 'contact'];

    cy.visit('/');

    cy.wrap(sectionIds).each((id) => {
      cy.get(`#${id}`).should('exist');
      cy.get(`a[href="/#${id}"], a[href="#${id}"]`).should('exist');
    });
  });
});