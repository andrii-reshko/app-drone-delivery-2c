import Home from "./home";

describe("<Home />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home />);
    cy.getByTestId("home").should("exist");
  });
});
