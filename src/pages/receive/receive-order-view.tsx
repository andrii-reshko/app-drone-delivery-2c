import { Link, useParams } from "react-router-dom";
import { trimUuid } from "@/helpers";
import PageMeta from "@/components/common/page-meta.tsx";
import SplitLayout from "@/components/layout/split-layout.tsx";
import Card from "@/components/common/card.tsx";
import Toolbar from "@/components/common/toolbar.tsx";

type RouteParams = {
  uuid?: string;
};

const ReceiveOrderView = () => {
  const { uuid } = useParams<RouteParams>();

  const shortUuid = trimUuid(uuid as string);

  return (
    <>
      <PageMeta title={`${shortUuid} – Incoming`} />
      <SplitLayout>
        <Card
          className={"flex-fill"}
          header={
            <Toolbar title={"Incoming Order"} subtitle={`# ${shortUuid}`} />
          }
          footer={
            <Link className={"btn btn-secondary"} to={"/receive"}>
              Back
            </Link>
          }
        ></Card>
      </SplitLayout>
    </>
  );
};
export default ReceiveOrderView;
