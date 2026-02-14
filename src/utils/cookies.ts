/**
 * Cookie utility functions for consent management
 */

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_NAME = 'cookie-consent';
const COOKIE_PREFERENCES_NAME = 'cookie-preferences';

/**
 * Set a cookie with expiration
 */
export function setCookie(name: string, value: string, days: number = 365): void {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
}

/**
 * Get a cookie value by name
 */
export function getCookie(name: string): string | null {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(';');
  
  for (const cookie of cookies) {
    const trimmedCookie = cookie.trim();
    if (trimmedCookie.indexOf(nameEQ) === 0) {
      return trimmedCookie.substring(nameEQ.length);
    }
  }
  return null;
}

/**
 * Delete a cookie
 */
export function deleteCookie(name: string): void {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

/**
 * Check if user has given consent
 */
export function hasConsent(): boolean {
  return getCookie(COOKIE_CONSENT_NAME) === 'true';
}

/**
 * Set consent status
 */
export function setConsent(consent: boolean): void {
  setCookie(COOKIE_CONSENT_NAME, consent.toString());
}

/**
 * Get cookie preferences
 */
export function getCookiePreferences(): CookiePreferences {
  const prefs = getCookie(COOKIE_PREFERENCES_NAME);
  
  if (prefs) {
    try {
      return JSON.parse(prefs);
    } catch {
      // If parsing fails, return defaults
    }
  }
  
  // Default: only necessary cookies enabled
  return {
    necessary: true,
    analytics: false,
    marketing: false,
  };
}

/**
 * Save cookie preferences
 */
export function saveCookiePreferences(preferences: CookiePreferences): void {
  setCookie(COOKIE_PREFERENCES_NAME, JSON.stringify(preferences));
  setConsent(true);
}

/**
 * Accept all cookies
 */
export function acceptAllCookies(): void {
  saveCookiePreferences({
    necessary: true,
    analytics: true,
    marketing: true,
  });
}

/**
 * Reject optional cookies (only necessary)
 */
export function rejectOptionalCookies(): void {
  saveCookiePreferences({
    necessary: true,
    analytics: false,
    marketing: false,
  });
}
