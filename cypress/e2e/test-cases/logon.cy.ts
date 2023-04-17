import IndexPage from '../../pageObjects/index.page';

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

    cy.get('.smallText').should(
      'contain',
      'Welcome ' + testData.login.validUser.fullName
    );

    cy.get('a[href="/parabank/logout.htm"]').click();
  });
});
