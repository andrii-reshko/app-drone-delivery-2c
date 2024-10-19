import { PropsWithChildren, ReactNode } from "react";

type SplitLayoutProps = {
  outlet?: ReactNode;
} & PropsWithChildren;

const SplitLayout = ({ children, outlet }: SplitLayoutProps) => {
  return (
    <article
      data-testid={"contact-index"}
      className="d-flex flex-row flex-fill flex-wrap"
    >
      <div className="col-11 col-sm-6 col-md-5 col-lg-4 d-flex flex-column flex-fill">
        {children}
      </div>
      <div className={"col-1 col-sm-6 col-md-7 col-lg-8"}>{outlet}</div>
    </article>
  );
};

export default SplitLayout;
