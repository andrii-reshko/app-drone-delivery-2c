import PageMeta from "@/components/common/page-meta.tsx";
import { Link, Outlet } from "react-router-dom";

const ContactIndex = () => {
  return (
    <>
      <PageMeta title="Contacts" />
      <article data-testid={"contact-index"}>
        <h1>Contact Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
          incidunt.
        </p>
        <ul>
          <li>
            <Link to={"/contact/00000000-0000-0000-0000-000000000001"}>
              Person 1
            </Link>
          </li>
          <li>
            <Link to={"/contact/00000000-0000-0000-0000-000000000002"}>
              Person 2
            </Link>
          </li>
          <li>
            <Link to={"/contact/00000000-0000-0000-0000-000000000003"}>
              Person 3
            </Link>
          </li>
        </ul>
        <Outlet />
      </article>
    </>
  );
};

export default ContactIndex;
