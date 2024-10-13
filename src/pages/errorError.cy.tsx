import Error from "@/pages/error";
import { MemoryRouter } from "react-router-dom";

describe("<Error />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <MemoryRouter>
        <Error />
      </MemoryRouter>,
    );
    cy.dataCy("error").should("exist");
  });
});
