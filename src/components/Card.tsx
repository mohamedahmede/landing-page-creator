/* eslint-disable @next/next/no-img-element */

import React from "react";
import CustomButton from "./CustomButton";
import "../styles/card.css";

type CardVariant =
	| "blue"
	| "purple"
	| "green"
	| "red"
	| "neutral"
	| "outline";

export type CardProps = {
	title: string;
	description?: string;
	imageSrc?: string;
	imageAlt?: string;
	ctaText?: string;
	ctaHref?: string;
	ctaVariant?: "black" | "white" | "red" | "gray" | "lime" | "transparent-black" | "transparent-white" | "transparent-red" | "transparent-gray" | "transparent-lime";
	ctaSize?: "sm" | "md" | "lg";
	ctaShape?: "rounded" | "square";
	ctaBlank?: boolean;
	variant?: CardVariant;
	rounded?: boolean;
	/** Whether images should have hover scale animation (default: true) */
	hoverAnimation?: boolean;
	/** Whether card should have shadow on hover (default: true) */
	shadowOnHover?: boolean;
	className?: string;
};

export default function Card({
	title,
	description,
	imageSrc,
	imageAlt,
	ctaText,
	ctaHref = "#",
	ctaVariant = "red",
	ctaSize = "md",
	ctaShape = "rounded",
	ctaBlank,
	variant = "neutral",
	rounded = true,
	hoverAnimation = true,
	shadowOnHover = true,
	className = "",
}: CardProps) {
	const variantClass = variant || "neutral"; 
	const roundedClass = rounded ? "" : "not-rounded";
	const hoverClass = hoverAnimation ? "card-hover-animation" : "";
	const shadowClass = shadowOnHover ? "card-shadow-hover" : "";
    
	return (
		<div className={["card", variantClass, roundedClass, hoverClass, shadowClass, className].filter(Boolean).join(" ")}>
			{imageSrc ? (
				<div className="media">
					<img src={imageSrc} alt={imageAlt || title} />
				</div>
			) : null}
			<div className="content">
				<h3 className="title">{title}</h3>
				{description ? <p className="desc">{description}</p> : null}
				{ctaText ? (
					<div className="ctaWrap">
						<CustomButton
							text={ctaText}
							url={ctaHref}
							variant={ctaVariant}
							size={ctaSize}
							shape={ctaShape}
							blank={ctaBlank}
							unstyled 
							className="cta"
						/>
					</div>
				) : null}
			</div>
		</div>
	);
}


