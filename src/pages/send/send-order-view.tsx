import { Link, useParams } from "react-router-dom";
import { trimUuid } from "@/helpers";
import PageMeta from "@/components/common/page-meta.tsx";
import Card from "@/components/common/card.tsx";
import Toolbar from "@/components/common/toolbar.tsx";
import { useEffect, useState } from "react";
import {
  useCreateOutgoingOrder,
  useShowOutgoingOrder,
} from "@/hooks/outgoing-orders.ts";

type RouteParams = {
  uuid?: string;
};

const SendOrderView = () => {
  const { uuid } = useParams<RouteParams>();

  const shortUuid = uuid ? trimUuid(uuid as string) : "Add";

  const {
    instance: loadedInstance,
    loading,
    fetchItem,
  } = useShowOutgoingOrder();

  const { instance: newInstance, createInstance } = useCreateOutgoingOrder();

  const [instance, setInstance] = useState(loadedInstance || newInstance);

  useEffect(() => {
    if (uuid) fetchItem(uuid);
    else createInstance();
  }, [uuid]);

  useEffect(() => {
    setInstance(loadedInstance);
  }, [loadedInstance]);

  useEffect(() => {
    setInstance(newInstance);
  }, [newInstance]);

  return (
    <>
      <PageMeta title={`${shortUuid} – Outgoing`} />
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
      >
        {loading && <p>Loading...</p>}
        {instance && <pre>{JSON.stringify(instance, null, 2)}</pre>}
      </Card>
    </>
  );
};
export default SendOrderView;
