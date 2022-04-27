describe("When user is on login page. user", () => {
  it("Should be able to login with correct email and pasword", () => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать");
  });
  it("Should not be able to login with empty email", () => {
    cy.visit("/");
    cy.login("  ", "123");
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
});
