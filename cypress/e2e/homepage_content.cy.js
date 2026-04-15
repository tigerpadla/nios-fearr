describe('Homepage content smoke', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Loads homepage shell and hero CTA content', () => {
    cy.location('pathname').should('eq', '/');
    cy.get('#navbar').should('be.visible');
    cy.get('#navbar a[href="/"] img[alt="Níos Fearr Consulting"]').should('be.visible');

    cy.contains('h1', 'Igniting Your').should('be.visible').closest('section').within(() => {
      cy.contains('a', 'Get in Touch').should('have.attr', 'href', '#contact');
      cy.contains('a', 'Our Services').should('have.attr', 'href', '#services');
    });
  });

  it('Renders all critical homepage sections and testimonials', () => {
    const criticalSections = [
      { id: 'services', heading: 'Technology Consultancy & Advisory' },
      { id: 'mentoring', heading: 'Developmental Mentoring' },
      { id: 'process', heading: 'A Clear Approach' },
      { id: 'why-us', heading: 'Built on Trust, Driven by Results' },
      { id: 'testimonials', heading: 'What Our Clients Say' },
      { id: 'contact', heading: "Let's Start a Conversation" },
    ];

    cy.wrap(criticalSections).each((section) => {
      cy.get(`#${section.id}`).scrollIntoView().should('be.visible').within(() => {
        cy.contains(section.heading).should('exist');
      });
    });

    cy.get('#testimonials .testimonial-card:not([aria-hidden="true"])').should(($cards) => {
      expect($cards.length).to.be.gte(3);
    });
  });

  it('Renders contact actions and form essentials', () => {
    cy.get('#contact').scrollIntoView().should('be.visible');

    cy.get('#contact-form').within(() => {
      cy.get('input#name[required]').should('exist');
      cy.get('input#email[required]').should('have.attr', 'type', 'email');
      cy.get('textarea#message[required]').should('exist');
      cy.get('#submit-btn').should('contain.text', 'Open Email Client').and('be.visible');
      cy.contains('a', 'ckeane@niosfearr.ie')
        .should('have.attr', 'href', 'mailto:ckeane@niosfearr.ie');
    });

    cy.get('#contact a[href^="tel:"]')
      .should('have.attr', 'href', 'tel:+353868799566')
      .and('be.visible');
  });
});