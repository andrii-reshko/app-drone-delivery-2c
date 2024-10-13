import { PropsWithChildren, ReactElement } from "react";

export type FormFieldProps = PropsWithChildren & {
  id: string;
  label?: string;
  prepend?: ReactElement;
  append?: ReactElement;
};

const FormField = ({
  id,
  children,
  label,
  prepend,
  append,
}: FormFieldProps) => {
  return (
    <div className={"form-field d-flex flex-column g-1"}>
      <label htmlFor={id}>{label}</label>
      <div className={"form-input-wrapper"}>
        {prepend && <div className={"form-input-prepend"}>{prepend}</div>}
        {children}
        {append && <div className={"form-input-append"}>{append}</div>}
      </div>
    </div>
  );
};

export default FormField;
