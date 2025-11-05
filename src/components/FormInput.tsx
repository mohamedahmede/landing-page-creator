import React from "react";
import FormField, { FormFieldProps } from "./FormField";

export interface FormInputProps extends Omit<FormFieldProps, "type"> {
	type?: "text" | "email" | "password" | "number" | "tel" | "url" | "date";
}

const FormInput: React.FC<FormInputProps> = (props) => {
	return <FormField {...props} type={props.type || "text"} />;
};

export default FormInput;

