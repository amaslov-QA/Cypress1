describe("When a user adds to favorites", () => {
  it("add books favorites", () => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать");
    cy.createBook("War and Peace", "Tolstoy");
    cy.createBook("Big Daddy", "Korolev");
    cy.createBook("War", "Suvorov");
    cy.get(
      '[href="book/771bff3c-205e-4a74-92ba-b53cd2145603"] > .h-100 > .card-footer > .btn'
    ).click();
    cy.get(
      '[href="book/93ee9675-ef6f-47c5-b40a-cbd92b062aab"] > .h-100 > .card-footer > .btn'
    ).click();
    cy.get("h4").click();
    cy.contains("War and Peace");
    cy.contains("Big Daddy");
  });
});
