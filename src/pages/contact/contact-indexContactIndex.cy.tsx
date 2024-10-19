import ContactIndex from "./contact-index.tsx";
import { MemoryRouter } from "react-router-dom";

describe("<ContactIndex />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <MemoryRouter>
        <ContactIndex />
      </MemoryRouter>,
    );
    cy.dataCy("contact-index").should("exist");
  });
});
