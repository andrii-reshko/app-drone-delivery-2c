import { ChangeEvent } from "react";
import FormField, { FormFieldProps } from "./form-field.tsx";

type FormInputProps = FormFieldProps & {
  type?: string;
  value?: string;
  onInput: (value: string) => void;
  placeholder?: string;
  required?: boolean;
};

const FormInput = (props: FormInputProps) => {
  const inputProps = {
    id: props.id,
    name: props.id,
    type: props.type || "text",
    value: props.value || "",
    placeholder: props.placeholder,
    onInput: (e: ChangeEvent<HTMLInputElement>) =>
      props.onInput(e.target.value),
    required: props.required || false,
  };

  const fieldProps = {
    id: props.id,
    label: props.label,
    prepend: props.prepend,
    append: props.append,
    // todo add some error handling
  };

  return (
    <FormField {...fieldProps}>
      <input {...inputProps} />
    </FormField>
  );
};

export default FormInput;
