import { useParams } from "react-router-dom";
import { usePageMeta } from "@/hooks/seo.ts";
import { trimUuid } from "@/helpers";

const OrderView = () => {
  const { uuid } = useParams();

  usePageMeta({
    title: `Order ${trimUuid(uuid as string)} - Incoming`,
  });

  return (
    <article>
      <h1>Incoming order</h1>
      <p>Order ID: {trimUuid(uuid as string)}</p>
    </article>
  );
};
export default OrderView;
