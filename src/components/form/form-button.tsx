import classNames from "classnames";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "link";

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant: ButtonVariant;
};

const FormButton = ({ children, variant, ...props }: Props) => {
  const btnClass = classNames({
    btn: true,
    [`btn-${variant}`]: true,
  });

  return (
    <button {...props} className={btnClass}>
      {children}
    </button>
  );
};

export default FormButton;
