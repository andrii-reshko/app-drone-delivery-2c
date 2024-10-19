import { PropsWithChildren, ReactNode } from "react";
import classNames from "classnames";

type CardProps = {
  header?: ReactNode | undefined;
  footer?: ReactNode | undefined;
  className?: string;
} & PropsWithChildren;

const Card = ({ header, children, footer, className }: CardProps) => {
  const cardClass = classNames(["card", "box-shadow", className]);

  return (
    <div className={cardClass}>
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
