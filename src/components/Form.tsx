import React from "react";
import { Formik, FormikProps, FormikConfig, Form as FormikForm } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import FormField from "./FormField";
import "../styles/form.css";

export interface ValidationRules {
	/** Minimum length/value */
	min?: number;
	/** Maximum length/value */
	max?: number;
	/** Custom regex pattern */
	pattern?: RegExp;
	/** Custom error message for pattern */
	patternMessage?: string;
	/** Custom validation function */
	validate?: (value: any) => boolean | string;
	/** Custom error message */
	message?: string;
}

export interface FormFieldConfig {
	name: string;
	label?: string;
	type?: "text" | "email" | "password" | "number" | "tel" | "url" | "textarea" | "select" | "checkbox" | "radio" | "date" | "file";
	placeholder?: string;
	options?: Array<{ label: string; value: string | number }>;
	rows?: number;
	multiple?: boolean;
	accept?: string;
	disabled?: boolean;
	required?: boolean;
	/** Custom error message for required field */
	requiredMessage?: string;
	helperText?: string;
	className?: string;
	/** Inline validation rules - automatically builds Yup schema */
	validation?: ValidationRules;
}

export interface FormProps<T extends Record<string, any> = Record<string, any>> {
	/** Initial form values */
	initialValues: T;
	/** Yup validation schema (optional - will auto-generate from fields if not provided) */
	validationSchema?: Yup.ObjectSchema<any>;
	/** Form submission handler */
	onSubmit: (values: T, formikHelpers: any) => void | Promise<void>;
	/** Form fields configuration with inline validation */
	fields: FormFieldConfig[];
	/** Form section title */
	title?: string;
	/** Form section description */
	description?: string;
	/** Optional image URL to display alongside form */
	image?: string;
	/** Image position - left or right of the form */
	imagePosition?: "left" | "right";
	/** Image alt text */
	imageAlt?: string;
	/** Whether the image should be rounded */
	imageRounded?: boolean;
	/** Submit button text */
	submitText?: string;
	/** Submit button variant */
	submitVariant?: "black" | "white" | "red" | "gray" | "lime";
	/** Submit button size */
	submitSize?: "sm" | "md" | "lg";
	/** Custom submit button component */
	renderSubmitButton?: (props: { isSubmitting: boolean; isValid: boolean }) => React.ReactNode;
	/** Additional Formik configuration */
	formikConfig?: Omit<FormikConfig<T>, "initialValues" | "validationSchema" | "onSubmit">;
	/** Form className */
	className?: string;
	/** Show loading state */
	loading?: boolean;
	/** Custom field renderer */
	renderField?: (field: FormFieldConfig, formik: FormikProps<T>) => React.ReactNode;
	/** Form layout direction */
	layout?: "vertical" | "horizontal";
	/** Show field labels */
	showLabels?: boolean;
	/** Background color for the form section */
	backgroundColor?: string;
	/** Background image URL */
	backgroundImage?: string;
	/** Horizontal padding (desktop) */
	paddingX?: string;
	/** Horizontal padding (mobile) */
	paddingXMobile?: string;
	/** Vertical padding (desktop) */
	paddingY?: string;
	/** Vertical padding (mobile) */
	paddingYMobile?: string;
	/** Top padding (desktop) */
	paddingTop?: string;
	/** Top padding (mobile) */
	paddingTopMobile?: string;
	/** Bottom padding (desktop) */
	paddingBottom?: string;
	/** Bottom padding (mobile) */
	paddingBottomMobile?: string;
	/** Horizontal padding for form content (title, desc, inputs) - excludes image */
	contentPaddingX?: string;
	/** Horizontal padding for form content (mobile) */
	contentPaddingXMobile?: string;
	/** Vertical padding for form content */
	contentPaddingY?: string;
	/** Vertical padding for form content (mobile) */
	contentPaddingYMobile?: string;
	/** Top padding for form content */
	contentPaddingTop?: string;
	/** Top padding for form content (mobile) */
	contentPaddingTopMobile?: string;
	/** Bottom padding for form content */
	contentPaddingBottom?: string;
	/** Bottom padding for form content (mobile) */
	contentPaddingBottomMobile?: string;
}

/**
 * Automatically builds a Yup validation schema from field configurations
 */
