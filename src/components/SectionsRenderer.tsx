import { Hero, HeroProps } from "./sections/Hero";
import StatsGrid from "./sections/StatsGrid";
import type { StatsGridProps } from "./sections/StatsGrid";
import Overview from "./sections/Overview";
import type { OverviewProps } from "./sections/Overview";

// Define individual section types with their specific content
type HeroSection = {
	type: "hero";
	content: HeroProps;
};

type StatsGridSection = {
	type: "stats-grid";
	content: StatsGridProps;
};

type OverviewSection = {
	type: "overview";
	content: OverviewProps;
};




// Other sections commented out for now
// type AboutSection = {
// 	type: "about";
// 	content: {
// 		title: string;
// 		description: string;
// 	};
// };

// type FeaturesSection = {
// 	type: "features";
// 	content: {
// 		title: string;
// 		items: Array<{ title: string; description: string }>;
// 	};
// };

// Use discriminated union for type safety
type SectionConfig = HeroSection | StatsGridSection | OverviewSection;
// Add more sections when ready:
// type SectionConfig = HeroSection | StatsGridSection | OverviewSection | AboutSection | FeaturesSection;

interface SectionsRendererProps {
	sections: SectionConfig[];
}

const SectionsRenderer = ({ sections }: SectionsRendererProps) => {
	return (
		<>
			{sections.map((section, index) => {
				switch (section.type) {
					case "hero":
						return <Hero key={index} {...section.content} />;
					
					case "stats-grid":
						return <StatsGrid key={index} {...section.content} />;
					
					case "overview":
						return <Overview key={index} {...section.content} />;

					// Other sections commented out for now
					// case "about":
					// 	return <AboutSection key={index} {...section.content} />;
					// case "features":
					// 	return <FeaturesSection key={index} {...section.content} />;
					// case "testimonials":
					// 	return <TestimonialsSection key={index} {...section.content} />;
					// case "contact":
					// 	return <ContactSection key={index} {...section.content} />;

					default:
						return null;
				}
			})}
		</>
	);
};

export default SectionsRenderer;

