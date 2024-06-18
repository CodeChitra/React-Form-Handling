import { ChangeEvent, useState } from "react";
import FormInput from "./FormInput";

interface InputElement {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  label: string;
  errorMessage: string;
  pattern: string;
  required: boolean;
}
interface Values {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const Form = () => {
  const [values, setValues] = useState<Values>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(values);

  const inputs: InputElement[] = [
    {
      type: "text",
      name: "firstname",
      id: "firstname",
      placeholder: "enter first name",
      label: "First Name",
      errorMessage:
        "Please enter a valid name consisting of 4 to 20 alphabetical characters only.",
      pattern: "[a-zA-Z]{4,20}",
      required: true,
    },
    {
      type: "text",
      name: "lastname",
      id: "lastname",
      placeholder: "enter last name",
      label: "Last Name",
      errorMessage:
        "Please enter a valid name consisting of 4 to 20 alphabetical characters only.",
      pattern: "[a-zA-Z]{4,20}",
      required: true,
    },
    {
      type: "email",
      name: "email",
      id: "email",
      placeholder: "enter email",
      label: "Email",
      errorMessage:
        "Please enter a valid email address (e.g., name@example.com).",
      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
      required: true,
    },
    {
      type: "password",
      name: "password",
      id: "password",
      placeholder: "enter password",
      label: "Password",
      errorMessage:
        "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character (!@#$%^&*()).",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      type: "password",
      name: "confirmPassword",
      id: "confirmPassword",
      placeholder: "enter password again",
      label: "Confirm Password",
      errorMessage: "Password does not match.",
      pattern: values.password,
      required: true,
    },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <form>
      {inputs.map((inputProps: InputElement) => {
        const name = inputProps.name;
        let value = "";
        if (name in values) {
          value = values[name as keyof Values];
        }
        return (
          <FormInput
            key={inputProps.id}
            {...inputProps}
            onChange={handleChange}
            value={value}
          />
        );
      })}
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default Form;
