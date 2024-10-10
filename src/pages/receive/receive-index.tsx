import { Link, Outlet } from "react-router-dom";
import PageMeta from "@/components/common/page-meta.tsx";

const ReceiveIndex = () => {
  return (
    <>
      <PageMeta title="Incoming Orders" />
      <article data-testid={"receive-index"}>
        <h1>Receive Orders Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
          incidunt.
        </p>
        <ul>
          <li>
            <Link to={"/receive/00000000-0000-0000-0000-000000000001"}>
              View order 1
            </Link>
          </li>
          <li>
            <Link to={"/receive/00000000-0000-0000-0000-000000000002"}>
              View order 2
            </Link>
          </li>
          <li>
            <Link to={"/receive/00000000-0000-0000-0000-000000000003"}>
              View order 3
            </Link>
          </li>
        </ul>
        <Outlet />
      </article>
    </>
  );
};

export default ReceiveIndex;
