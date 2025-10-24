# Landing Page Creator

A React component library for building beautiful landing pages with pre-styled components.

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/mohamedahmede/landing-page-creator)

## Installation

```bash
npm install landing-page-creator
```

## Setup

### ⚠️ Important: Import CSS

You **must** import the CSS file for styles to work:

```tsx
// In your main entry file (index.js, App.js, or _app.js)
import 'landing-page-creator/styles.css';
```

**OR** import it directly:

```tsx
import 'landing-page-creator/dist/styles.css';
```

You can also import it in your CSS/SCSS file:

```css
@import 'landing-page-creator/styles.css';
```

## Usage

```tsx
import { CustomButton } from 'landing-page-creator';
import 'landing-page-creator/styles.css'; // ⚠️ Don't forget this!

function App() {
  return (
    <div>
      <CustomButton variant="black" text="Click Me" />
      <CustomButton variant="white" text="Secondary" />
      <CustomButton variant="red" text="Danger" />
    </div>
  );
}
```

## Components

### CustomButton

A customizable button component with multiple variants.

#### Props

- `text` (string): Button text content
- `variant` ("black" | "white" | "red" | "gray" | "lime" | "transparent-black" | "transparent-white" | "transparent-red" | "transparent-gray" | "transparent-lime"): Button style variant (default: "black")
- `size` ("sm" | "md" | "lg"): Button size (default: "md")
- `shape` ("rounded" | "square"): Button shape (default: "rounded")
- `disabled` (boolean): Disable the button (default: false)
- `unstyled` (boolean): Skip all default styles, use only className
- `url` (string): Render as link with this URL
- `blank` (boolean): Open link in new tab (only works with `url`)
- `onClick` (() => void): Click handler function
- All standard HTML button attributes are supported

#### Examples

```tsx
// Basic usage with text prop
<CustomButton variant="black" text="Click Me" />

// Different variants
<CustomButton variant="red" text="Success" />
<CustomButton variant="lime" text="Warning" />
<CustomButton variant="transparent-black" text="Outline" />
<CustomButton variant="transparent-white" text="Ghost" />

// With size and shape
<CustomButton variant="black" size="lg" shape="rounded" text="Large Button" />

// Button as link
<CustomButton variant="red" url="/signup" text="Sign Up" />

// Link opens in new tab
<CustomButton variant="transparent-black" url="https://example.com" blank text="External Link" />

// Disabled state
<CustomButton variant="black" disabled text="Disabled Button" />

// Fully custom (unstyled)
<CustomButton unstyled className="my-class" text="Custom" />
```

## License

MIT