const buildValidationSchema = (fields: FormFieldConfig[]): Yup.ObjectSchema<any> => {
	const schema: Record<string, any> = {};

	fields.forEach((field) => {
		let fieldSchema: any;

		// Determine base schema type based on field type
		switch (field.type) {
			case "email":
				fieldSchema = Yup.string().email(field.validation?.message || "Invalid email address");
				break;
			case "number":
				fieldSchema = Yup.number().typeError(field.validation?.message || "Must be a number");
				break;
			case "url":
				fieldSchema = Yup.string().url(field.validation?.message || "Invalid URL");
				break;
			case "checkbox":
				fieldSchema = Yup.boolean();
				break;
			case "file":
				fieldSchema = Yup.mixed();
				break;
			case "date":
				fieldSchema = Yup.date().typeError(field.validation?.message || "Invalid date");
				break;
			default:
				fieldSchema = Yup.string();
		}

		// Apply validation rules
		if (field.validation) {
			const rules = field.validation;

			if (rules.min !== undefined) {
				if (field.type === "number") {
					fieldSchema = fieldSchema.min(rules.min, rules.message || `Must be at least ${rules.min}`);
				} else {
					fieldSchema = fieldSchema.min(rules.min, rules.message || `Must be at least ${rules.min} characters`);
				}
			}

			if (rules.max !== undefined) {
				if (field.type === "number") {
					fieldSchema = fieldSchema.max(rules.max, rules.message || `Must be at most ${rules.max}`);
				} else {
					fieldSchema = fieldSchema.max(rules.max, rules.message || `Must be at most ${rules.max} characters`);
				}
			}

			if (rules.pattern) {
				fieldSchema = fieldSchema.matches(
					rules.pattern,
					rules.patternMessage || rules.message || "Invalid format"
				);
			}

			if (rules.validate) {
				fieldSchema = fieldSchema.test(
					"custom",
					rules.message || "Validation failed",
					function(value) {
						const result = rules.validate!(value);
						if (result === false) {
							return false;
						}
						if (typeof result === "string") {
							return this.createError({ message: result });
						}
						return true;
					}
				);
			}
		}

		// Apply required validation
		if (field.required) {
			if (field.type === "checkbox") {
				fieldSchema = fieldSchema.oneOf([true], field.requiredMessage || field.validation?.message || "This field is required");
			} else {
				fieldSchema = fieldSchema.required(field.requiredMessage || field.validation?.message || `${field.label || field.name} is required`);
			}
		} else {
			fieldSchema = fieldSchema.nullable().optional();
		}

		schema[field.name] = fieldSchema;
	});

	return Yup.object().shape(schema);
};

