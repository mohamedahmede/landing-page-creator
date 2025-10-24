import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    shape?: Shape;
    /** If true, skip all default styles and only use className (escape hatch) */
    unstyled?: boolean;
    className?: string;
    text?: string;
    url?: string;
    blank?: boolean;
    onClick?: () => void;
}
type Variant = "black" | "white" | "red" | "gray" | "lime" | "transparent-black" | "transparent-white" | "transparent-red" | "transparent-gray" | "transparent-lime";
type Size = "sm" | "md" | "lg";
type Shape = "rounded" | "square";
declare const CustomButton: React.FC<ButtonProps>;

interface Section {
    id: string;
    type: "hero" | "features";
    className?: string;
}
interface HeroSection extends Section {
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
interface FeaturesSection extends Section {
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
type SectionConfig = HeroSection | FeaturesSection;
interface SectionsRenderProps {
    sections: SectionConfig[];
    className?: string;
}
declare const SectionsRender: React.FC<SectionsRenderProps>;

export { CustomButton, SectionsRender };
export type { FeaturesSection, HeroSection, Section, SectionConfig, SectionsRenderProps };
