import { usePageMeta } from "@/hooks/seo.ts";

const ReceiveIndex = () => {
  usePageMeta({ title: "Incoming Orders" });

  return (
    <article data-testid={"receive-index"}>
      <h1>Receive Orders Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
        incidunt.
      </p>
    </article>
  );
};

export default ReceiveIndex;
