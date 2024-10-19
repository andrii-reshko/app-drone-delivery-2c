import { ReactNode } from "react";

type ToolbarProps = {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
};

const Toolbar = ({ title, subtitle, actions }: ToolbarProps) => {
  return (
    <div className={"container-fluid py-2 bg-light box-shadow mb-2"}>
      <div className="layout-h align-items-center">
        <div className="layout-v flex-grow">
          <div className={"h5"}>{title}</div>
          {subtitle && <div className={"text-muted text-sm"}>{subtitle}</div>}
        </div>
        <div className="layout-h flex-shrink">{actions}</div>
      </div>
    </div>
  );
};

export default Toolbar;
