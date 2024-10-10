import { Link, useParams } from "react-router-dom";
import { trimUuid } from "@/helpers";
import PageMeta from "@/components/common/page-meta.tsx";

const ReceiveOrderView = () => {
  const { uuid } = useParams();

  const shortUuid = trimUuid(uuid as string);

  return (
    <>
      <PageMeta title={`${shortUuid} – Incoming`} />
      <article>
        <h1>Incoming order</h1>
        <p>Order ID: {shortUuid}</p>
        <Link to={"/receive"}>Back</Link>
      </article>
    </>
  );
};
export default ReceiveOrderView;
