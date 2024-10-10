import ReceiveIndex from "./receive-index.tsx";

describe("<ReceiveIndex />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ReceiveIndex />);
    cy.dataCy("receive-index").should("exist");
  });
});
