describe("tutor selection", () => {
  beforeEach(() => {
    cy.visit("/tutorselection");
  });

  it("displays list of tutors", () => {
    cy.get(".tutor-information").should("have.length", 50);
  });
});
