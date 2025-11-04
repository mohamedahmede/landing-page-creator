import React, { useState, useEffect } from "react";
import clsx from "clsx";
import CustomButton from "../CustomButton";
import "../../styles/sections/stickyNav.css";

export interface NavLink {
	text: string;
	url: string;
	target?: "_blank" | "_self";
}

export interface StickyNavProps {
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

export function StickyNav({
	logoUrl,  
	logoAlt,
	brandName,
	links = [],
	ctaText,
	ctaUrl,
	ctaVariant = "red",
	backgroundColor = "transparent",
	scrolledBackgroundColor = "#ffffff",
	textColor = "#111827",
	scrolledTextColor,
	showBackgroundOnScroll = true,
	blurOnScroll = false,
	shadowOnScroll = true,
	paddingX = "1.5rem",
	paddingXMobile = "1rem",
	className,
	scrollOffset = 0,
	sticky = true,
	mobileMenuBackgroundColor = "#ffffff",
	mobileMenuTextColor = "#000000",
}: StickyNavProps) {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMobileMenuOpen]);

	useEffect(() => {
		// Only track scroll when sticky is enabled
		if (!sticky) {
			setIsScrolled(false);
			return;
		}

		let ticking = false;
		let lastScrolledState = false;

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					const scrolled = window.scrollY > scrollOffset;
					// Only update state if it actually changed
					if (scrolled !== lastScrolledState) {
						setIsScrolled(scrolled);
						lastScrolledState = scrolled;
					}
					ticking = false;
				});
				ticking = true;
			}
		};

		// Check initial state
		const initialScrolled = window.scrollY > scrollOffset;
		setIsScrolled(initialScrolled);
		lastScrolledState = initialScrolled;

		window.addEventListener("scroll", handleScroll, { passive: true });
		
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollOffset, sticky]);

	const currentBackgroundColor = isScrolled && showBackgroundOnScroll 
		? scrolledBackgroundColor 
		: backgroundColor;
	
	// Check if background is transparent
	const isTransparent = !currentBackgroundColor || 
		currentBackgroundColor === "transparent" || 
		currentBackgroundColor === "rgba(0,0,0,0)" ||
		(currentBackgroundColor.startsWith("rgba") && currentBackgroundColor.includes("0,0,0,0"));

	const navClasses = clsx(
		"ma-sticky-nav",
		sticky && "ma-sticky-nav--sticky",
		!sticky && "ma-sticky-nav--static",
		isScrolled && "ma-sticky-nav--scrolled",
		isScrolled && blurOnScroll && "ma-sticky-nav--blur",
		isScrolled && shadowOnScroll && "ma-sticky-nav--shadow",
		isTransparent && "ma-sticky-nav--transparent",
		className
	);

	const navStyle: React.CSSProperties = {
		"--nav-padding-x": paddingX,
		"--nav-padding-x-mobile": paddingXMobile,
		// Apply colors directly - inline styles have highest specificity
		backgroundColor: currentBackgroundColor,
		color: isScrolled && scrolledTextColor 
			? scrolledTextColor 
			: textColor || undefined,
	} as React.CSSProperties;

	const linkStyle: React.CSSProperties = {
		color: isScrolled && scrolledTextColor ? scrolledTextColor : textColor,
	};

	const mobileMenuStyle: React.CSSProperties = {
		backgroundColor: mobileMenuBackgroundColor || scrolledBackgroundColor || "#ffffff",
		color: mobileMenuTextColor || scrolledTextColor || textColor || "#111827",
	} as React.CSSProperties;

	const mobileLinkStyle: React.CSSProperties = {
		color: mobileMenuTextColor || scrolledTextColor || textColor || "#111827",
	};

	const toggleButtonStyle: React.CSSProperties = {
		color: isMobileMenuOpen 
			? (mobileMenuTextColor || scrolledTextColor || textColor || "#111827")
			: (isScrolled && scrolledTextColor ? scrolledTextColor : textColor),
	};

	return (
		<nav className={navClasses} style={navStyle}>
			<div className="ma-sticky-nav-container">
				<a href="/" className="ma-sticky-nav-brand" style={linkStyle}>
					{logoUrl ? (
						<img 
							src={logoUrl} 
							alt={logoAlt || brandName || "Logo"} 
							className="ma-sticky-nav-logo"
						/>
					) : brandName ? (
						<span className="ma-sticky-nav-brand-name">{brandName}</span>
					) : null}
				</a>

				{/* Desktop Navigation */}
				<div className="ma-sticky-nav-desktop">
					{links.length > 0 && (
						<ul className="ma-sticky-nav-links">
							{links.map((link, index) => (
								<li key={index}>
									<a
										href={link.url}
										target={link.target || "_self"}
										className="ma-sticky-nav-link"
										style={linkStyle}
									>
										{link.text}
									</a>
								</li>
							))}
						</ul>
					)}
					{ctaText && (
						<CustomButton
							text={ctaText}
							url={ctaUrl}
							variant={ctaVariant}
							size="md"
						/>
					)}
				</div>

				{/* Mobile Menu Toggle */}
				<button
					className={clsx(
						"ma-sticky-nav-toggle",
						isMobileMenuOpen && "ma-sticky-nav-toggle--active"
					)}
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					aria-label="Toggle menu"
					style={toggleButtonStyle}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>

				{/* Mobile Menu Backdrop */}
				{isMobileMenuOpen && (
					<div
						className="ma-sticky-nav-backdrop"
						onClick={() => setIsMobileMenuOpen(false)}
					/>
				)}

				{/* Mobile Navigation */}
				<div
					className={clsx(
						"ma-sticky-nav-mobile",
						isMobileMenuOpen && "ma-sticky-nav-mobile--open"
					)}
					style={mobileMenuStyle}
				>
					{links.length > 0 && (
						<ul className="ma-sticky-nav-links">
							{links.map((link, index) => (
								<li key={index}>
									<a
										href={link.url}
										target={link.target || "_self"}
										className="ma-sticky-nav-link"
										style={mobileLinkStyle}
										onClick={() => setIsMobileMenuOpen(false)}
									>
										{link.text}
									</a>
								</li>
							))}
						</ul>
					)}
					{ctaText && (
						<div className="ma-sticky-nav-mobile-cta">
							<CustomButton
								text={ctaText}
								url={ctaUrl}
								variant={ctaVariant}
								size="md"
							/>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}

