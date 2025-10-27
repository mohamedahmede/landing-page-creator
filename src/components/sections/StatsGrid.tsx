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
}

const StatsGrid: React.FC<StatsGridProps> = ({
	stats,
	columns = 4,
	className = "",
	showHover = false,
	noBorder = false,
	borderColor,
	textColor,
}) => {
	const columnsClass = `stats-grid-columns-${columns}`;

	return (
		<div
			className={`stats-grid ${columnsClass} ${className}`}
		>
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
	);
};

export default StatsGrid;

