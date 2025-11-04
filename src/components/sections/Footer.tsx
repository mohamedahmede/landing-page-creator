import React from "react";
import clsx from "clsx";
import "../../styles/sections/footer.css";

export interface FooterLink {
	text: string;
	url: string;
	target?: "_blank" | "_self";
}
 
export interface FooterColumn {
	title?: string;
	links: FooterLink[];
}

export interface SocialLink {
	platform: string;
	url: string;
	icon?: React.ReactNode;
	target?: "_blank" | "_self";
}

export interface FooterProps {
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
	children?: React.ReactNode;
}

export function Footer({
	brandName,
	logoUrl,
	logoAlt,
	description,
	columns = [],
	socialLinks = [],
	copyright,
	backgroundColor = "#111827",
	textColor = "#ffffff",
	linkColor,
	linkHoverColor,
	className,
	children,
}: FooterProps) {
	const footerClasses = clsx("ma-footer", className);
	
	const footerStyle: React.CSSProperties = {
		backgroundColor,
		color: textColor,
	};
	
	const linkStyle: React.CSSProperties = linkColor ? { color: linkColor } : {};
	const linkHoverStyle = linkHoverColor ? { "--link-hover-color": linkHoverColor } : {};

	return (
		<footer className={footerClasses} style={footerStyle}>
			<div className="ma-footer-container">
				<div className="ma-footer-top">
					{(logoUrl || brandName) && (
						<div className="ma-footer-brand">
							{logoUrl && (
								<img 
									src={logoUrl} 
									alt={logoAlt || brandName || "Logo"} 
									className="ma-footer-logo"
								/>
							)}
							{brandName && !logoUrl && (
								<h3 className="ma-footer-brand-name">{brandName}</h3>
							)}
							{description && (
								<p className="ma-footer-description">{description}</p>
							)}
							{socialLinks.length > 0 && (
								<div className="ma-footer-social">
									{socialLinks.map((social, index) => (
										<a
											key={index}
											href={social.url}
											target={social.target || "_blank"}
											rel="noopener noreferrer"
											className="ma-footer-social-link"
											style={linkStyle}
											aria-label={social.platform}
										>
											{social.icon || social.platform}
										</a>
									))}
								</div>
							)}
						</div>
					)}

					{columns.length > 0 && (
						<div className="ma-footer-columns">
							{columns.map((column, colIndex) => (
								<div key={colIndex} className="ma-footer-column">
									<h4 
										className={clsx("ma-footer-column-title", !column.title && "ma-footer-column-title--empty")} 
										style={linkStyle}
									>
										{column.title || "\u00A0"}
									</h4>
									<ul className="ma-footer-links">
										{column.links.map((link, linkIndex) => (
											<li key={linkIndex}>
												<a
													href={link.url}
													target={link.target || "_self"}
													className="ma-footer-link"
													style={{ ...linkStyle, ...linkHoverStyle } as React.CSSProperties}
												>
													{link.text}
												</a>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					)}
				</div>

				<div className="ma-footer-bottom">
					{copyright && (
						<p className="ma-footer-copyright">{copyright}</p>
					)}
					{children}
				</div>
			</div>
		</footer>
	);
}

