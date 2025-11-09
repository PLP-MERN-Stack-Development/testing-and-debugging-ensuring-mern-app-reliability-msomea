describe("User List Flow", () => {
  it("loads users from API and displays them", () => {
    cy.intercept("GET", "/api/users", {
      statusCode: 200,
      body: [{ username: "e2eUser1" }, { username: "e2eUser2" }],
    });
    cy.visit("/"); // ensure your app renders UserList on home page
    cy.contains("e2eUser1");
    cy.contains("e2eUser2");
  });
});
