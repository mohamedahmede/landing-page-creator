# Landing Page Creator

A React component library for building beautiful landing pages with pre-styled components. Built with TypeScript and designed for modern React applications.

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/mohamedahmede/landing-page-creator)
[![npm version](https://img.shields.io/npm/v/landing-page-creator)](https://www.npmjs.com/package/landing-page-creator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Quick Start](#quick-start)
- [Components](#components)
  - [CustomButton](#custombutton)
  - [Hero](#hero)
  - [StatsGrid](#statsgrid)
  - [Overview](#overview)
  - [Card](#card)
  - [StickyNav](#stickynav)
  - [Footer](#footer)
  - [InfoWithImages](#infowithimages)
  - [ImageCardGrid](#imagecardgrid)
  - [AlternatingContentSection](#alternatingcontentsection)
  - [Carousel](#carousel)
  - [SectionsRenderer](#sectionsrenderer)
- [License](#license)

## Installation

```bash
npm install landing-page-creator
```

### Peer Dependencies

This package requires React 19.2.0 or higher:

```bash
npm install react@^19.2.0 react-dom@^19.2.0
```

## Setup

### ⚠️ Important: Import CSS

You **must** import the CSS file for styles to work correctly. Choose one of the following methods:

**Option 1: In your main entry file**
```tsx
// In index.js, App.js, or _app.js
import 'landing-page-creator/styles.css';
```

**Option 2: Direct import**
```tsx
import 'landing-page-creator/dist/styles.css';
```

**Option 3: In your CSS/SCSS file**
```css
@import 'landing-page-creator/styles.css';
```

## Quick Start

```tsx
import { CustomButton, Hero, StatsGrid, Overview, Card, StickyNav, Footer, InfoWithImages, ImageCardGrid, AlternatingContentSection, Carousel } from 'landing-page-creator';
import 'landing-page-creator/styles.css'; // ⚠️ Don't forget this!

function App() {
  return (
    <div>
      {/* Using Hero section */}
      <Hero
        title="Welcome to Our Platform"
        subtitle="Get Started Today"
        description="Build amazing landing pages with ease"
        primaryButtonText="Get Started"
        primaryButtonUrl="/signup"
      />
      
      {/* Using StatsGrid */}
      <StatsGrid 
        stats={[
          { label: "Happy Customers", value: "10K", unit: "+" },
          { label: "Projects Completed", value: "500" },
          { label: "Team Members", value: "50", unit: "+" },
          { label: "Years of Experience", value: "10", unit: "+" }
        ]}
        columns={4}
        showHover={true}
      />
      
      {/* Using InfoWithImages */}
      <InfoWithImages
        title="Our Story"
        paragraphs={[
          "We started with a vision to simplify web development.",
          "Today, we serve thousands of developers worldwide."
        ]}
        images={[
          { src: "image1.jpg", alt: "Our story" }
        ]}
        primaryButton={{
          text: "Learn More",
          url: "/about",
          variant: "black"
        }}
      />
      
      {/* Using ImageCardGrid */}
      <ImageCardGrid
        title="Our Products"
        items={[
          { image: "product1.jpg", title: "Product 1", description: "Description" },
          { image: "product2.jpg", title: "Product 2", description: "Description" }
        ]}
      />
      
      {/* Using AlternatingContentSection */}
      <AlternatingContentSection
        title="Our Features"
        items={[
          { image: "feature1.jpg", title: "Feature 1", description: "Description" },
          { image: "feature2.jpg", title: "Feature 2", description: "Description" }
        ]}
      />
      
      {/* Using Carousel */}
      <Carousel
        showThumbnails={true}
        showArrows={true}
        showPagination={true}
        autoplay={3000}
        loop={true}
      >
        <img src="image1.jpg" alt="Slide 1" />
        <img src="image2.jpg" alt="Slide 2" />
        <img src="image3.jpg" alt="Slide 3" />
      </Carousel>
      
      {/* Using Overview */}
      <Overview
        title="About Our Platform"
        subtitle="Innovation"
        description="This is an amazing platform that solves real-world problems."
        highlights={[
          { label: "Fast", value: "Lightning Speed" },
          { label: "Secure", value: "Enterprise Grade" },
          { label: "Scalable", value: "Grows with You" }
        ]}
      />
      
      {/* Using CustomButton */}
      <CustomButton variant="black" text="Click Me" />
    </div>
  );
}
```

## Components

### CustomButton

A highly customizable button component with multiple style variants, sizes, and the ability to render as either a button or a link.

#### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `text` | `string` | - | ✅ | Button text content |
| `variant` | `"black" \| "white" \| "red" \| "gray" \| "lime" \| "transparent-black" \| "transparent-white" \| "transparent-red" \| "transparent-gray" \| "transparent-lime"` | `"black"` | ❌ | Button style variant |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | ❌ | Button size |
| `shape` | `"rounded" \| "square"` | `"rounded"` | ❌ | Button shape |
| `disabled` | `boolean` | `false` | ❌ | Disable the button |
| `unstyled` | `boolean` | `false` | ❌ | Skip all default styles, use only className |
| `url` | `string` | - | ❌ | Render as link with this URL |
| `blank` | `boolean` | `false` | ❌ | Open link in new tab (only works with `url`) |
| `onClick` | `() => void` | - | ❌ | Click handler function |
| `className` | `string` | - | ❌ | Additional CSS classes |
| `...props` | `ButtonHTMLAttributes` | - | ❌ | All standard HTML button attributes |

#### Variants

- **Solid colors**: `black`, `white`, `red`, `gray`, `lime`
- **Transparent**: `transparent-black`, `transparent-white`, `transparent-red`, `transparent-gray`, `transparent-lime`

#### Examples

```tsx
// Basic usage
<CustomButton variant="black" text="Click Me" />

// Different variants
<CustomButton variant="red" text="Primary Action" />
<CustomButton variant="lime" text="Success" />
<CustomButton variant="transparent-black" text="Outline Style" />
<CustomButton variant="transparent-white" text="Ghost Button" />

// Size variations
<CustomButton variant="black" size="sm" text="Small" />
<CustomButton variant="black" size="md" text="Medium" />
<CustomButton variant="black" size="lg" text="Large" />

// Shape variations
<CustomButton variant="black" shape="rounded" text="Rounded" />
<CustomButton variant="black" shape="square" text="Square" />

// Button as link
<CustomButton variant="red" url="/signup" text="Sign Up" />

// Link opens in new tab
<CustomButton 
  variant="transparent-black" 
  url="https://example.com" 
  blank 
  text="External Link" 
/>

// Disabled state
<CustomButton variant="black" disabled text="Disabled Button" />

// With onClick handler
<CustomButton 
  variant="black" 
  text="Click Me" 
  onClick={() => console.log('Clicked!')} 
/>

// Fully custom (unstyled)
<CustomButton unstyled className="my-custom-class" text="Custom" />

// Standard HTML attributes
<CustomButton 
  variant="black" 
  text="Submit" 
  type="submit" 
  aria-label="Submit form"
/>
```

---

### Hero

A full-width hero section component perfect for landing page headers. Supports background images, customizable text alignment, and CTA buttons.

#### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `title` | `string` | - | ✅ | Main heading text |
| `subtitle` | `string` | - | ❌ | Subtitle text displayed above title |
| `description` | `string` | - | ❌ | Description text displayed below title |
| `primaryButtonText` | `string` | - | ❌ | Primary CTA button text |
| `primaryButtonUrl` | `string` | - | ❌ | Primary CTA button URL |
| `primaryButtonVariant` | `ButtonVariant` | `"black"` | ❌ | Primary button style variant |
| `secondaryButtonText` | `string` | - | ❌ | Secondary CTA button text |
| `secondaryButtonUrl` | `string` | - | ❌ | Secondary CTA button URL |
| `secondaryButtonVariant` | `ButtonVariant` | `"transparent-black"` | ❌ | Secondary button style variant |
| `backgroundColor` | `string` | `"#ffffff"` | ❌ | Background color (used when no backgroundImage) |
| `backgroundImage` | `string` | - | ❌ | Background image URL |
| `overlayOpacity` | `number` | `0.4` | ❌ | Background overlay opacity (0-1), only applies with backgroundImage |
| `textColor` | `string` | - | ❌ | Text color (auto-detected if not provided) |
| `align` | `"left" \| "center" \| "right"` | `"center"` | ❌ | Text alignment |
| `minHeight` | `string` | `"500px"` | ❌ | Minimum height of the hero section |
| `paddingX` | `string` | `"0"` | ❌ | Horizontal padding (desktop). Accepts any CSS unit (e.g., "2rem", "48px", "5vh") |
| `paddingXMobile` | `string` | `"0"` | ❌ | Horizontal padding (mobile). Accepts any CSS unit |
| `paddingY` | `string` | `"0"` | ❌ | Vertical padding (desktop). Accepts any CSS unit |
| `paddingYMobile` | `string` | `"0"` | ❌ | Vertical padding (mobile). Accepts any CSS unit |
| `paddingTop` | `string` | - | ❌ | Top padding (desktop). Accepts any CSS unit. If not provided, falls back to paddingY |
| `paddingTopMobile` | `string` | - | ❌ | Top padding (mobile). Accepts any CSS unit. If not provided, falls back to paddingYMobile |
| `paddingBottom` | `string` | - | ❌ | Bottom padding (desktop). Accepts any CSS unit. If not provided, falls back to paddingY |
| `paddingBottomMobile` | `string` | - | ❌ | Bottom padding (mobile). Accepts any CSS unit. If not provided, falls back to paddingYMobile |
| `className` | `string` | - | ❌ | Additional CSS classes |
| `children` | `React.ReactNode` | - | ❌ | Additional content to render |

**ButtonVariant** = `"black" \| "white" \| "red" \| "gray" \| "lime" \| "transparent-black" \| "transparent-white" \| "transparent-red" \| "transparent-gray" \| "transparent-lime"`

#### Examples

```tsx
// Minimal hero with just a title
<Hero title="Welcome to Our Platform" />

// Basic hero with all text elements
<Hero
  title="Build Amazing Products"
  subtitle="Get Started Today"
  description="Join thousands of developers building with our platform"
  primaryButtonText="Get Started"
  primaryButtonUrl="/signup"
/>

// Hero with background color
<Hero
  title="Modern Design"
  description="Beautiful, responsive components"
  backgroundColor="#f0f0f0"
  primaryButtonText="Learn More"
  primaryButtonUrl="/about"
/>

// Hero with background image
<Hero
  title="Adventure Awaits"
  subtitle="Explore New Possibilities"
  description="Discover what makes us different"
  backgroundImage="https://example.com/hero-bg.jpg"
  overlayOpacity={0.5}
  primaryButtonText="Start Journey"
  primaryButtonUrl="/explore"
/>

// Hero with both primary and secondary buttons
<Hero
  title="Choose Your Plan"
  description="Pick the perfect plan for your needs"
  primaryButtonText="Start Free Trial"
  primaryButtonUrl="/trial"
  primaryButtonVariant="red"
  secondaryButtonText="Learn More"
  secondaryButtonUrl="/pricing"
  secondaryButtonVariant="transparent-white"
/>

// Left-aligned hero
<Hero
  title="Innovation Starts Here"
  subtitle="Technology"
  description="Leading the future of development"
  align="left"
  backgroundColor="#2c3e50"
  textColor="#ffffff"
  primaryButtonText="Join Us"
  primaryButtonUrl="/join"
  primaryButtonVariant="lime"
/>

// Hero with custom height and additional content
<Hero
  title="Customizable Hero"
  description="Add any content you want"
  minHeight="600px"
  backgroundImage="https://example.com/bg.jpg"
>
  <div style={{ marginTop: '2rem' }}>
    <p>This is custom content below the buttons</p>
  </div>
</Hero>

// Hero with custom styling
<Hero
  title="Styled Hero"
  description="With custom className"
  className="my-custom-hero"
  backgroundColor="#1a1a1a"
  textColor="#fff"
  primaryButtonText="Get Started"
  primaryButtonUrl="/start"
/>

// Hero with custom padding (default is 0, so you set it explicitly)
<Hero
  title="Hero with Custom Padding"
  description="Responsive padding controls - accepts any CSS unit"
  paddingX="6rem"
  paddingXMobile="1.5rem"
  paddingY="5rem"
  paddingYMobile="3rem"
  backgroundImage="https://example.com/hero.jpg"
/>

// Different CSS units work too
<Hero
  title="Flexible Units"
  paddingX="48px"
  paddingY="10vh"
  paddingXMobile="16px"
  paddingYMobile="5vh"
/>

// Using paddingTop/paddingBottom for granular control
<Hero
  title="Custom Top/Bottom Padding"
  paddingTop="5rem"
  paddingBottom="2rem"
  // paddingY is not used when paddingTop/paddingBottom are set
/>

// Mix: paddingTop overrides, bottom uses paddingY
<Hero
  title="Mixed Padding"
  paddingY="3rem"        // Applied to bottom (and top if paddingTop not set)
  paddingTop="5rem"      // Overrides top from paddingY
  // Result: top = 5rem, bottom = 3rem
/>
```

---

### StatsGrid

A flexible statistics grid component for displaying key metrics and data points. Perfect for showcasing numbers, achievements, or statistics in a clean grid layout.

#### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `stats` | `StatItem[]` | - | ✅ | Array of stat items to display |
| `columns` | `2 \| 3 \| 4` | `4` | ❌ | Number of columns in the grid |
| `className` | `string` | - | ❌ | Additional CSS classes |
| `showHover` | `boolean` | `false` | ❌ | Enable hover effects on cards |
| `noBorder` | `boolean` | `false` | ❌ | Remove card borders |
| `borderColor` | `string` | - | ❌ | Custom border color |
| `textColor` | `string` | - | ❌ | Custom text color |
| `backgroundColor` | `string` | - | ❌ | Background color |
| `backgroundImage` | `string` | - | ❌ | Background image URL |
| `paddingX` | `string` | `"0"` | ❌ | Horizontal padding (desktop). Accepts any CSS unit (e.g., "2rem", "48px", "5vh") |
| `paddingXMobile` | `string` | `"0"` | ❌ | Horizontal padding (mobile). Accepts any CSS unit |
| `paddingY` | `string` | `"0"` | ❌ | Vertical padding (desktop). Accepts any CSS unit |
| `paddingYMobile` | `string` | `"0"` | ❌ | Vertical padding (mobile). Accepts any CSS unit |

#### StatItem Interface

```tsx
interface StatItem {
  label: string;        // Stat label/title
  value: string | number; // Stat value
  unit?: string;        // Optional unit (e.g., "+", "/5", "%")
}
```

#### Examples

```tsx
// Basic usage with 4 columns
<StatsGrid 
  stats={[
    { label: "Happy Customers", value: "10K", unit: "+" },
    { label: "Projects Completed", value: "500" },
    { label: "Team Members", value: "50", unit: "+" },
    { label: "Years of Experience", value: "10", unit: "+" }
  ]} 
/>

// 3-column layout
<StatsGrid 
  stats={[
    { label: "Downloads", value: "100K", unit: "+" },
    { label: "Rating", value: "4.9", unit: "/5" },
    { label: "Reviews", value: "2.5K", unit: "+" }
  ]}
  columns={3}
/>

// 2-column layout with hover effects
<StatsGrid 
  stats={[
    { label: "Revenue", value: "$50M", unit: "+" },
    { label: "Growth", value: "150%", unit: "" }
  ]}
  columns={2}
  showHover={true}
/>

// Custom styling with colors
<StatsGrid 
  stats={[
    { label: "Products", value: "1000", unit: "+" },
    { label: "Countries", value: "50", unit: "+" }
  ]}
  borderColor="#007bff"
  textColor="#212529"
/>

// Borderless stats
<StatsGrid 
  stats={[
    { label: "Active Users", value: "25K", unit: "+" },
    { label: "Uptime", value: "99.9", unit: "%" }
  ]}
  noBorder={true}
/>

// With custom padding and background (default padding is 0)
<StatsGrid 
  stats={[
    { label: "Projects", value: "500", unit: "+" },
    { label: "Clients", value: "200", unit: "+" }
  ]}
  paddingX="4rem"
  paddingXMobile="1.5rem"
  paddingY="3rem"
  paddingYMobile="2rem"
  backgroundColor="#f9fafb"
/>

// Note: All padding props accept any CSS unit (rem, px, vh, em, etc.)
// If no padding props are provided, sections have 0 padding by default
```

---

### Overview

A comprehensive overview section component that combines highlights, descriptions, and media. Perfect for project showcases, feature presentations, or product overviews.

#### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `title` | `string` | - | ❌ | Main section title |
| `subtitle` | `string` | - | ❌ | Subtitle text |
| `description` | `string \| React.ReactNode` | - | ❌ | Description content (text or JSX) |
| `highlights` | `HighlightItem[]` | `[]` | ❌ | Array of highlight items |
| `media` | `MediaItem` | - | ❌ | Media item (image or video) |
| `className` | `string` | - | ❌ | Custom CSS class for section |
| `backgroundColor` | `string` | - | ❌ | Background color |
| `backgroundImage` | `string` | - | ❌ | Background image URL |
| `paddingX` | `string` | `"0"` | ❌ | Horizontal padding (desktop). Accepts any CSS unit (e.g., "2rem", "48px", "5vh") |
| `paddingXMobile` | `string` | `"0"` | ❌ | Horizontal padding (mobile). Accepts any CSS unit |
| `paddingY` | `string` | `"0"` | ❌ | Vertical padding (desktop). Accepts any CSS unit |
| `paddingYMobile` | `string` | `"0"` | ❌ | Vertical padding (mobile). Accepts any CSS unit |
| `hoverAnimation` | `boolean` | `true` | ❌ | Whether images should have hover scale animation |
| `titleClassName` | `string` | - | ❌ | Custom class for title |
| `subtitleClassName` | `string` | - | ❌ | Custom class for subtitle |
| `descriptionClassName` | `string` | - | ❌ | Custom class for description |
| `highlightsClassName` | `string` | - | ❌ | Custom class for highlights |

#### Interfaces

```tsx
interface HighlightItem {
  label: string;
  value: string;
  icon?: React.ReactNode;  // Optional icon element
}

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
}
```

#### Examples

```tsx
// Basic overview with title and description
<Overview
  title="About Our Project"
  subtitle="Innovation"
  description="This is an amazing project that solves real-world problems with cutting-edge technology."
/>

// With highlights
<Overview
  title="Key Features"
  subtitle="Why Choose Us"
  highlights={[
    { label: "Fast Delivery", value: "24/7 Support" },
    { label: "Secure", value: "SSL Encrypted" },
    { label: "Scalable", value: "Grows with You" }
  ]}
/>

// With media (image) and hover animation
<Overview
  title="Our Dashboard"
  description="Beautiful and intuitive interface"
  media={{
    type: "image",
    src: "https://example.com/dashboard.jpg",
    alt: "Dashboard screenshot",
    caption: "Modern dashboard design"
  }}
  hoverAnimation={true}
/>

// With video media
<Overview
  title="Product Demo"
  subtitle="See It In Action"
  media={{
    type: "video",
    src: "https://example.com/demo.mp4",
    caption: "Full feature walkthrough"
  }}
/>

// Complete overview with all features
<Overview
  title="Complete Solution"
  subtitle="Enterprise Ready"
  description="Everything you need in one place"
  highlights={[
    { label: "Integration", value: "100+ APIs" },
    { label: "Security", value: "Enterprise Grade" },
    { label: "Support", value: "24/7 Available" }
  ]}
  media={{
    type: "image",
    src: "https://example.com/solution.jpg",
    alt: "Complete solution"
  }}
  backgroundColor="#f5f5f5"
/>

// With custom styling
<Overview
  title="Custom Styled"
  subtitle="Personalized"
  description="Fully customizable component"
  highlights={[
    { label: "Feature 1", value: "Value 1" },
    { label: "Feature 2", value: "Value 2" }
  ]}
  className="my-overview"
  titleClassName="custom-title"
  descriptionClassName="custom-description"
  backgroundColor="#ffffff"
/>
```

---

### Card

A versatile card component with image, title, description, CTA button, and visual variants. Styles are provided by `src/styles/card.css`; the component applies matching class names so styles are picked up automatically.

#### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `title` | `string` | - | ✅ | Card title |
| `description` | `string` | - | ❌ | Card description |
| `imageSrc` | `string` | - | ❌ | Image URL |
| `imageAlt` | `string` | - | ❌ | Image alt text |
| `ctaText` | `string` | - | ❌ | CTA button text |
| `ctaHref` | `string` | `"#"` | ❌ | CTA link URL |
| `ctaVariant` | `ButtonVariant` | `"red"` | ❌ | CTA button style |
| `ctaSize` | `"sm" \| "md" \| "lg"` | `"md"` | ❌ | CTA button size |
| `ctaShape` | `"rounded" \| "square"` | `"rounded"` | ❌ | CTA button shape |
| `ctaBlank` | `boolean` | - | ❌ | Open CTA link in new tab |
| `variant` | `"blue" \| "purple" \| "green" \| "red" \| "neutral" \| "outline"` | `"neutral"` | ❌ | Visual style variant |
| `rounded` | `boolean` | `true` | ❌ | Apply rounded corners to card |
| `hoverAnimation` | `boolean` | `true` | ❌ | Whether images should scale on card hover |
| `shadowOnHover` | `boolean` | `true` | ❌ | Whether card should have shadow on hover |
| `className` | `string` | `""` | ❌ | Additional classes |

`ButtonVariant` = `"black" | "white" | "red" | "gray" | "lime" | "transparent-black" | "transparent-white" | "transparent-red" | "transparent-gray" | "transparent-lime"`

#### Notes
- The CTA button is rendered using the library `CustomButton` with `unstyled` and `className="cta"` so the `.cta` rules from `card.css` are applied.
- Variant classes on the root element (`blue`, `purple`, etc.) control background and CTA styling via `card.css`.

#### Examples

```tsx
import { Card } from 'landing-page-creator';

<Card
  title="Modern UI Kit"
  description="Build beautiful interfaces faster with our pre-styled components."
  imageSrc="https://picsum.photos/800/450"
  ctaText="Learn More"
  ctaHref="/docs"
  variant="blue"
/>

<Card
  title="Simple Outline"
  description="A minimal outline style card."
  ctaText="Get Started"
  ctaHref="/start"
  variant="outline"
/>

<Card
  title="Not Rounded"
  description="Card with square corners."
  ctaText="View Details"
  ctaHref="/details"
  rounded={false}
  variant="neutral"
/>

// Card with hover effects (default)
<Card
  title="Interactive Card"
  description="Image scales and shadow appears on hover."
  imageSrc="https://picsum.photos/800/450"
  hoverAnimation={true}
  shadowOnHover={true}
/>

// Card without hover effects
<Card
  title="Static Card"
  description="No hover animations."
  hoverAnimation={false}
  shadowOnHover={false}
/>
```

---

### StickyNav

A sticky navigation component that stays fixed at the top while scrolling. Supports logo/brand, navigation links, CTA button, responsive mobile menu, and scroll-based styling changes.

#### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `logoUrl` | `string` | - | ❌ | Logo image URL |
| `logoAlt` | `string` | - | ❌ | Logo alt text |
| `brandName` | `string` | - | ❌ | Brand name (used if no logo) |
| `links` | `NavLink[]` | `[]` | ❌ | Array of navigation links |
| `ctaText` | `string` | - | ❌ | CTA button text |
| `ctaUrl` | `string` | - | ❌ | CTA button URL |
| `ctaVariant` | `ButtonVariant` | `"red"` | ❌ | CTA button variant |
| `backgroundColor` | `string` | `"transparent"` | ❌ | Background color |
| `scrolledBackgroundColor` | `string` | `"#ffffff"` | ❌ | Background color when scrolled |
| `textColor` | `string` | `"#111827"` | ❌ | Text color |
| `scrolledTextColor` | `string` | - | ❌ | Text color when scrolled |
| `showBackgroundOnScroll` | `boolean` | `true` | ❌ | Show background on scroll |
| `blurOnScroll` | `boolean` | `false` | ❌ | Apply blur effect on scroll |
| `shadowOnScroll` | `boolean` | `true` | ❌ | Apply shadow on scroll |
| `paddingX` | `string` | `"1.5rem"` | ❌ | Horizontal padding (desktop) |
| `paddingXMobile` | `string` | `"1rem"` | ❌ | Horizontal padding (mobile) |
| `scrollOffset` | `number` | `0` | ❌ | Scroll offset before nav becomes sticky (pixels) |
| `sticky` | `boolean` | `true` | ❌ | Make nav sticky/fixed |
| `mobileMenuBackgroundColor` | `string` | `"#ffffff"` | ❌ | Mobile menu background color |
| `mobileMenuTextColor` | `string` | `"#000000"` | ❌ | Mobile menu text color |
| `className` | `string` | - | ❌ | Additional CSS classes |

#### Interfaces

```tsx
interface NavLink {
  text: string;
  url: string;
  target?: "_blank" | "_self";
}
```

**ButtonVariant** = `"black" | "white" | "red" | "gray" | "lime" | "transparent-black" | "transparent-white" | "transparent-red" | "transparent-gray" | "transparent-lime"`

#### Examples

```tsx
import { StickyNav } from 'landing-page-creator';

// Basic sticky navigation
<StickyNav
  logoUrl="/logo.png"
  brandName="My Brand"
  links={[
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Services", url: "/services" },
    { text: "Contact", url: "/contact" }
  ]}
  ctaText="Get Started"
  ctaUrl="/signup"
/>

// With scroll-based styling
<StickyNav
  logoUrl="/logo.png"
  brandName="My Brand"
  links={[
    { text: "Home", url: "/" },
    { text: "About", url: "/about" }
  ]}
  backgroundColor="transparent"
  scrolledBackgroundColor="#ffffff"
  textColor="#ffffff"
  scrolledTextColor="#111827"
  shadowOnScroll={true}
  blurOnScroll={false}
/>

// Non-sticky navigation
<StickyNav
  brandName="My Brand"
  links={[
    { text: "Home", url: "/" },
    { text: "About", url: "/about" }
  ]}
  sticky={false}
/>

// With custom mobile menu colors
<StickyNav
  logoUrl="/logo.png"
  brandName="My Brand"
  links={[
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Services", url: "/services" }
  ]}
  textColor="#ffffff"
  backgroundColor="transparent"
  mobileMenuBackgroundColor="#1a1a1a"
  mobileMenuTextColor="#ffffff"
/>
```

---

### Footer

A comprehensive footer component with brand/logo, multiple link columns, social media links, and copyright information. Fully responsive with mobile-optimized layout.

#### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `brandName` | `string` | - | ❌ | Company/Brand name |
| `logoUrl` | `string` | - | ❌ | Logo image URL |
| `logoAlt` | `string` | - | ❌ | Logo alt text |
| `description` | `string` | - | ❌ | Description text (company mission/about) |
| `columns` | `FooterColumn[]` | `[]` | ❌ | Footer columns with links |
| `socialLinks` | `SocialLink[]` | `[]` | ❌ | Social media links |
| `copyright` | `string` | - | ❌ | Copyright text |
| `backgroundColor` | `string` | `"#111827"` | ❌ | Background color |
| `textColor` | `string` | `"#ffffff"` | ❌ | Text color |
| `linkColor` | `string` | - | ❌ | Link color |
| `linkHoverColor` | `string` | - | ❌ | Link hover color |
| `className` | `string` | - | ❌ | Additional CSS classes |
| `children` | `React.ReactNode` | - | ❌ | Additional content to render at bottom |

#### Interfaces

```tsx
interface FooterColumn {
  title?: string;
  links: FooterLink[];
}

interface FooterLink {
  text: string;
  url: string;
  target?: "_blank" | "_self";
}

interface SocialLink {
  platform: string;
  url: string;
  icon?: React.ReactNode;
  target?: "_blank" | "_self";
}
```

#### Examples

```tsx
import { Footer } from 'landing-page-creator';

// Basic footer
<Footer
  brandName="My Company"
  logoUrl="/logo.png"
  description="Building amazing products for developers"
  columns={[
    {
      title: "Products",
      links: [
        { text: "Features", url: "/features" },
        { text: "Pricing", url: "/pricing" }
      ]
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "/about" },
        { text: "Contact", url: "/contact" }
      ]
    }
  ]}
  socialLinks={[
    { platform: "Twitter", url: "https://twitter.com/company" },
    { platform: "LinkedIn", url: "https://linkedin.com/company/company" }
  ]}
  copyright="© 2024 My Company. All rights reserved."
/>

// Footer with custom colors
<Footer
  brandName="My Brand"
  logoUrl="/logo.png"
  backgroundColor="#1a1a1a"
  textColor="#ffffff"
  linkColor="#cccccc"
  linkHoverColor="#ffffff"
  columns={[
    {
      title: "Resources",
      links: [
        { text: "Documentation", url: "/docs" },
        { text: "Support", url: "/support" }
      ]
    }
  ]}
  copyright="© 2024 My Brand"
/>
```

---

### InfoWithImages

A flexible section component that displays text content alongside image collages. Supports 1-3 images arranged in different layouts (single, double, or L-shaped grid), with customizable text positioning, buttons, and styling options.

#### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `title` | `string` | - | ✅ | Main heading text |
| `eyebrow` | `string` | - | ❌ | Eyebrow text displayed above title |
| `paragraphs` | `string[]` | `[]` | ❌ | Array of paragraph text to display |
| `primaryButton` | `ButtonConfig` | - | ❌ | Primary button configuration |
| `secondaryButton` | `ButtonConfig` | - | ❌ | Secondary button configuration |
| `images` | `ImageItem[]` | - | ✅ | Array of 1-3 image items |
| `imagePosition` | `"left" \| "right"` | `"left"` | ❌ | Position of images relative to text |
| `imageRounded` | `boolean` | `false` | ❌ | Apply border-radius to images |
| `hoverAnimation` | `boolean` | `true` | ❌ | Whether images should have hover scale animation. Only the hovered image animates (not all images at once) |
| `backgroundColor` | `string` | - | ❌ | Background color |
| `backgroundImage` | `string` | - | ❌ | Background image URL |
| `paddingX` | `string` | `"0"` | ❌ | Horizontal padding (desktop). Accepts any CSS unit (e.g., "2rem", "48px", "5vh") |
| `paddingXMobile` | `string` | `"0"` | ❌ | Horizontal padding (mobile). Accepts any CSS unit |
| `paddingY` | `string` | `"0"` | ❌ | Vertical padding (desktop). Accepts any CSS unit |
| `paddingYMobile` | `string` | `"0"` | ❌ | Vertical padding (mobile). Accepts any CSS unit |
| `paddingTop` | `string` | - | ❌ | Top padding (desktop). Accepts any CSS unit. If not provided, falls back to paddingY |
| `paddingTopMobile` | `string` | - | ❌ | Top padding (mobile). Accepts any CSS unit. If not provided, falls back to paddingYMobile |
| `paddingBottom` | `string` | - | ❌ | Bottom padding (desktop). Accepts any CSS unit. If not provided, falls back to paddingY |
| `paddingBottomMobile` | `string` | - | ❌ | Bottom padding (mobile). Accepts any CSS unit. If not provided, falls back to paddingYMobile |
| `className` | `string` | - | ❌ | Additional CSS classes |

#### Interfaces

```tsx
interface ImageItem {
  src: string;      // Image source URL
  alt?: string;     // Image alt text
}

interface ButtonConfig {
  text: string;
  url?: string;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  shape?: "rounded" | "square";
  blank?: boolean;
  onClick?: () => void;
  className?: string;
}
```

**ButtonVariant** = `"black" | "white" | "red" | "gray" | "lime" | "transparent-black" | "transparent-white" | "transparent-red" | "transparent-gray" | "transparent-lime"`

#### Image Layouts

- **1 image**: Single full-width image
- **2 images**: Two equal-sized images stacked vertically
- **3 images**: L-shaped grid with one large image and two smaller images

#### Examples

```tsx
// Basic usage with single image
<InfoWithImages
  title="Our Story"
  paragraphs={[
    "We started with a simple vision: to make web development easier and more accessible.",
    "Today, we're proud to serve thousands of developers worldwide."
  ]}
  images={[
    { src: "https://example.com/story.jpg", alt: "Our story" }
  ]}
/>

// With eyebrow and buttons
<InfoWithImages
  eyebrow="About Us"
  title="Building the Future"
  paragraphs={[
    "We're creating innovative solutions for modern challenges.",
    "Join us on this journey."
  ]}
  primaryButton={{
    text: "Learn More",
    url: "/about",
    variant: "black"
  }}
  secondaryButton={{
    text: "Contact Us",
    url: "/contact",
    variant: "transparent-black"
  }}
  images={[
    { src: "https://example.com/image1.jpg", alt: "Team photo" },
    { src: "https://example.com/image2.jpg", alt: "Office space" }
  ]}
/>

// Images on the right
<InfoWithImages
  title="Our Services"
  paragraphs={[
    "We offer comprehensive solutions for your business needs."
  ]}
  images={[
    { src: "https://example.com/service1.jpg", alt: "Service 1" },
    { src: "https://example.com/service2.jpg", alt: "Service 2" },
    { src: "https://example.com/service3.jpg", alt: "Service 3" }
  ]}
  imagePosition="right"
/>

// With rounded images and custom background
<InfoWithImages
  eyebrow="Innovation"
  title="Creative Solutions"
  paragraphs={[
    "We combine creativity with technology to deliver exceptional results."
  ]}
  images={[
    { src: "https://example.com/creative.jpg", alt: "Creative work" }
  ]}
  imageRounded={true}
  hoverAnimation={true}
  backgroundColor="#f5f5f5"
  primaryButton={{
    text: "View Portfolio",
    url: "/portfolio",
    variant: "red"
  }}
/>

// With hover animation disabled
<InfoWithImages
  title="Static Images"
  paragraphs={["No hover effects on images"]}
  images={[{ src: "image.jpg", alt: "Image" }]}
  hoverAnimation={false}
/>

// Three images with L-shaped layout
<InfoWithImages
  title="Our Workspace"
  paragraphs={[
    "A modern environment designed for collaboration and innovation."
  ]}
  images={[
    { src: "https://example.com/workspace1.jpg", alt: "Workspace 1" },
    { src: "https://example.com/workspace2.jpg", alt: "Workspace 2" },
    { src: "https://example.com/workspace3.jpg", alt: "Workspace 3" }
  ]}
/>
```

---

### ImageCardGrid

A flexible image card grid component that displays items in either a grid or carousel layout. Perfect for showcasing products, services, or portfolio items with images, titles, and descriptions.

#### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `title` | `string` | - | ❌ | Section title |
| `subtitle` | `string` | - | ❌ | Section subtitle |
| `items` | `CardItem[]` | - | ✅ | Array of card items to display |
| `layout` | `"grid" \| "carousel"` | `"grid"` | ❌ | Layout type - grid or carousel |
| `imageHeight` | `string` | `"300px"` | ❌ | Height of images (accepts any CSS unit) |
| `hoverAnimation` | `boolean` | `true` | ❌ | Whether images should have hover scale animation |
| `backgroundColor` | `string` | - | ❌ | Background color |
| `backgroundImage` | `string` | - | ❌ | Background image URL |
| `paddingX` | `string` | `"0"` | ❌ | Horizontal padding (desktop). Accepts any CSS unit |
| `paddingXMobile` | `string` | `"0"` | ❌ | Horizontal padding (mobile). Accepts any CSS unit |
| `paddingY` | `string` | `"0"` | ❌ | Vertical padding (desktop). Accepts any CSS unit |
| `paddingYMobile` | `string` | `"0"` | ❌ | Vertical padding (mobile). Accepts any CSS unit |
| `paddingTop` | `string` | - | ❌ | Top padding (desktop). Accepts any CSS unit |
| `paddingTopMobile` | `string` | - | ❌ | Top padding (mobile). Accepts any CSS unit |
| `paddingBottom` | `string` | - | ❌ | Bottom padding (desktop). Accepts any CSS unit |
| `paddingBottomMobile` | `string` | - | ❌ | Bottom padding (mobile). Accepts any CSS unit |
| `className` | `string` | - | ❌ | Additional CSS classes |

#### CardItem Interface

```tsx
interface CardItem {
  image: string;        // Image source URL
  imageAlt?: string;     // Image alt text
  title: string;         // Card title
  description?: string;  // Card description
}
```

#### Examples

```tsx
// Basic grid layout
<ImageCardGrid
  title="Our Products"
  subtitle="Featured Items"
  items={[
    {
      image: "https://example.com/product1.jpg",
      imageAlt: "Product 1",
      title: "Product 1",
      description: "Description of product 1"
    },
    {
      image: "https://example.com/product2.jpg",
      imageAlt: "Product 2",
      title: "Product 2",
      description: "Description of product 2"
    },
    {
      image: "https://example.com/product3.jpg",
      imageAlt: "Product 3",
      title: "Product 3",
      description: "Description of product 3"
    }
  ]}
/>

// Carousel layout
<ImageCardGrid
  title="Featured Items"
  items={[
    { image: "item1.jpg", title: "Item 1" },
    { image: "item2.jpg", title: "Item 2" },
    { image: "item3.jpg", title: "Item 3" }
  ]}
  layout="carousel"
/>

// With custom image height and hover animation
<ImageCardGrid
  title="Portfolio"
  items={[
    { image: "work1.jpg", title: "Work 1", description: "Description" },
    { image: "work2.jpg", title: "Work 2", description: "Description" }
  ]}
  imageHeight="400px"
  hoverAnimation={true}
/>

// With background and padding
<ImageCardGrid
  title="Our Services"
  items={[
    { image: "service1.jpg", title: "Service 1" },
    { image: "service2.jpg", title: "Service 2" }
  ]}
  backgroundColor="#f5f5f5"
  paddingX="2rem"
  paddingY="3rem"
/>

// Without hover animation
<ImageCardGrid
  title="Static Grid"
  items={[
    { image: "item1.jpg", title: "Item 1" }
  ]}
  hoverAnimation={false}
/>
```

---

### AlternatingContentSection

A content section component that displays items in an alternating layout with images or icons on one side and text content on the other. Perfect for feature lists, process steps, or content showcases.

#### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `title` | `string` | - | ❌ | Section title |
| `subtitle` | `string` | - | ❌ | Section subtitle |
| `items` | `ContentItem[]` | - | ✅ | Array of content items |
| `imagePosition` | `"left" \| "right"` | `"left"` | ❌ | Starting position for images (alternates automatically) |
| `imageRounded` | `boolean` | `false` | ❌ | Apply border-radius to images |
| `hoverAnimation` | `boolean` | `true` | ❌ | Whether images should have hover scale animation |
| `backgroundColor` | `string` | - | ❌ | Background color |
| `backgroundImage` | `string` | - | ❌ | Background image URL |
| `paddingX` | `string` | `"0"` | ❌ | Horizontal padding (desktop). Accepts any CSS unit |
| `paddingXMobile` | `string` | `"0"` | ❌ | Horizontal padding (mobile). Accepts any CSS unit |
| `paddingY` | `string` | `"0"` | ❌ | Vertical padding (desktop). Accepts any CSS unit |
| `paddingYMobile` | `string` | `"0"` | ❌ | Vertical padding (mobile). Accepts any CSS unit |
| `paddingTop` | `string` | - | ❌ | Top padding (desktop). Accepts any CSS unit |
| `paddingTopMobile` | `string` | - | ❌ | Top padding (mobile). Accepts any CSS unit |
| `paddingBottom` | `string` | - | ❌ | Bottom padding (desktop). Accepts any CSS unit |
| `paddingBottomMobile` | `string` | - | ❌ | Bottom padding (mobile). Accepts any CSS unit |
| `className` | `string` | - | ❌ | Additional CSS classes |

#### ContentItem Interface

```tsx
interface ContentItem {
  icon?: React.ReactNode;  // Optional icon element
  title: string;            // Item title
  description: string;      // Item description
  image?: string;           // Optional image URL
  imageAlt?: string;        // Image alt text
}
```

#### Examples

```tsx
// Basic alternating content with images
<AlternatingContentSection
  title="Our Features"
  subtitle="Why Choose Us"
  items={[
    {
      image: "https://example.com/feature1.jpg",
      imageAlt: "Feature 1",
      title: "Feature 1",
      description: "Description of feature 1"
    },
    {
      image: "https://example.com/feature2.jpg",
      imageAlt: "Feature 2",
      title: "Feature 2",
      description: "Description of feature 2"
    }
  ]}
/>

// With icons instead of images
<AlternatingContentSection
  title="Our Process"
  items={[
    {
      icon: <Icon1 />,
      title: "Step 1",
      description: "First step description"
    },
    {
      icon: <Icon2 />,
      title: "Step 2",
      description: "Second step description"
    }
  ]}
/>

// With rounded images and hover animation
<AlternatingContentSection
  title="Our Services"
  items={[
    {
      image: "service1.jpg",
      title: "Service 1",
      description: "Service description"
    }
  ]}
  imageRounded={true}
  hoverAnimation={true}
/>

// Starting with images on the right
<AlternatingContentSection
  title="About Us"
  items={[
    {
      image: "about1.jpg",
      title: "Our Story",
      description: "Story description"
    }
  ]}
  imagePosition="right"
/>

// With custom background and padding
<AlternatingContentSection
  title="Features"
  items={[
    { image: "feature.jpg", title: "Feature", description: "Description" }
  ]}
  backgroundColor="#f9fafb"
  paddingX="4rem"
  paddingY="3rem"
/>

// Without hover animation
<AlternatingContentSection
  title="Static Content"
  items={[
    { image: "item.jpg", title: "Item", description: "Description" }
  ]}
  hoverAnimation={false}
/>
```

---

### Carousel

A powerful carousel/slider component built with Swiper. Features thumbnail navigation, fullscreen mode, autoplay, and responsive breakpoints. Perfect for displaying images, videos, or any content in a rotating carousel format.

#### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactNode[]` | - | ✅ | Array of slide content (images, videos, etc.) |
| `autoplay` | `boolean \| number` | `false` | ❌ | Enable autoplay (true for default delay, or number for custom delay in ms) |
| `showThumbnails` | `boolean` | `true` | ❌ | Show thumbnail navigation below main carousel |
| `showArrows` | `boolean` | `true` | ❌ | Show navigation arrows |
| `showPagination` | `boolean` | `true` | ❌ | Show pagination dots |
| `delay` | `number` | `3000` | ❌ | Autoplay delay in milliseconds |
| `pauseOnHover` | `boolean` | `false` | ❌ | Pause autoplay on hover |
| `loop` | `boolean` | `true` | ❌ | Enable infinite loop |
| `spaceBetween` | `number` | `30` | ❌ | Space between slides in pixels |
| `slidesPerView` | `number \| 'auto'` | `1` | ❌ | Number of slides visible at once |
| `slidesPerViewMobile` | `number \| 'auto'` | `1` | ❌ | Slides per view on mobile |
| `slidesPerViewDesktop` | `number \| 'auto'` | `1` | ❌ | Slides per view on desktop |
| `height` | `number \| string` | - | ❌ | Carousel height (px or CSS value) |
| `heightMobile` | `number \| string` | - | ❌ | Height on mobile devices |
| `heightDesktop` | `number \| string` | - | ❌ | Height on desktop devices |
| `aspectRatio` | `number \| string` | - | ❌ | Aspect ratio (e.g., '16/9' or 1.777) |
| `activeColor` | `string` | `'#007bff'` | ❌ | Color for active pagination dot and thumbnail border |
| `className` | `string` | - | ❌ | Additional CSS classes |
| `enableFullscreen` | `boolean` | `false` | ❌ | Enable fullscreen modal view |

#### Examples

```tsx
// Basic carousel
<Carousel>
  <img src="image1.jpg" alt="Image 1" />
  <img src="image2.jpg" alt="Image 2" />
  <img src="image3.jpg" alt="Image 3" />
</Carousel>

// With autoplay
<Carousel
  autoplay={3000}
  loop={true}
>
  <img src="image1.jpg" alt="Image 1" />
  <img src="image2.jpg" alt="Image 2" />
  <img src="image3.jpg" alt="Image 3" />
</Carousel>

// Without thumbnails
<Carousel
  showThumbnails={false}
  showArrows={true}
  showPagination={true}
>
  <img src="image1.jpg" alt="Image 1" />
  <img src="image2.jpg" alt="Image 2" />
</Carousel>

// Custom height with aspect ratio
<Carousel
  height={500}
  aspectRatio="16/9"
  autoplay={3000}
>
  <img src="image1.jpg" alt="Image 1" />
  <img src="image2.jpg" alt="Image 2" />
</Carousel>

// Responsive carousel with different views
<Carousel
  slidesPerViewMobile={1}
  slidesPerViewDesktop={3}
  spaceBetween={20}
>
  <img src="image1.jpg" alt="Image 1" />
  <img src="image2.jpg" alt="Image 2" />
  <img src="image3.jpg" alt="Image 3" />
</Carousel>

// With fullscreen mode
<Carousel
  enableFullscreen={true}
  activeColor="#ff0000"
>
  <img src="image1.jpg" alt="Image 1" />
  <img src="image2.jpg" alt="Image 2" />
  <img src="image3.jpg" alt="Image 3" />
</Carousel>

// Pause on hover
<Carousel
  autoplay={3000}
  pauseOnHover={true}
  loop={true}
>
  <img src="image1.jpg" alt="Image 1" />
  <img src="image2.jpg" alt="Image 2" />
</Carousel>

// Custom styling
<Carousel
  className="my-custom-carousel"
  activeColor="#00ff00"
  heightMobile="200px"
  heightDesktop="600px"
>
  <img src="image1.jpg" alt="Image 1" />
  <img src="image2.jpg" alt="Image 2" />
</Carousel>
```

---

### SectionsRenderer

A utility component that renders multiple sections in a declarative way. Perfect for building complete landing pages with a consistent structure.

#### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `sections` | `SectionConfig[]` | - | ✅ | Array of section configurations |

#### Section Configuration

Each section in the `sections` array must have:
- `type`: The type of section (`"hero"`, `"stats-grid"`, `"overview"`, or `"info-with-images"`)
- `content`: The props for that section

```tsx
type SectionConfig = 
  | { type: "hero"; content: HeroProps }
  | { type: "stats-grid"; content: StatsGridProps }
  | { type: "overview"; content: OverviewProps }
  | { type: "info-with-images"; content: InfoWithImagesProps };
```

**Note**: Carousel is a standalone component and is not part of SectionsRenderer. Import and use it directly in your components.

#### Examples

```tsx
import { SectionsRenderer } from 'landing-page-creator';

function LandingPage() {
  const sections = [
    {
      type: "hero" as const,
      content: {
        title: "Welcome to Our Platform",
        subtitle: "The Future of Web Development",
        description: "Build stunning landing pages with ease",
        primaryButtonText: "Get Started",
        primaryButtonUrl: "/signup",
        backgroundImage: "https://example.com/hero.jpg",
        overlayOpacity: 0.3
      }
    },
    {
      type: "stats-grid" as const,
      content: {
        stats: [
          { label: "Happy Customers", value: "10K", unit: "+" },
          { label: "Projects Completed", value: "500" },
          { label: "Team Members", value: "50", unit: "+" },
          { label: "Years of Experience", value: "10", unit: "+" }
        ],
        columns: 4,
        showHover: true
      }
    },
    {
      type: "overview" as const,
      content: {
        title: "About Our Project",
        subtitle: "Innovation",
        description: "This is an amazing project that solves real-world problems.",
        highlights: [
          { label: "Feature 1", value: "Value 1" },
          { label: "Feature 2", value: "Value 2" },
          { label: "Feature 3", value: "Value 3" }
        ],
        media: {
          type: "image",
          src: "https://example.com/image.jpg",
          alt: "Project image"
        }
      }
    },
    {
      type: "info-with-images" as const,
      content: {
        title: "Our Story",
        eyebrow: "About Us",
        paragraphs: [
          "We started with a vision to make web development easier.",
          "Today, we serve thousands of developers worldwide."
        ],
        images: [
          { src: "https://example.com/story.jpg", alt: "Our story" }
        ],
        primaryButton: {
          text: "Learn More",
          url: "/about",
          variant: "black"
        }
      }
    }
  ];

  return <SectionsRenderer sections={sections} />;
}
```

---

## License

MIT © [Mohamed Abdelkarim](https://github.com/mohamedahmede)
