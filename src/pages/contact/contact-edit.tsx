import { Link, useParams } from "react-router-dom";
import { trimUuid } from "@/helpers";
import PageMeta from "@/components/common/page-meta.tsx";

type RouteParams = {
  uuid?: string;
};

const ContactEdit = () => {
  const { uuid } = useParams<RouteParams>();

  const shortUuid = uuid ? trimUuid(uuid) : "Add";

  return (
    <>
      <PageMeta title={`${shortUuid} – Contact`} />
      <article>
        <h1>Contact</h1>
        <p>Contact ID: {shortUuid}</p>
        <Link to={"/contact"}>Back</Link>
      </article>
    </>
  );
};
export default ContactEdit;
