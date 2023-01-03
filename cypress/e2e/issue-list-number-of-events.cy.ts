describe("Issue list number of events and users", () => {
  beforeEach(() => {
    // open issues page
    cy.visit(`http://localhost:3000/dashboard/issues
    `);
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("checks if the numbers in the first two td elements are different", () => {
      const firstNumber = cy.get("tbody>tr>td").eq(2);
      const secondNumber = cy.get("tbody>tr>td").eq(3);

      expect(firstNumber).to.not.equal(secondNumber);
    });
  });

  context("mobile resolution", () => {
    beforeEach(() => {
      cy.viewport("iphone-8");
    });
    it("checks if the numbers in the first two td elements are different", () => {
      const firstNumber = cy.get("tbody>tr>td").eq(2);
      const secondNumber = cy.get("tbody>tr>td").eq(3);

      expect(firstNumber).to.not.equal(secondNumber);
    });
  });
});
