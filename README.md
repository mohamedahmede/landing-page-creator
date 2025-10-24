# Landing Page Creator

A React component library for building beautiful landing pages with pre-styled components.

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/mohamedahmede/landing-page-creator)

## Installation

```bash
npm install landing-page-creator
```

## Setup

Import the CSS file in your app:

```tsx
// In your main entry file (e.g., index.js, App.js, or _app.js)
import 'landing-page-creator/dist/styles.css';
```

## Usage

```tsx
import { CustomButton } from 'landing-page-creator';

function App() {
  return (
    <div>
      <CustomButton variant="primary">Click Me</CustomButton>
      <CustomButton variant="secondary">Secondary</CustomButton>
      <CustomButton variant="danger">Danger</CustomButton>
    </div>
  );
}
```

## Components

### CustomButton

A customizable button component with multiple variants.

#### Props

- `children` (React.ReactNode): The button content
- `variant` ("primary" | "secondary" | "danger" | "success" | "warning" | "outline" | "ghost"): Button style variant (default: "primary")
- `size` ("small" | "medium" | "large"): Button size (default: "medium")
- `fullWidth` (boolean): Make button full width (default: false)
- `disabled` (boolean): Disable the button (default: false)
- `onClick` (() => void): Click handler function

#### Examples

```tsx
// Basic usage
<CustomButton variant="primary">Click Me</CustomButton>

// Different variants
<CustomButton variant="success">Success</CustomButton>
<CustomButton variant="warning">Warning</CustomButton>
<CustomButton variant="outline">Outline</CustomButton>
<CustomButton variant="ghost">Ghost</CustomButton>

// With size and props
<CustomButton variant="primary" size="large" fullWidth onClick={() => console.log('Clicked!')}>
  Large Button
</CustomButton>

// Disabled state
<CustomButton variant="primary" disabled>
  Disabled Button
</CustomButton>
```

## License

MIT
