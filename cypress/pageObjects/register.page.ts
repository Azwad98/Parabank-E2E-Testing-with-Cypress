class RegisterPage {
  visit() {
    cy.visit('/register.htm');
  }

  fillForm(
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    zipCode: string,
    phone: string,
    ssn: string,
    username: string,
    password: string
  ) {
    cy.get('#customer\\.firstName').type(firstName);
    cy.get('#customer\\.lastName').type(lastName);
    cy.get('#customer\\.address\\.street').type(address);
    cy.get('#customer\\.address\\.city').type(city);
    cy.get('#customer\\.address\\.state').type(state);
    cy.get('#customer\\.address\\.zipCode').type(zipCode);
    cy.get('#customer\\.phoneNumber').type(phone);
    cy.get('#customer\\.ssn').type(ssn);
    cy.get('#customer\\.username').type(username);
    cy.get('#customer\\.password').type(password);
    cy.get('#repeatedPassword').type(password);
  }

  fillField(fieldName: string, value: string) {
    cy.get(`#${fieldName}`).type(value);
  }

  submitForm() {
    cy.get('input[type="submit"].button[value="Register"]').click();
  }

  fillFormWithMissingFields(formData: any, missingFields: string[]) {
    for (const field in formData) {
      if (!missingFields.includes(field)) {
        const inputSelector = field.includes('.')
          ? `#${field.replace('.', '\\.')}`
          : `#${field}`;
        cy.get(inputSelector).type(formData[field]);
      }
    }
  }
}

export default new RegisterPage();
