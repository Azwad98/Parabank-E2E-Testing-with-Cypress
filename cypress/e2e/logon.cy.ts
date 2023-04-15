import IndexPage from '../pageObjects/index.page';

describe('Login Test', () => {
  let testData: any;

  before(() => {
    cy.fixture('testData').then((data) => {
      testData = data;
    });
  });

  it('should log in with valid credentials', () => {
    IndexPage.visit();
    IndexPage.fillLoginForm(
      testData.login.validUser.username,
      testData.login.validUser.password
    );
    IndexPage.submitLoginForm();

    // Add any assertions to verify the successful login, e.g., check for an element that is present only when logged in
    cy.get('.smallText').should(
      'contain',
      'Welcome ' + testData.login.validUser.fullName
    );

    cy.get('a[href="/parabank/logout.htm"]').click();
  });

  it('should fail to log in with invalid credentials', () => {
    IndexPage.visit();
    IndexPage.fillLoginForm(
      testData.login.invalidUser.username,
      testData.login.invalidUser.password
    );
    IndexPage.submitLoginForm();

    // Add any assertions to verify the failed login attempt, e.g., an error message
    cy.get('#errorMessage').should('contain', 'Invalid username or password');
  });
});
