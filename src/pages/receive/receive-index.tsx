import { Link } from "react-router-dom";
import PageMeta from "@/components/common/page-meta.tsx";
import Card from "@/components/common/card.tsx";
import Toolbar from "@/components/common/toolbar.tsx";
import SplitLayout from "@/components/layout/split-layout.tsx";

const ReceiveIndex = () => {
  return (
    <>
      <PageMeta title="Incoming Orders" />
      <SplitLayout>
        <Card
          data-testid={"receive-index"}
          className={"flex-fill"}
          header={<Toolbar title={"My incoming orders"} subtitle={"..."} />}
        >
          <ul>
            <li>
              <Link to={"/receive/00000000-0000-0000-0000-000000000001"}>
                View order 1
              </Link>
            </li>
            <li>
              <Link to={"/receive/00000000-0000-0000-0000-000000000002"}>
                View order 2
              </Link>
            </li>
            <li>
              <Link to={"/receive/00000000-0000-0000-0000-000000000003"}>
                View order 3
              </Link>
            </li>
          </ul>
        </Card>
      </SplitLayout>
    </>
  );
};

export default ReceiveIndex;
