import PageMeta from "@/components/common/page-meta.tsx";
import { Link, Outlet } from "react-router-dom";

const ContactIndex = () => {
  return (
    <>
      <PageMeta title="Contacts" />
      <article
        data-testid={"contact-index"}
        className="container-fluid d-flex flex-column flex-fill"
      >
        <div className="row d-flex-flex-fill">
          <div className="col-12 col-sm-6">
            <h1 className={"h4"}>My contacts</h1>
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
          </div>
          <div className={"col-12 col-sm-6"}>
            <Outlet />
          </div>
        </div>
      </article>
    </>
  );
};

export default ContactIndex;
