import React from "react";
import FormField, { FormFieldProps } from "./FormField";

export interface FormTextAreaProps extends Omit<FormFieldProps, "type"> {
	rows?: number;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({ rows, ...props }) => {
	return <FormField {...props} type="textarea" rows={rows} />;
};

export default FormTextArea;

