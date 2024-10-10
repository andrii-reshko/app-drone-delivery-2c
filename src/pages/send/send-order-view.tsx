import { Link, useParams } from "react-router-dom";
import { trimUuid } from "@/helpers";
import PageMeta from "@/components/common/page-meta.tsx";

const SendOrderView = () => {
  const { uuid } = useParams();
  const shortUuid = trimUuid(uuid as string);

  return (
    <>
      <PageMeta title={`${shortUuid} – Outgoing`} />
      <article>
        <h1>Order View</h1>
        <p>Order ID: {shortUuid}</p>
        <Link to={"/send"}>Back</Link>
      </article>
    </>
  );
};
export default SendOrderView;
