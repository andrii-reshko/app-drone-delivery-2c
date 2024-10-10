import ContactIndex from "./contact-index";

describe("<ContactIndex />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ContactIndex />);
    cy.dataCy("contact-index").should("exist");
  });
});
