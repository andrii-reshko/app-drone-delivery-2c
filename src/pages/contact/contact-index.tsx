import PageMeta from "@/components/common/page-meta.tsx";
import { Link, Outlet } from "react-router-dom";
import Toolbar from "@/components/common/toolbar.tsx";
import Card from "@/components/common/card.tsx";
import SplitLayout from "@/components/layout/split-layout.tsx";
import { useContacts } from "@/hooks/contacts.ts";
import Pagination from "@/components/common/pagination.tsx";

const ContactIndex = () => {
  const { loading, pagination, query, setQuery, items } = useContacts();

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
          {loading && <div>Loading...</div>}
          <ul>
            {items.map((contact) => (
              <li key={contact.uuid} className={"mb-2"}>
                <Link to={`/contact/${contact.uuid}`}>
                  <div>
                    <div>
                      <b>{contact.name}</b>
                    </div>
                    <div>{contact.email} </div>
                    <div>{contact.location?.address || "Unknown"}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <Pagination
            pages={pagination.pages}
            currentPage={pagination.page}
            onPageChange={(p) => setQuery({ ...query, page: p })}
            loading={loading}
          />
        </Card>
      </SplitLayout>
    </>
  );
};

export default ContactIndex;
