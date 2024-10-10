import { Link } from "react-router-dom";
import PageMeta from "@/components/common/page-meta.tsx";

const ReceiveIndex = () => {
  return (
    <>
      <PageMeta title="Incoming Orders" />
      <article
        data-testid={"receive-index"}
        className="container-fluid d-flex flex-column flex-fill"
      >
        <div className="row d-flex-flex-fill">
          <div className="col-12 col-sm-6">
            <h1 className={"h4"}>My incoming orders</h1>
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
          </div>
          <div className="col-12 col-sm-6"></div>
        </div>
      </article>
    </>
  );
};

export default ReceiveIndex;
