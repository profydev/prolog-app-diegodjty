describe("support button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("finds support button when navigation is collapsed and when is not", () => {
      cy.get("button").contains("Support").should("exist");
      cy.get("nav").contains("Collapse").click();
      cy.get("img[alt='Support icon']").should("exist");
    });
  });

  context("mobile resolution", () => {
    beforeEach(() => {
      cy.viewport("iphone-8");
    });

    it("finds support button when navigation is collapsed and when is not", () => {
      cy.get("button").contains("Support").should("exist");
      cy.get("img[alt='open menu']").click();
      cy.get("img[alt='Support icon']").should("exist");
    });
  });
});
