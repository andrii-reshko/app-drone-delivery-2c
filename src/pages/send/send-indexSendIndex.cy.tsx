import SendIndex from "./send-index";

describe("<SendIndex />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SendIndex />);
    cy.dataCy("send-index").should("exist");
  });
});
