import { Link } from "react-router-dom";
import PageMeta from "@/components/common/page-meta.tsx";
import Toolbar from "@/components/common/toolbar.tsx";
import Card from "@/components/common/card.tsx";
import SplitLayout from "@/components/layout/split-layout.tsx";

const SendIndex = () => {
  return (
    <>
      <PageMeta title="Sent Orders" />
      <SplitLayout>
        <Card
          data-testid={"send-index"}
          className={"flex-fill"}
          header={
            <Toolbar
              title={"Outgoing orders"}
              subtitle={"..."}
              actions={
                <>
                  <Link className={"btn btn-primary"} to={"/send/create"}>
                    Request delivery
                  </Link>
                </>
              }
            />
          }
        >
          <ul>
            <li>
              <Link to={"/send/00000000-0000-0000-0000-000000000001"}>
                View order 1
              </Link>
            </li>
            <li>
              <Link to={"/send/00000000-0000-0000-0000-000000000002"}>
                View order 2
              </Link>
            </li>
            <li>
              <Link to={"/send/00000000-0000-0000-0000-000000000003"}>
                View order 3
              </Link>
            </li>
          </ul>
        </Card>
      </SplitLayout>
    </>
  );
};

export default SendIndex;
