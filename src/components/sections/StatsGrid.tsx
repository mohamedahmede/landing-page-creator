import React from "react";
import "../../styles/sections/statsGrid.css";

// Interface for project statistics
export interface StatItem {
	label: string;
	value: string | number;
	unit?: string;
}

// Props interface for StatsGrid
export interface StatsGridProps {
	stats: StatItem[];
	columns?: 2 | 3 | 4;
	className?: string;
	showHover?: boolean;
	noBorder?: boolean;
	borderColor?: string;
	textColor?: string;
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
}

const StatsGrid: React.FC<StatsGridProps> = ({
	stats,
	columns = 4,
	className = "",
	showHover = false,
	noBorder = false,
	borderColor,
	textColor,
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
}) => {
	const columnsClass = `stats-grid-columns-${columns}`;
	
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
			className={`stats-grid ${className}`}
			style={backgroundStyle}
		>
			<div className={`stats-grid-wrapper ${columnsClass}`} style={paddingStyles}>
				{stats.map((stat, index) => {
				// Determine styles
				const borderStyle = borderColor ? { borderColor } : undefined;
				const textStyle = textColor ? { color: textColor } : undefined;
				const labelStyle = textColor
					? { color: textColor, opacity: 0.7 }
					: undefined;

				// Build card classes
				const cardClasses = [
					"stat-card",
					!noBorder ? "has-border" : "",
					showHover ? "has-hover" : "",
				]
					.filter(Boolean)
					.join(" ");

				return (
					<div
						key={index}
						className={cardClasses}
						style={{ ...borderStyle }}
					>
						<div className="stat-card-value" style={textStyle || undefined}>
							{stat.value}
							{stat.unit && (
								<span className="stat-card-unit" style={labelStyle}>
									{stat.unit}
								</span>
							)}
						</div>
						<div className="stat-card-label" style={labelStyle || undefined}>
							{stat.label}
						</div>
					</div>
				);
			})}
			</div>
		</section>
	);
};

export default StatsGrid;

