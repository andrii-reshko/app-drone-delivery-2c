import { Link, useParams } from "react-router-dom";
import { trimUuid } from "@/helpers";
import PageMeta from "@/components/common/page-meta.tsx";
import SplitLayout from "@/components/layout/split-layout.tsx";
import Card from "@/components/common/card.tsx";
import Toolbar from "@/components/common/toolbar.tsx";

type RouteParams = {
  uuid?: string;
};

const SendOrderView = () => {
  const { uuid } = useParams<RouteParams>();

  const shortUuid = uuid ? trimUuid(uuid as string) : "Add";

  return (
    <>
      <PageMeta title={`${shortUuid} – Outgoing`} />
      <SplitLayout>
        <Card
          className={"flex-fill"}
          header={
            <Toolbar title={"Outgoing Order"} subtitle={`# ${shortUuid}`} />
          }
          footer={
            <Link className={"btn btn-secondary"} to={"/send"}>
              Back
            </Link>
          }
        ></Card>
      </SplitLayout>
    </>
  );
};
export default SendOrderView;
