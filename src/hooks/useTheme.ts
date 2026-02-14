'use client';

import { useEffect, useState } from 'react';
import { useTheme as useNextTheme } from 'next-themes';

/**
 * Custom hook that provides access to the current theme value (light/dark)
 * Wraps next-themes' useTheme and provides a simplified interface
 * 
 * @returns An object containing the current theme value and the setTheme function
 * - theme: The resolved theme value ('light' or 'dark')
 * - setTheme: Function to update the theme
 * - systemTheme: The system preference if enableSystem is true
 */
export function useTheme() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  // Wait for component to mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return the resolved theme (which handles "system" theme correctly)
  // or fall back to the theme value if resolvedTheme is not available
  // During SSR/initial mount, default to 'light' to avoid hydration issues
  const currentTheme = mounted ? (resolvedTheme || theme || 'light') : 'light';

  return {
    theme: currentTheme as 'light' | 'dark',
    setTheme,
    systemTheme: mounted ? systemTheme : undefined,
  };
}
