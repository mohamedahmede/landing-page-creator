import React from "react";
import FormField, { FormFieldProps } from "./FormField";

export interface FormFileProps extends Omit<FormFieldProps, "type"> {
	accept?: string;
	multiple?: boolean;
}

const FormFile: React.FC<FormFileProps> = ({ accept, multiple, ...props }) => {
	return <FormField {...props} type="file" accept={accept} multiple={multiple} />;
};

export default FormFile;

