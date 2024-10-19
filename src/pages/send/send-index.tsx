import { Link } from "react-router-dom";
import PageMeta from "@/components/common/page-meta.tsx";
import Toolbar from "@/components/common/toolbar.tsx";
import Card from "@/components/common/card.tsx";
import Pagination from "@/components/common/pagination.tsx";
import { useOutgoingOrders } from "@/hooks/outgoing-orders.ts";

const SendIndex = () => {
  const { items, loading, pagination, query, setQuery } = useOutgoingOrders();

  return (
    <>
      <PageMeta title="Sent Orders" />

      <Card
        data-testid={"send-index"}
        className={"flex-fill"}
        header={
          <Toolbar
            title={"Outgoing orders"}
            subtitle={"..."}
            actions={
              <>
                <Link className={"btn btn-primary"} to={"/send/create"}>
                  Request delivery
                </Link>
              </>
            }
          />
        }
      >
        {loading && <div>Loading...</div>}
        <ul>
          {items.map((order) => (
            <li key={order.uuid} className={"mb-3"}>
              <Link to={`/send/${order.uuid}`}>
                <div>
                  <b>{order.description}</b>
                </div>
                <div>
                  {order.sender.location?.address} -{" "}
                  {order.receiver.location?.address}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Pagination
          pages={pagination.pages}
          currentPage={pagination.page}
          onPageChange={(p) => setQuery({ ...query, page: p })}
          showLimit={4}
          loading={loading}
        />
      </Card>
    </>
  );
};

export default SendIndex;
