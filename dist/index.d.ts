import React$1, { ButtonHTMLAttributes } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    shape?: Shape;
    /** If true, skip all default styles and only use className (escape hatch) */
    unstyled?: boolean;
    className?: string;
    text: string;
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
declare function Hero({ title, subtitle, description, primaryButtonText, primaryButtonUrl, primaryButtonVariant, secondaryButtonText, secondaryButtonUrl, secondaryButtonVariant, backgroundColor, backgroundImage, overlayOpacity, textColor, align, minHeight, paddingX, paddingXMobile, paddingY, paddingYMobile, paddingTop, paddingTopMobile, paddingBottom, paddingBottomMobile, className, children, }: HeroProps): react_jsx_runtime.JSX.Element;

interface StatItem {
    label: string;
    value: string | number;
    unit?: string;
}
interface StatsGridProps {
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
declare const StatsGrid: React$1.FC<StatsGridProps>;

interface HighlightItem {
    label: string;
    value: string;
    icon?: React$1.ReactNode;
}
interface MediaItem {
    type: "image" | "video";
    src: string;
    alt?: string;
    caption?: string;
}
interface OverviewProps {
    highlights?: HighlightItem[];
    description?: string | React$1.ReactNode;
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
declare const Overview: React$1.FC<OverviewProps>;

type ImageItem = {
    src: string;
    alt?: string;
};
type ButtonConfig = {
    text: string;
    url?: string;
    variant?: "black" | "white" | "red" | "gray" | "lime" | "transparent-black" | "transparent-white" | "transparent-red" | "transparent-gray" | "transparent-lime";
    size?: "sm" | "md" | "lg";
    shape?: "rounded" | "square";
    blank?: boolean;
    onClick?: () => void;
    className?: string;
};
type InfoWithImagesProps = {
    eyebrow?: string;
    title: string;
    paragraphs?: string[];
    primaryButton?: ButtonConfig;
    secondaryButton?: ButtonConfig;
    images: ImageItem[];
    imagePosition?: "left" | "right";
    imageRounded?: boolean;
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
    className?: string;
};
declare const InfoWithImages: React$1.FC<InfoWithImagesProps>;

type ContentItem = {
    icon?: React$1.ReactNode;
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
};
type AlternatingContentSectionProps = {
    title?: string;
    subtitle?: string;
    items: ContentItem[];
    imagePosition?: "left" | "right";
    /** Whether images should be rounded (default: false) */
    imageRounded?: boolean;
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
    className?: string;
};
declare const AlternatingContentSection: React$1.FC<AlternatingContentSectionProps>;

type CardItem = {
    image: string;
    imageAlt?: string;
    title: string;
    description?: string;
};
type ImageCardGridProps = {
    title?: string;
    subtitle?: string;
    items: CardItem[];
    layout?: "grid" | "carousel";
    imageHeight?: string;
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
    className?: string;
};
declare const ImageCardGrid: React$1.FC<ImageCardGridProps>;

interface CarouselProps {
    children: React$1.ReactNode[];
    autoplay?: boolean | number;
    showThumbnails?: boolean;
    showArrows?: boolean;
    showPagination?: boolean;
    delay?: number;
    pauseOnHover?: boolean;
    loop?: boolean;
    spaceBetween?: number;
    slidesPerView?: number | 'auto';
    slidesPerViewMobile?: number | 'auto';
    slidesPerViewDesktop?: number | 'auto';
    height?: number | string;
    heightMobile?: number | string;
    heightDesktop?: number | string;
    aspectRatio?: number | string;
    activeColor?: string;
    className?: string;
    enableFullscreen?: boolean;
}
declare const Carousel: React$1.FC<CarouselProps>;

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
type InfoWithImagesSection = {
    type: "info-with-images";
    content: InfoWithImagesProps;
};
type SectionConfig = HeroSection | StatsGridSection | OverviewSection | InfoWithImagesSection;
interface SectionsRendererProps {
    sections: SectionConfig[];
}
declare const SectionsRenderer: ({ sections }: SectionsRendererProps) => react_jsx_runtime.JSX.Element;

type CardVariant = "blue" | "purple" | "green" | "red" | "neutral" | "outline";
type CardProps = {
    title: string;
    description?: string;
    imageSrc?: string;
    imageAlt?: string;
    ctaText?: string;
    ctaHref?: string;
    ctaVariant?: "black" | "white" | "red" | "gray" | "lime" | "transparent-black" | "transparent-white" | "transparent-red" | "transparent-gray" | "transparent-lime";
    ctaSize?: "sm" | "md" | "lg";
    ctaShape?: "rounded" | "square";
    ctaBlank?: boolean;
    variant?: CardVariant;
    rounded?: boolean;
    /** Whether images should have hover scale animation (default: true) */
    hoverAnimation?: boolean;
    /** Whether card should have shadow on hover (default: true) */
    shadowOnHover?: boolean;
    className?: string;
};
declare function Card({ title, description, imageSrc, imageAlt, ctaText, ctaHref, ctaVariant, ctaSize, ctaShape, ctaBlank, variant, rounded, hoverAnimation, shadowOnHover, className, }: CardProps): react_jsx_runtime.JSX.Element;

interface FooterLink {
    text: string;
    url: string;
    target?: "_blank" | "_self";
}
interface FooterColumn {
    title?: string;
    links: FooterLink[];
}
interface SocialLink {
    platform: string;
    url: string;
    icon?: React$1.ReactNode;
    target?: "_blank" | "_self";
}
interface FooterProps {
    /** Company/Brand name */
    brandName?: string;
    /** Logo image URL */
    logoUrl?: string;
    /** Logo alt text */
    logoAlt?: string;
    /** Description text (usually company mission/about) */
    description?: string;
    /** Footer columns with links */
    columns?: FooterColumn[];
    /** Social media links */
    socialLinks?: SocialLink[];
    /** Copyright text */
    copyright?: string;
    /** Background color */
    backgroundColor?: string;
    /** Text color */
    textColor?: string;
    /** Link color */
    linkColor?: string;
    /** Link hover color */
    linkHoverColor?: string;
    /** Custom className */
    className?: string;
    /** Additional content to render at the bottom */
    children?: React$1.ReactNode;
}
declare function Footer({ brandName, logoUrl, logoAlt, description, columns, socialLinks, copyright, backgroundColor, textColor, linkColor, linkHoverColor, className, children, }: FooterProps): react_jsx_runtime.JSX.Element;

interface NavLink {
    text: string;
    url: string;
    target?: "_blank" | "_self";
}
interface StickyNavProps {
    /** Logo image URL */
    logoUrl?: string;
    /** Logo alt text */
    logoAlt?: string;
    /** Brand name (used if no logo) */
    brandName?: string;
    /** Navigation links */
    links?: NavLink[];
    /** CTA button text */
    ctaText?: string;
    /** CTA button URL */
    ctaUrl?: string;
    /** CTA button variant */
    ctaVariant?: "black" | "white" | "red" | "gray" | "lime" | "transparent-black" | "transparent-white" | "transparent-red" | "transparent-gray" | "transparent-lime";
    /** Background color (default transparent) */
    backgroundColor?: string;
    /** Background color when scrolled */
    scrolledBackgroundColor?: string;
    /** Text color */
    textColor?: string;
    /** Logo/Text color when scrolled */
    scrolledTextColor?: string;
    /** Show background on scroll (default true) */
    showBackgroundOnScroll?: boolean;
    /** Blur effect on scroll */
    blurOnScroll?: boolean;
    /** Shadow on scroll */
    shadowOnScroll?: boolean;
    /** Padding (desktop) */
    paddingX?: string;
    /** Padding (mobile) */
    paddingXMobile?: string;
    /** Custom className */
    className?: string;
    /** Scroll offset before nav becomes sticky (in pixels, default 0) */
    scrollOffset?: number;
    /** Make nav sticky/fixed (default true) */
    sticky?: boolean;
    /** Mobile menu background color */
    mobileMenuBackgroundColor?: string;
    /** Mobile menu text color */
    mobileMenuTextColor?: string;
}
declare function StickyNav({ logoUrl, logoAlt, brandName, links, ctaText, ctaUrl, ctaVariant, backgroundColor, scrolledBackgroundColor, textColor, scrolledTextColor, showBackgroundOnScroll, blurOnScroll, shadowOnScroll, paddingX, paddingXMobile, className, scrollOffset, sticky, mobileMenuBackgroundColor, mobileMenuTextColor, }: StickyNavProps): react_jsx_runtime.JSX.Element;

export { AlternatingContentSection, Card, Carousel, CustomButton, Footer, Hero, ImageCardGrid, InfoWithImages, Overview, SectionsRenderer, StatsGrid, StickyNav };
export type { AlternatingContentSectionProps, ButtonConfig, CardItem, CardProps, CarouselProps, ContentItem, FooterColumn, FooterLink, FooterProps, HeroProps, HighlightItem, ImageCardGridProps, InfoWithImagesProps, MediaItem, NavLink, OverviewProps, SocialLink, StatItem, StatsGridProps, StickyNavProps };
