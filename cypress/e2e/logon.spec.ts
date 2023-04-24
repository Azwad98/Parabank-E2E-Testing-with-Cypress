import IndexPage from '../pageObjects/index.page';

describe('Login Test', () => {
  let testData: any;
  let randUsername;
  before(() => {
    cy.fixture('testData').then((data) => {
      testData = data;
    });
    cy.readFile('cypress/fixtures/tempStorage.json').then((data) => {
      randUsername = data.randUsername;
    });
  });

  it('should log in with valid credentials', () => {
    IndexPage.visit();
    IndexPage.fillLoginForm(randUsername, testData.user.validUser.password);
    IndexPage.submitLoginForm();

    cy.get('.smallText').should('contain', 'Welcome ' + randUsername);

    cy.get('a[href="/parabank/logout.htm"]').click();
  });
});
