import React$1, { ButtonHTMLAttributes } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

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
declare const CustomButton: React$1.FC<ButtonProps>;

type Alignment = "left" | "center" | "right";
interface HeroProps {
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
declare function Hero({ title, subtitle, description, primaryButtonText, primaryButtonUrl, primaryButtonVariant, secondaryButtonText, secondaryButtonUrl, secondaryButtonVariant, backgroundColor, backgroundImage, overlayOpacity, textColor, align, minHeight, className, children, }: HeroProps): react_jsx_runtime.JSX.Element;

type HeroSection = {
    type: "hero";
    content: HeroProps;
};
type SectionConfig = HeroSection;
interface SectionsRendererProps {
    sections: SectionConfig[];
}
declare const SectionsRenderer: ({ sections }: SectionsRendererProps) => react_jsx_runtime.JSX.Element;

export { CustomButton, Hero, SectionsRenderer };
export type { HeroProps };
