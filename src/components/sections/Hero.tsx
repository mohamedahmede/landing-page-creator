import clsx from "clsx";
import CustomButton from "../CustomButton";
import "../../styles/sections/hero.css";

type Alignment = "left" | "center" | "right";

export interface HeroProps {
	/** Main heading text */
	title: string;
	/** Subtitle text */
	subtitle?: string;
	/** Description text */
	description?: string;
	/** Primary CTA button text */
	primaryButtonText?: string;
	/** Primary CTA button URL */
	primaryButtonUrl?: string;
	/** Primary button variant */
	primaryButtonVariant?: "black" | "white" | "red" | "gray" | "lime" | "transparent-black" | "transparent-white" | "transparent-red" | "transparent-gray" | "transparent-lime";
	/** Secondary CTA button text */
	secondaryButtonText?: string;
	/** Secondary CTA button URL */
	secondaryButtonUrl?: string;
	/** Secondary button variant */
	secondaryButtonVariant?: "black" | "white" | "red" | "gray" | "lime" | "transparent-black" | "transparent-white" | "transparent-red" | "transparent-gray" | "transparent-lime";
	/** Background color */
	backgroundColor?: string;
	/** Background image URL */
	backgroundImage?: string;
	/** Background overlay opacity (0-1) */
	overlayOpacity?: number;
	/** Text color (auto-detected if not provided) */
	textColor?: string;
	/** Text alignment */
	align?: Alignment;
	/** Minimum height */
	minHeight?: string;
	/** Custom className */
	className?: string;
	/** Additional content to render */
	children?: React.ReactNode;
}

export function Hero({
	title,
	subtitle,
	description,
	primaryButtonText,
	primaryButtonUrl,
	primaryButtonVariant = "black",
	secondaryButtonText,
	secondaryButtonUrl,
	secondaryButtonVariant = "transparent-black",
	backgroundColor = "#ffffff",
	backgroundImage,
	overlayOpacity = 0.4,
	textColor,
	align = "center",
	minHeight = "500px",
	className,
	children,
}: HeroProps) {
	const hasBackgroundImage = !!backgroundImage;
	const backgroundStyle = hasBackgroundImage
		? {
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				position: "relative" as const,
			}
		: {
				backgroundColor,
			};

	const heroClasses = clsx("ma-hero", `ma-hero--${align}`, className);
	
	const textColorStyle = textColor ? { color: textColor } : {};

	return (
		<div className={heroClasses} style={{ minHeight, ...backgroundStyle, ...textColorStyle }}>
			{hasBackgroundImage && (
				<div
					className="ma-hero-overlay"
					style={{ opacity: overlayOpacity }}
				/>
			)}
			<div className="ma-hero-content">
				{subtitle && <p className="ma-hero-subtitle">{subtitle}</p>}
				<h1 className="ma-hero-title">{title}</h1>
				{description && <p className="ma-hero-description">{description}</p>}
				
				{(primaryButtonText || secondaryButtonText) && (
					<div className="ma-hero-buttons">
						{primaryButtonText && (
							<CustomButton
								text={primaryButtonText}
								variant={primaryButtonVariant}
								url={primaryButtonUrl}
								size="lg"
							/>
						)}
						{secondaryButtonText && (
							<CustomButton
								text={secondaryButtonText}
								variant={secondaryButtonVariant}
								url={secondaryButtonUrl}
								size="lg"
							/>
						)}
					</div>
				)}
				
				{children}
			</div>
		</div>
	);
}

