import ReceiveIndex from "./receive-index.tsx";
import { MemoryRouter } from "react-router-dom";

describe("<ReceiveIndex />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <MemoryRouter>
        <ReceiveIndex />
      </MemoryRouter>,
    );
    cy.dataCy("receive-index").should("exist");
  });
});
