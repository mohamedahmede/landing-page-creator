import React from "react";
import FormField, { FormFieldProps } from "./FormField";

export interface FormRadioProps extends Omit<FormFieldProps, "type"> {
	options: Array<{ label: string; value: string | number }>;
	label?: string;
}

const FormRadio: React.FC<FormRadioProps> = ({ options, label, ...props }) => {
	return <FormField {...props} type="radio" options={options} label={label} />;
};

export default FormRadio;

