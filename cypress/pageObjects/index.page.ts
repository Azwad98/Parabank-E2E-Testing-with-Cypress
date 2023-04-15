class IndexPage {
  visit() {
    cy.visit('/');
  }

  fillLoginForm(username: string, password: string) {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
  }

  submitLoginForm() {
    cy.get('[type="submit"]').click();
  }
}

export default new IndexPage();
