import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main>
      <article className="container d-flex flex-column flex-fill align-items-center justify-content-center text-muted">
        <h1>Page not found</h1>
        <Link to="/">Go back</Link>
      </article>
    </main>
  );
};

export default Error;
