import React from "react";
import CustomButton from "../CustomButton";
import "../../styles/sections/infoWithImage.css";

type ImageItem = {
  src: string;
  alt?: string;
};

export type ButtonConfig = {
  text: string;
  url?: string;
  variant?: "black" | "white" | "red" | "gray" | "lime" | "transparent-black" | "transparent-white" | "transparent-red" | "transparent-gray" | "transparent-lime";
  size?: "sm" | "md" | "lg";
  shape?: "rounded" | "square";
  blank?: boolean;
  onClick?: () => void;
  className?: string;
};

export type InfoWithImagesProps = {
  eyebrow?: string;
  title: string;
  paragraphs?: string[];
  primaryButton?: ButtonConfig;
  secondaryButton?: ButtonConfig;
  images: ImageItem[]; // Accepts 1-3 images
  imagePosition?: "left" | "right";
  imageRounded?: boolean; // Default: false (no border-radius)
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

const InfoWithImages: React.FC<InfoWithImagesProps> = ({
  eyebrow,
  title,
  paragraphs = [],
  primaryButton,
  secondaryButton,
  images,
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
  const isRight = imagePosition === "right";
  const imageCount = images.length;

  const renderImages = () => {
    const hoverClass = hoverAnimation ? "info-hover-animation" : "";
    
    if (imageCount === 1) {
      return (
        <div className="info-collage info-collage-single">
          <div className={hoverClass}>
            <img
              src={images[0].src}
              alt={images[0].alt || "Section image"}
              className=""
            />
          </div>
        </div>
      );
    }

    if (imageCount === 2) {
      return (
        <div className="info-collage info-collage-double">
          <div className={`info-collage-item ${hoverClass}`}>
            <img
              src={images[0].src}
              alt={images[0].alt || "Section image"}
              className=""
            />
          </div>
          <div className={`info-collage-item ${hoverClass}`}>
            <img
              src={images[1].src}
              alt={images[1].alt || "Section image"}
              className=""
            />
          </div>
        </div>
      );
    }

    // 3 images - L-shaped grid
    if (imageCount === 3) {
      return (
        <div className="info-collage info-collage-triple">
          <div className="info-collage-grid">
            {/* Large image spanning two rows */}
            <div className={`info-collage-large ${hoverClass}`}>
              <img
                src={images[2].src}
                alt={images[2].alt || "Section image"}
                className=""
              />
            </div>
            <div className={`info-collage-item ${hoverClass}`}>
              <img
                src={images[0].src}
                alt={images[0].alt || "Section image"}
                className=""
              />
            </div>
            <div className={`info-collage-item ${hoverClass}`}>
              <img
                src={images[1].src}
                alt={images[1].alt || "Section image"}
                className=""
              />
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

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
      className={["info-section", className || ""].join(" ")}
      style={backgroundStyle}
    >
      <div className="info-wrapper" style={paddingStyles}>
        <div className="info-grid">
        {/* Image collage */}
        <div className={[
          isRight ? "info-collage-right" : "info-collage-left",
          imageRounded ? "info-collage-rounded" : ""
        ].filter(Boolean).join(" ")}>
          {renderImages()}
        </div>

        {/* Text content */}
        <div className={["info-content", isRight ? "info-content-right" : "info-content-left"].join(" ")}>
          {eyebrow ? (
            <div className="info-eyebrow"><span className="bar" /><span className="text">{eyebrow}</span></div>
          ) : null}

          <h2 className="info-title">{title}</h2>

          <div className="info-paragraphs">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {(primaryButton || secondaryButton) && (
            <div className="info-buttons">
              {primaryButton && (
                <CustomButton
                  text={primaryButton.text}
                  url={primaryButton.url}
                  variant={primaryButton.variant}
                  size={primaryButton.size}
                  shape={primaryButton.shape}
                  blank={primaryButton.blank}
                  onClick={primaryButton.onClick}
                  className={primaryButton.className}
                />
              )}
              {secondaryButton && (
                <CustomButton
                  text={secondaryButton.text}
                  url={secondaryButton.url}
                  variant={secondaryButton.variant}
                  size={secondaryButton.size}
                  shape={secondaryButton.shape}
                  blank={secondaryButton.blank}
                  onClick={secondaryButton.onClick}
                  className={secondaryButton.className}
                />
              )}
            </div>
          )}
        </div>
      </div>
      </div>
    </section>
  );
};

export default InfoWithImages;


