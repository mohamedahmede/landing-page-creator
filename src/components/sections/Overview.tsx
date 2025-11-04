import React from "react";
import "../../styles/sections/overview.css";

// Interface for individual highlight items
export interface HighlightItem {
	label: string;
	value: string;
	icon?: React.ReactNode;
}

// Interface for media item
export interface MediaItem {
	type: "image" | "video";
	src: string;
	alt?: string;
	caption?: string;
}

// Main props interface
export interface OverviewProps {
	highlights?: HighlightItem[];
	description?: string | React.ReactNode;
	media?: MediaItem;
	className?: string;
	title?: string;
	subtitle?: string;
	/** Whether images should have hover scale animation (default: true) */
	hoverAnimation?: boolean;
	/** Background color */
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
	titleClassName?: string;
	subtitleClassName?: string;
	descriptionClassName?: string;
	highlightsClassName?: string;
	roundedCaption?: boolean;
	mediaCaptionClassName?: string;
}

const Overview: React.FC<OverviewProps> = ({
	highlights = [],
	description,
	media,
	className = "",
	title,
	subtitle,
	hoverAnimation = true,
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
	titleClassName = "",
	subtitleClassName = "",
	descriptionClassName = "",
	highlightsClassName = "",
	roundedCaption = false,
	mediaCaptionClassName = "",
}) => {
	// Build background styles
	const backgroundStyle: React.CSSProperties = {};
	if (backgroundImage) {
		backgroundStyle.backgroundImage = `url(${backgroundImage})`;
		backgroundStyle.backgroundSize = "cover";
		backgroundStyle.backgroundPosition = "center";
	} else if (backgroundColor) {
		backgroundStyle.backgroundColor = backgroundColor;
	}
	
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
		<section
			className={`overview-section ${className}`}
			style={backgroundStyle}
		>
			<div className="overview-wrapper" style={paddingStyles}>
			{/* Header */}
			{(title || subtitle) && (
				<div className="overview-header">
					{subtitle && (
						<p className={`overview-subtitle ${subtitleClassName || ""}`}>
							{subtitle}
						</p>
					)}
					{title && (
						<h2 className={`overview-title ${titleClassName || ""}`}>
							{title}
						</h2>
					)}
				</div>
			)}

			{/* Description Section */}
			{description && (
				<div className={`overview-description ${descriptionClassName || ""}`}>
					<div className="overview-description-content">
						{typeof description === "string" ? (
							<p>{description}</p>
						) : (
							description
						)}
					</div>
				</div>
			)}

			<div className="overview-grid">
				{/* Highlights Section */}  
				{highlights.length > 0 && (
					<div className={`overview-highlights ${highlightsClassName || ""}`}>
						<h3 className="overview-highlights-title">
							Key Highlights
						</h3>
						<div className="overview-highlights-list">
							{highlights.map((highlight, index) => (
								<div key={index} className="overview-highlight-item">
									{highlight.icon && (
										<div className="overview-highlight-icon">
											{highlight.icon}
										</div>
									)}
									<div className="overview-highlight-content">
										<div className="overview-highlight-label">
											{highlight.label}
										</div>
										<div className="overview-highlight-value">
											{highlight.value}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				)}

				{/* Media Section */}
				{media && (
					<div className={`overview-media ${hoverAnimation && media.type === "image" ? "overview-hover-animation" : ""}`}>
						{media.type === "image" ? (
							<img
								src={media.src}
								alt={media.alt || "Project overview"}
								loading="lazy"
								style={{ width: "100%"}}
							/>
						) : (
							<video src={media.src} controls>
								Your browser does not support the video tag.
							</video>
						)}
						{media.caption && (
							<p className={`overview-media-caption ${roundedCaption ? "rounded" : ""} ${mediaCaptionClassName || ""}`}>
								{media.caption}
							</p>
						)}
					</div>
				)}
			</div>
			</div>
		</section>
	);
};

export default Overview;

