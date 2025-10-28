import React from "react";
import "../../styles/sections/overview.css";
import StatsGrid from "./StatsGrid";
import type { StatItem } from "./StatsGrid";

// Interface for individual highlight items
export interface HighlightItem {
	label: string;
	value: string;
	icon?: React.ReactNode;
}

// Re-export StatItem type for backward compatibility
export type { StatItem };

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
	stats?: StatItem[];
	media?: MediaItem;
	className?: string;
	title?: string;
	subtitle?: string;
	sectionBackground?: string;
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
	stats = [],
	media,
	className = "",
	title,
	subtitle,
	sectionBackground,
	titleClassName = "",
	subtitleClassName = "",
	descriptionClassName = "",
	highlightsClassName = "",
	roundedCaption = false,
	mediaCaptionClassName = "",
}) => {
	return (
		<section
			className={`overview-section ${className}`}
			style={
				sectionBackground
					? { backgroundColor: sectionBackground }
					: undefined
			}
		>
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
					<div className="overview-media">
						{media.type === "image" ? (
							<img
								src={media.src}
								alt={media.alt || "Project overview"}
								loading="lazy"
								style={{ width: "100%", height: "auto" }}
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

		

			{/* Stats Grid */}
			{stats.length > 0 && <StatsGrid stats={stats} />}
		</section>
	);
};

export default Overview;

