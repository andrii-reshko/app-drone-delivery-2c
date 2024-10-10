import PageMeta from "@/components/common/page-meta.tsx";
import { Link, Outlet } from "react-router-dom";
import Toolbar from "@/components/common/toolbar.tsx";
import Card from "@/components/common/card.tsx";
import SplitLayout from "@/components/layout/split-layout.tsx";

const ContactIndex = () => {
  return (
    <>
      <PageMeta title="Contacts" />
      <SplitLayout outlet={<Outlet />}>
        <Card
          data-testid={"contact-index"}
          className={"flex-fill"}
          header={
            <Toolbar
              title={"My contacts"}
              subtitle={"List of contacts"}
              actions={
                <>
                  <Link className={"btn btn-primary"} to={"/contact/create"}>
                    Add contact
                  </Link>
                </>
              }
            />
          }
        >
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
        </Card>
      </SplitLayout>
    </>
  );
};

export default ContactIndex;
