describe('Responsive and accessibility smoke', () => {
  it('Desktop smoke: key navigation and footer are visible', () => {
    cy.viewport(1440, 900);
    cy.visit('/');

    cy.get('#navbar').within(() => {
      cy.contains('a', 'Services').should('be.visible');
      cy.contains('a', 'Mentoring').should('be.visible');
      cy.contains('a', 'Testimonials').should('be.visible');
      cy.contains('a', 'Get in Touch').should('be.visible');
    });

    cy.get('footer').scrollIntoView().should('be.visible');
    cy.get('footer a[href="/legal"]').should('be.visible');
    cy.get('footer a[href="/careers"]').should('be.visible');
  });

  it('Mobile smoke: hamburger menu opens and navigates to section', () => {
    cy.viewport('iphone-6');
    cy.visit('/');

    cy.get('#mobile-menu-btn').should('be.visible').click();
    cy.get('#mobile-menu').should('have.class', 'menu-open').and('have.attr', 'aria-hidden', 'false');

    cy.get('#mobile-menu').within(() => {
      // Astro dev toolbar can overlap the viewport in local dev mode.
      // Force click avoids a false-negative caused by that overlay.
      cy.contains('a', 'Get in Touch').click({ force: true });
    });

    cy.location('pathname').should('eq', '/');
    cy.location('hash').should('eq', '#contact');
    cy.get('#contact').should('be.visible');
  });

  it('Passes practical, light accessibility checks', () => {
    cy.visit('/');

    cy.get('html').should('have.attr', 'lang', 'en');
    cy.get('main h1').should('have.length', 1);

    cy.get('#mobile-menu-btn').should('have.attr', 'aria-label', 'Toggle menu');
    cy.get('#back-to-top').should('have.attr', 'aria-label', 'Back to top');

    cy.get('#contact-form').within(() => {
      cy.get('label[for="name"]').should('exist');
      cy.get('label[for="email"]').should('exist');
      cy.get('label[for="subject"]').should('exist');
      cy.get('label[for="message"]').should('exist');
      cy.get('#message-count').should('contain.text', '0 / 2000 characters');
    });

    cy.get('a[href^="mailto:"]').contains('ckeane@niosfearr.ie').should('exist');
    cy.get('a[href^="tel:"]').should('have.attr', 'href', 'tel:+353868799566');
  });
});