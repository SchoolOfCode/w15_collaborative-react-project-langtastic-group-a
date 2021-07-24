describe("tutor selection", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("allows for booking appointments", () => {
    //get tutor selection link
    cy.get(".tutorselection")
      //when clicked
      .click()
      //shows tutor selection
      .visit("/tutorselection");
    //get book now button#
    cy.get("a.book-now")
      .first()
      //when clicked
      .click()
      //go to appointment
      .visit("/appointment_confirmation");
    //get yes button
    cy.get("button.yes")
      //when clicked
      .click();
    //show confirmation
    cy.get("p.booked").should("have.text", "Session booked");
  });
});
