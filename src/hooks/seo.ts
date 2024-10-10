import { useEffect } from "react";
import config from "@/config";

type PageMeta = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
};

export const usePageMeta = (data: PageMeta) => {
  const findOrCreateMeta = (key: string, value: string) => {
    let meta = document.querySelector<HTMLMetaElement>(`meta[name="${key}"]`);
    if (meta) {
      meta.setAttribute("content", value);
    } else {
      meta = document.createElement("meta");
      meta.name = key;
      meta.content = value;
      document.head.appendChild(meta);
    }
  };

  useEffect(() => {
    document.title = data.title
      ? `${data.title} – ${config.app.name}`
      : config.app.name;
    findOrCreateMeta("description", data.description || "");
    findOrCreateMeta("keywords", data.keywords || "");
    findOrCreateMeta("og:image", data.image || "");

    return () => {};
  }, [data]);
};