const Form = <T extends Record<string, any> = Record<string, any>>({
	initialValues,
	validationSchema,
	onSubmit,
	fields,
	title,
	description,
	image,
	imagePosition = "left",
	imageAlt,
	imageRounded = true,
	submitText = "Submit",
	submitVariant = "black",
	submitSize = "md",
	renderSubmitButton,
	formikConfig,
	className,
	loading = false,
	renderField,
	layout = "vertical",
	showLabels = true,
	backgroundColor,
	backgroundImage,
	paddingX,
	paddingXMobile,
	paddingY,
	paddingYMobile,
	paddingTop,
	paddingTopMobile,
	paddingBottom,
	paddingBottomMobile,
	contentPaddingX,
	contentPaddingXMobile,
	contentPaddingY,
	contentPaddingYMobile,
	contentPaddingTop,
	contentPaddingTopMobile,
	contentPaddingBottom,
	contentPaddingBottomMobile,
}: FormProps<T>) => {
	// Auto-generate validation schema from fields if not provided
	const schema = validationSchema || buildValidationSchema(fields);

	// Build section styles
	const sectionStyle: React.CSSProperties & Record<string, string> = {};
	if (backgroundImage) {
		sectionStyle.backgroundImage = `url(${backgroundImage})`;
		sectionStyle.backgroundSize = "cover";
		sectionStyle.backgroundPosition = "center";
	} else if (backgroundColor) {
		sectionStyle.backgroundColor = backgroundColor;
	}
	
	// Build section padding styles
	if (paddingX) sectionStyle['--padding-x'] = paddingX;
	if (paddingXMobile) sectionStyle['--padding-x-mobile'] = paddingXMobile;
	if (paddingY) sectionStyle['--padding-y'] = paddingY;
	if (paddingYMobile) sectionStyle['--padding-y-mobile'] = paddingYMobile;
	if (paddingTop) sectionStyle['--padding-top'] = paddingTop;
	if (paddingTopMobile) sectionStyle['--padding-top-mobile'] = paddingTopMobile;
	if (paddingBottom) sectionStyle['--padding-bottom'] = paddingBottom;
	if (paddingBottomMobile) sectionStyle['--padding-bottom-mobile'] = paddingBottomMobile;

	// Build content padding styles (for form wrapper - excludes image)
	const contentPaddingStyles: React.CSSProperties & Record<string, string> = {};
	if (contentPaddingX) contentPaddingStyles['--content-padding-x'] = contentPaddingX;
	if (contentPaddingXMobile) contentPaddingStyles['--content-padding-x-mobile'] = contentPaddingXMobile;
	if (contentPaddingY) contentPaddingStyles['--content-padding-y'] = contentPaddingY;
	if (contentPaddingYMobile) contentPaddingStyles['--content-padding-y-mobile'] = contentPaddingYMobile;
	if (contentPaddingTop) contentPaddingStyles['--content-padding-top'] = contentPaddingTop;
	if (contentPaddingTopMobile) contentPaddingStyles['--content-padding-top-mobile'] = contentPaddingTopMobile;
	if (contentPaddingBottom) contentPaddingStyles['--content-padding-bottom'] = contentPaddingBottom;
	if (contentPaddingBottomMobile) contentPaddingStyles['--content-padding-bottom-mobile'] = contentPaddingBottomMobile;

	const hasImage = !!image;
	const imagePositionClass = hasImage ? `form-section--image-${imagePosition}` : "";

	const formContent = (
		<Formik
			initialValues={initialValues}
			validationSchema={schema}
			onSubmit={onSubmit}
			{...formikConfig}
		>
			{(formik) => (
				<FormikForm className={clsx("reusable-form", `reusable-form--${layout}`, className)}>
					{fields.map((field, index) => {
						if (renderField) {
							return (
								<div key={field.name || index} className="reusable-form__field-wrapper">
									{renderField(field, formik)}
								</div>
							);
						}

						return (
							<div key={field.name || index} className="reusable-form__field-wrapper">
								<FormField
									name={field.name}
									label={showLabels ? field.label : undefined}
									type={field.type || "text"}
									placeholder={field.placeholder}
									helperText={field.helperText}
									required={field.required}
									disabled={field.disabled || loading}
									className={field.className}
									rows={field.rows}
									options={field.options}
									multiple={field.multiple}
									accept={field.accept}
								/>
							</div>
						);
					})}

					{renderSubmitButton ? (
						renderSubmitButton({ isSubmitting: formik.isSubmitting || loading, isValid: formik.isValid })
					) : (
						<button
							type="submit"
							disabled={formik.isSubmitting || loading || !formik.isValid}
							className={clsx("reusable-form__submit", "ma-btn")}
							data-variant={submitVariant}
							data-size={submitSize}
							data-shape="rounded"
						>
							{loading || formik.isSubmitting ? "Submitting..." : submitText}
						</button>
					)}
				</FormikForm>
			)}
		</Formik>
	);

	// If no title, description, or image, just return the form
	if (!title && !description && !image) {
		return formContent;
	}

	// Render form section with title, description, and optional image
		return (
		<section className={clsx("form-section", imagePositionClass, { "form-section--with-image": hasImage })} style={sectionStyle}>
			<div className="form-section__wrapper">
				<div className="form-section__content">
					{hasImage && imagePosition === "left" && (
						<div className="form-section__image-wrapper">
							<img 
								src={image} 
								alt={imageAlt || title || "Form illustration"} 
								className={clsx("form-section__image", { "form-section__image--rounded": imageRounded })} 
							/>
						</div>
					)}

					<div className="form-section__form-wrapper" style={Object.keys(contentPaddingStyles).length > 0 ? contentPaddingStyles : undefined}>
						{/* Title/Description above form when image is on left */}
						{hasImage && imagePosition === "left" && (title || description) && (
							<div className="form-section__header form-section__header--above-form">
								{title && <h2 className="form-section__title">{title}</h2>}
								{description && <p className="form-section__description">{description}</p>}
							</div>
						)}

						{/* Title/Description at top when image is on right or no image */}
						{(hasImage && imagePosition === "right" && (title || description)) || (!hasImage && (title || description)) && (
							<div className={clsx("form-section__header", { "form-section__header--with-image": hasImage })}>
								{title && <h2 className="form-section__title">{title}</h2>}
								{description && <p className="form-section__description">{description}</p>}
							</div>
						)}

						{formContent}
					</div>

					{hasImage && imagePosition === "right" && (
						<div className="form-section__image-wrapper">
							<img 
								src={image} 
								alt={imageAlt || title || "Form illustration"} 
								className={clsx("form-section__image", { "form-section__image--rounded": imageRounded })} 
							/>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Form;

