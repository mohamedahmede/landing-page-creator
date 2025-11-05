import React from "react";
import FormField, { FormFieldProps } from "./FormField";

export interface FormSelectProps extends Omit<FormFieldProps, "type"> {
	options: Array<{ label: string; value: string | number }>;
	multiple?: boolean;
}

const FormSelect: React.FC<FormSelectProps> = ({ options, multiple, ...props }) => {
	return <FormField {...props} type="select" options={options} multiple={multiple} />;
};

export default FormSelect;

