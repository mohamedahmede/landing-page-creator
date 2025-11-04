"use client";

import React from "react";
import "../../styles/sections/alternatingContentSection.css";

export type ContentItem = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export type AlternatingContentSectionProps = {
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

const AlternatingContentSection: React.FC<AlternatingContentSectionProps> = ({
  title,
  subtitle,
  items,
  imagePosition = "left",
  imageRounded = false,
  hoverAnimation = true,
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
  className,
}) => {
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
      className={`alternating-content-section ${className || ""}`}
      style={backgroundStyle}
    >
      <div className="alternating-content-wrapper" style={paddingStyles}>
        <div className="alternating-content-header">
          {subtitle && (
            <p className="alternating-content-subtitle">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="alternating-content-title">
              {title}
            </h2>
          )}
        </div>

        <div className="alternating-content-list">
          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            const position = imagePosition === "right" ? !isEven : isEven; 

            return (
              <div
                key={index}
                className="alternating-content-item"
              >
                {/* Image/Icon Section */}
                <div className={`alternating-content-media ${position ? "alternating-content-media-right" : "alternating-content-media-left"}`}>
                  {item.image ? (
                    <div className={`alternating-content-image-wrapper ${imageRounded ? "alternating-content-image-rounded" : ""} ${hoverAnimation ? "alternating-content-hover-animation" : ""}`}>
                      <img
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        className="alternating-content-image"
                       />
                    </div>
                  ) : (
                    <div className="alternating-content-icon-wrapper">
                      {item.icon && (
                        <div className="alternating-content-icon">
                          {item.icon}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className={`alternating-content-text ${position ? "alternating-content-text-right" : "alternating-content-text-left"}`}>
                  <div className="alternating-content-text-inner">
                    {item.icon && !item.image && (
                      <div className="alternating-content-text-icon">
                        {item.icon}
                      </div>
                    )}
                    <div>
                      <h3 className="alternating-content-item-title">
                        {item.title}
                      </h3>
                      <p className="alternating-content-item-description">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AlternatingContentSection;


