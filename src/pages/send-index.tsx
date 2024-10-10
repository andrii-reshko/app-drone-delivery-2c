import { usePageMeta } from "@/hooks/seo.ts";

const SendIndex = () => {
  usePageMeta({ title: "Outgoing Orders" });

  return (
    <article data-testid={"send-index"}>
      <h1>Sent Orders Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
        incidunt.
      </p>
    </article>
  );
};

export default SendIndex;
