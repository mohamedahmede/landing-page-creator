"use client";

import React from "react";
import "../../styles/sections/imageCardGrid.css";

export type CardItem = {
  image: string;
  imageAlt?: string;
  title: string;
  description?: string;
};

export type ImageCardGridProps = {
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

const ImageCardGrid: React.FC<ImageCardGridProps> = ({
  title,
  subtitle,
  items,
  layout = "grid",
  imageHeight = "300px",
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
  if (layout === "carousel") {
    return (
      <section
        className={`image-card-section ${className || ""}`}
        style={backgroundStyle}
      >
        <div className="image-card-wrapper" style={paddingStyles}>
          <div className="image-card-header">
            {subtitle && (
              <p className="image-card-subtitle">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="image-card-title">
                {title}
              </h2>
            )}
          </div>

          <div className="image-card-carousel-wrapper">
            <div className="image-card-carousel">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="image-card-carousel-item"
                >
                  <div
                    className={`image-card-carousel-image-wrapper ${hoverAnimation ? "image-card-hover-animation" : ""}`}
                    style={{ height: imageHeight }}
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt || item.title}
                      className="image-card-image"
                    />
                  </div>
                  <div className="image-card-carousel-content">
                    <h3 className="image-card-carousel-title">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="image-card-carousel-description">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`image-card-section ${className || ""}`}
      style={backgroundStyle}
    >
      <div className="image-card-wrapper" style={paddingStyles}>
        <div className="image-card-header">
          {subtitle && (
            <p className="image-card-subtitle">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="image-card-title">
              {title}
            </h2>
          )}
        </div>

        <div className="image-card-grid">
          {items.map((item, index) => (
            <div
              key={index}
              className="image-card-item"
            >
              <div
                className={`image-card-image-wrapper ${hoverAnimation ? "image-card-hover-animation" : ""}`}
                style={{ height: imageHeight }}
              >
                <img
                  src={item.image}
                  alt={item.imageAlt || item.title}
                  className="image-card-image"
                />
              </div>
              <div className="image-card-content">
                <h3 className="image-card-item-title">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="image-card-item-description">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCardGrid;


