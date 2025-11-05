import React from "react";
import FormField, { FormFieldProps } from "./FormField";

export interface FormCheckboxProps extends Omit<FormFieldProps, "type"> {
	label: string;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({ label, ...props }) => {
	return <FormField {...props} type="checkbox" label={label} />;
};

export default FormCheckbox;

