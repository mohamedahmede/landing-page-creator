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
import { CustomButton, Hero } from 'landing-page-creator';
import 'landing-page-creator/styles.css'; // ⚠️ Don't forget this!

function App() {
  return (
    <div>
      {/* Using CustomButton */}
      <CustomButton variant="black" text="Click Me" />
      
      {/* Using Hero section */}
      <Hero
        title="Welcome to Our Platform"
        subtitle="Get Started Today"
        description="Build amazing landing pages with ease"
        primaryButtonText="Get Started"
        primaryButtonUrl="/signup"
      />
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
| `text` | `string` | - | ❌ | Button text content |
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
- `type`: The type of section (currently only `"hero"` is supported)
- `content`: The props for that section

```tsx
type SectionConfig = {
  type: "hero";
  content: HeroProps;
};
```

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
      type: "hero" as const,
      content: {
        title: "Why Choose Us",
        description: "Learn about our features and benefits",
        align: "left",
        backgroundColor: "#f5f5f5",
        primaryButtonText: "Learn More",
        primaryButtonUrl: "/features"
      }
    }
  ];

  return <SectionsRenderer sections={sections} />;
}
```

---

## License

MIT © [Mohamed Abdelkarim](https://github.com/mohamedahmede)
