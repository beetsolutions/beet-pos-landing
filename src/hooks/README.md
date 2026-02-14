# useTheme Hook

A custom React hook that provides easy access to the current theme value (light/dark) in your components.

## Installation

The hook is already set up in this project and is located at `src/hooks/useTheme.ts`.

## Usage

```tsx
import { useTheme } from '@/hooks/useTheme';

function MyComponent() {
  const { theme, setTheme, systemTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}
```

## API

The hook returns an object with the following properties:

- **`theme`**: `'light' | 'dark'` - The current resolved theme value. This will always be either 'light' or 'dark', even when the user has selected 'system' theme preference (it resolves to the actual system theme).

- **`setTheme`**: `(theme: string) => void` - Function to update the theme. You can pass 'light', 'dark', or 'system' as the value.

- **`systemTheme`**: `'light' | 'dark' | undefined` - The system's color scheme preference, if available.

## How It Works

This hook wraps the `useTheme` hook from the `next-themes` library and provides a simplified interface. The main benefit is that it automatically resolves the 'system' theme to the actual 'light' or 'dark' value, so you don't have to handle that logic in your components.

## Examples

### Simple Theme Display

```tsx
import { useTheme } from '@/hooks/useTheme';

function ThemeDisplay() {
  const { theme } = useTheme();
  
  return <div>Current theme: {theme}</div>;
}
```

### Theme Toggler Button

```tsx
import { useTheme } from '@/hooks/useTheme';

function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
```

### Conditional Rendering Based on Theme

```tsx
import { useTheme } from '@/hooks/useTheme';

function ConditionalContent() {
  const { theme } = useTheme();
  
  return (
    <div>
      {theme === 'dark' ? (
        <p>Dark mode is enabled</p>
      ) : (
        <p>Light mode is enabled</p>
      )}
    </div>
  );
}
```
