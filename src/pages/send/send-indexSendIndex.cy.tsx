import SendIndex from "./send-index.tsx";
import { MemoryRouter } from "react-router-dom";

describe("<SendIndex />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <MemoryRouter>
        <SendIndex />
      </MemoryRouter>,
    );
    cy.dataCy("send-index").should("exist");
  });
});
