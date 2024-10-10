import { Link } from "react-router-dom";
import PageMeta from "@/components/common/page-meta.tsx";

const Error = () => {
  return (
    <main>
      <PageMeta title={"Oups"} />
      <article
        data-testid={"error"}
        className="container d-flex flex-column flex-fill align-items-center justify-content-center text-muted"
      >
        <h1>Page not found</h1>
        <Link to="/">Go back</Link>
      </article>
    </main>
  );
};

export default Error;
