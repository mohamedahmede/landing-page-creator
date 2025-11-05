import React from "react";
import { useField, FieldHookConfig } from "formik";
import clsx from "clsx";
import "../styles/form.css";

export interface FormFieldProps extends FieldHookConfig<any> {
	label?: string;
	placeholder?: string;
	helperText?: string;
	className?: string;
	required?: boolean;
	disabled?: boolean;
	/** Custom render function for the input */
	renderInput?: (props: any) => React.ReactNode;
	/** Show error message */
	showError?: boolean;
	/** Field type */
	type?: string;
	/** Additional props for specific field types */
	rows?: number;
	options?: Array<{ label: string; value: string | number }>;
	multiple?: boolean;
	accept?: string;
}

const FormField: React.FC<FormFieldProps> = ({
	label,
	placeholder,
	helperText,
	className,
	required,
	disabled,
	renderInput,
	showError = true,
	type = "text",
	rows,
	options,
	multiple,
	accept,
	...props
}) => {
	const [field, meta, helpers] = useField(props);
	const hasError = meta.touched && meta.error;

	const fieldId = `field-${field.name}`;

	const renderField = () => {
		if (renderInput) {
			return renderInput({ ...field, ...props, id: fieldId, disabled });
		}

		switch (type) {
			case "textarea":
				return (
					<textarea
						{...field}
						{...props}
						id={fieldId}
						placeholder={placeholder}
						disabled={disabled}
						rows={rows || 4}
						className={clsx("reusable-form__input", "reusable-form__textarea", className, {
							"reusable-form__input--error": hasError,
							"reusable-form__input--disabled": disabled,
						})}
					/>
				);

			case "select":
				return (
					<select
						{...field}
						{...props}
						id={fieldId}
						disabled={disabled}
						multiple={multiple}
						className={clsx("reusable-form__input", "reusable-form__select", className, {
							"reusable-form__input--error": hasError,
							"reusable-form__input--disabled": disabled,
						})}
					>
						{placeholder && <option value="">{placeholder}</option>}
						{options?.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
				);

			case "checkbox":
				return (
					<div className="reusable-form__checkbox-wrapper">
						<input
							{...field}
							{...props}
							id={fieldId}
							type="checkbox"
							checked={field.value || false}
							disabled={disabled}
							className={clsx("reusable-form__checkbox", className, {
								"reusable-form__checkbox--error": hasError,
								"reusable-form__checkbox--disabled": disabled,
							})}
						/>
						{label && (
							<label htmlFor={fieldId} className="reusable-form__checkbox-label">
								{label}
								{required && <span className="reusable-form__required">*</span>}
							</label>
						)}
					</div>
				);

			case "radio":
				if (!options) return null;
				return (
					<div className="reusable-form__radio-group">
						{options.map((option) => {
							const radioId = `${fieldId}-${option.value}`;
							return (
								<div key={option.value} className="reusable-form__radio-wrapper">
									<input
										{...field}
										{...props}
										id={radioId}
										type="radio"
										value={option.value}
										checked={field.value === option.value}
										disabled={disabled}
										className={clsx("reusable-form__radio", className, {
											"reusable-form__radio--error": hasError,
											"reusable-form__radio--disabled": disabled,
										})}
									/>
									<label htmlFor={radioId} className="reusable-form__radio-label">
										{option.label}
									</label>
								</div>
							);
						})}
					</div>
				);

			case "file":
				return (
					<div className="reusable-form__file-wrapper">
						<input
							{...field}
							{...props}
							id={fieldId}
							type="file"
							accept={accept}
							multiple={multiple}
							disabled={disabled}
							onChange={(e) => {
								const file = e.target.files?.[0];
								helpers.setValue(file || null);
								field.onChange(e);
							}}
							className={clsx("reusable-form__file", className, {
								"reusable-form__file--error": hasError,
								"reusable-form__file--disabled": disabled,
							})}
						/>
						{field.value && (
							<div className="reusable-form__file-name">
								{field.value instanceof File ? field.value.name : "File selected"}
							</div>
						)}
					</div>
				);

			default:
				return (
					<input
						{...field}
						{...props}
						id={fieldId}
						type={type}
						placeholder={placeholder}
						disabled={disabled}
						className={clsx("reusable-form__input", className, {
							"reusable-form__input--error": hasError,
							"reusable-form__input--disabled": disabled,
						})}
					/>
				);
		}
	};

	// For checkbox and radio, label is rendered differently
	if (type === "checkbox" || type === "radio") {
		return (
			<div className={clsx("reusable-form__field", className)}>
				{renderField()}
				{showError && hasError && (
					<div className="reusable-form__error">{meta.error}</div>
				)}
				{helperText && !hasError && (
					<div className="reusable-form__helper">{helperText}</div>
				)}
			</div>
		);
	}

	return (
		<div className={clsx("reusable-form__field", className)}>
			{label && (
				<label htmlFor={fieldId} className="reusable-form__label">
					{label}
					{required && <span className="reusable-form__required">*</span>}
				</label>
			)}
			{renderField()}
			{showError && hasError && (
				<div className="reusable-form__error">{meta.error}</div>
			)}
			{helperText && !hasError && (
				<div className="reusable-form__helper">{helperText}</div>
			)}
		</div>
	);
};

export default FormField;

