import { Link } from "react-router-dom";
import PageMeta from "@/components/common/page-meta.tsx";
import Card from "@/components/common/card.tsx";
import Toolbar from "@/components/common/toolbar.tsx";
import Pagination from "@/components/common/pagination.tsx";
import { useIncomingOrders } from "@/hooks/incoming-orders.ts";

const ReceiveIndex = () => {
  const { items, loading, pagination, query, setQuery } = useIncomingOrders();

  return (
    <>
      <PageMeta title="Incoming Orders" />

      <Card
        data-testid={"receive-index"}
        className={"flex-fill"}
        header={<Toolbar title={"My incoming orders"} subtitle={"..."} />}
      >
        <ul>
          {items.map((order) => (
            <li key={order.uuid} className={"mb-3"}>
              <Link to={`/receive/${order.uuid}`}>
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

export default ReceiveIndex;
