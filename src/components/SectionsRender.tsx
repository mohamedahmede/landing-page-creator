import React from "react";
import CustomButton, { ButtonProps } from "./CustomButton";
import "../styles/sections.css";

export interface Section {
	id: string;
	type: "hero" | "features";
	className?: string;
}

export interface HeroSection extends Section {
	type: "hero";
	title: string;
	subtitle?: string;
	description?: string;
	image?: string;
	backgroundColor?: string;
	primaryButton?: {
		text: string;
		url?: string;
		variant?: ButtonProps["variant"];
		size?: ButtonProps["size"];
		onClick?: () => void;
	};
	secondaryButton?: {
		text: string;
		url?: string;
		variant?: ButtonProps["variant"];
		size?: ButtonProps["size"];
		onClick?: () => void;
	};
}

export interface FeaturesSection extends Section {
	type: "features";
	title?: string; 
	subtitle?: string;
	backgroundColor?: string;
	features: Array<{
		icon?: string;
		title: string;
		description: string;
	}>;
}

export type SectionConfig = HeroSection | FeaturesSection;

export interface SectionsRenderProps {
	sections: SectionConfig[];
	className?: string;
}

const SectionsRender: React.FC<SectionsRenderProps> = ({ sections, className }) => {
	const renderSection = (section: SectionConfig) => {
		switch (section.type) {
			case "hero":
				return <HeroComponent section={section as HeroSection} />;
			case "features":
				return <FeaturesComponent section={section as FeaturesSection} />;
			default:
				return null;
		}
	};

	return (
		<div className={`sections-container ${className || ""}`}>
			{sections.map((section) => (
				<div key={section.id} className={`section section-${section.type} ${section.className || ""}`}>
					{renderSection(section)}
				</div>
			))}
		</div>
	);
};

const HeroComponent: React.FC<{ section: HeroSection }> = ({ section }) => {
	return (
		<div className="hero-section" style={{ backgroundColor: section.backgroundColor }}>
			<div className="hero-content">
				{section.image && (
					<div className="hero-image">
						<img src={section.image} alt={section.title} />
					</div>
				)}
				<div className="hero-text">
					<h1 className="hero-title">{section.title}</h1>
					{section.subtitle && <h2 className="hero-subtitle">{section.subtitle}</h2>}
					{section.description && <p className="hero-description">{section.description}</p>}
					<div className="hero-buttons">
						{section.primaryButton && (
							<CustomButton
								text={section.primaryButton.text}
								url={section.primaryButton.url}
								variant={section.primaryButton.variant}
								size={section.primaryButton.size}
								onClick={section.primaryButton.onClick}
							/>
						)}
						{section.secondaryButton && (
							<CustomButton
								text={section.secondaryButton.text}
								url={section.secondaryButton.url}
								variant={section.secondaryButton.variant}
								size={section.secondaryButton.size}
								onClick={section.secondaryButton.onClick}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

const FeaturesComponent: React.FC<{ section: FeaturesSection }> = ({ section }) => {
	return (
		<div className="features-section" style={{ backgroundColor: section.backgroundColor }}>
			<div className="features-content">
				{section.title && <h2 className="features-title">{section.title}</h2>}
				{section.subtitle && <h3 className="features-subtitle">{section.subtitle}</h3>}
				<div className="features-grid">
					{section.features.map((feature, index) => (
						<div key={index} className="feature-item">
							{feature.icon && (
								<div className="feature-icon">
									<span>{feature.icon}</span>
								</div>
							)}
							<h3 className="feature-title">{feature.title}</h3>
							<p className="feature-description">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SectionsRender;