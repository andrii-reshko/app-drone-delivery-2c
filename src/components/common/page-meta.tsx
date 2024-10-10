import { IPageMeta, usePageMeta } from "@/hooks/seo.ts";

const PageMeta = (props: IPageMeta) => {
  usePageMeta(props);
  return undefined;
};

export default PageMeta;
