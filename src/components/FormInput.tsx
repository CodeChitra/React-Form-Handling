import { ChangeEvent, useState } from "react";

type FormInputProps = {
  id: string;
  name: string;
  placeholder: string;
  type: string;
  label: string;
  value: string;
  errorMessage: string;
  required: boolean;
  pattern: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const FormInput = (props: FormInputProps) => {
  const [focused, setFocused] = useState(false);
  const { errorMessage, label, id, ...inputProps } = props;
  return (
    <div className="form-control">
      <label htmlFor={id}>{label}: </label>
      <input
        id={id}
        {...inputProps}
        data-focused={focused.toString()}
        onBlur={() => setFocused(true)}
        onFocus={(e) => e.target.name === "confirmPassword" && setFocused(true)}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
