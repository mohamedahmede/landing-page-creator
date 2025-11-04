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
	paddingX,
	paddingXMobile,
	paddingY,
	paddingYMobile,
	paddingTop,
	paddingTopMobile,
	paddingBottom,
	paddingBottomMobile,
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
	
	// Build padding styles
	const paddingStyles: React.CSSProperties & Record<string, string> = {};
	if (paddingX) paddingStyles['--padding-x'] = paddingX;
	if (paddingXMobile) paddingStyles['--padding-x-mobile'] = paddingXMobile;
	if (paddingY) paddingStyles['--padding-y'] = paddingY;
	if (paddingYMobile) paddingStyles['--padding-y-mobile'] = paddingYMobile;
	if (paddingTop) paddingStyles['--padding-top'] = paddingTop;
	if (paddingTopMobile) paddingStyles['--padding-top-mobile'] = paddingTopMobile;
	if (paddingBottom) paddingStyles['--padding-bottom'] = paddingBottom;
	if (paddingBottomMobile) paddingStyles['--padding-bottom-mobile'] = paddingBottomMobile;

	return (
		<div className={heroClasses} style={{ minHeight, ...backgroundStyle, ...textColorStyle }}>
			{hasBackgroundImage && (
				<div
					className="ma-hero-overlay"
					style={{ opacity: overlayOpacity }}
				/>
			)}
			<div className="ma-hero-wrapper" style={paddingStyles}>
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
		</div>
	);
}

