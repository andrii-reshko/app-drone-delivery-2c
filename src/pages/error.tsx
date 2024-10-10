import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/seo.ts";

const Error = () => {
  usePageMeta({ title: "Oups" });

  return (
    <main>
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
