import { Link, useParams } from "react-router-dom";
import { trimUuid } from "@/helpers";
import PageMeta from "@/components/common/page-meta.tsx";
import Card from "@/components/common/card.tsx";
import Toolbar from "@/components/common/toolbar.tsx";
import { useShowIncomingOrder } from "@/hooks/incoming-orders.ts";
import { useEffect } from "react";

type RouteParams = {
  uuid?: string;
};

const ReceiveOrderView = () => {
  const { uuid } = useParams<RouteParams>();

  const shortUuid = uuid ? trimUuid(uuid as string) : "Add";

  const { instance, loading, fetchItem } = useShowIncomingOrder();

  useEffect(() => {
    if (uuid) fetchItem(uuid);
  }, [uuid]);

  return (
    <>
      <PageMeta title={`${shortUuid} – Incoming`} />

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
      >
        {loading && <p>Loading...</p>}
        {instance && <pre>{JSON.stringify(instance, null, 2)}</pre>}
      </Card>
    </>
  );
};
export default ReceiveOrderView;
