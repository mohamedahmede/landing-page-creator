import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import "../styles/customButton.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: Variant;
	size?: Size;
	shape?: Shape;
	/** If true, skip all default styles and only use className (escape hatch) */
	unstyled?: boolean;
	className?: string;
	text: string;
	url?: string;
	blank?: boolean;
	onClick?: () => void;
}

type Variant =
	| "black"
	| "white"
	| "red"
	| "gray"
	| "lime"
	| "transparent-black"
	| "transparent-white"
	| "transparent-red"
	| "transparent-gray"
	| "transparent-lime";
type Size = "sm" | "md" | "lg";
type Shape = "rounded" | "square";

const CustomButton: React.FC<ButtonProps> = ({
	variant = "black",
	size = "md",
	shape = "rounded",
	unstyled,
	className,
	text,
	url,
	onClick,
	blank,
	...props
}) => {
	const buttonClasses = clsx("ma-btn", className);

	const buttonElement = (
		<button
			data-variant={variant}
			data-size={size}
			data-shape={shape}
			className={buttonClasses}
			onClick={onClick}
			{...props}
		>
			{text}
		</button>
	);

	if (unstyled) {
		return url ? (
			<a href={url} className={className} target={blank ? "_blank" : "_self"}>
				{text}
			</a>
		) : (
			<button className={className} {...props}>
				{text}
			</button>
		);
	}

	// If URL is provided, wrap in anchor tag for universal compatibility
	if (url) {
		return (
			<a
				href={url}
				style={{ textDecoration: "none", display: "inline-block" }}
				target={blank ? "_blank" : "_self"}
			>
				{buttonElement}
			</a>
		);
	}

	// Otherwise render as a regular button
	return buttonElement;
};

export default CustomButton;
