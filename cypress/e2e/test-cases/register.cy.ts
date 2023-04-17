import RegisterPage from '../../pageObjects/register.page';

describe('Register Test', () => {
  let testData: any;
  let messages: any;

  beforeEach(() => {
    cy.fixture('testData').then((data) => {
      testData = data;
    });
    cy.fixture('messages').then((data) => {
      messages = data;
    });
  });

  it('should register a new user', () => {
    RegisterPage.visit();
    RegisterPage.fillForm(
      testData.register.firstName,
      testData.register.lastName,
      testData.register.address,
      testData.register.city,
      testData.register.state,
      testData.register.zipCode,
      testData.register.phone,
      testData.register.ssn,
      testData.register.username,
      testData.register.password
    );
    RegisterPage.submitForm();

    // Add any assertions to verify the successful registration, e.g., a successful registration message
    cy.get('#rightPanel > p').should('contain', messages.register.success);
  });
});
