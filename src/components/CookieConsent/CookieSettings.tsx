'use client'

import { useState, useEffect } from "react";
import {
  getCookiePreferences,
  saveCookiePreferences,
  CookiePreferences,
} from "@/utils/cookies";

interface CookieSettingsProps {
  onClose: () => void;
  onSave: () => void;
}

export default function CookieSettings({ onClose, onSave }: CookieSettingsProps) {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Load current preferences
    const currentPrefs = getCookiePreferences();
    setPreferences(currentPrefs);
  }, []);

  const handleToggle = (key: keyof CookiePreferences) => {
    // Necessary cookies cannot be disabled
    if (key === 'necessary') return;

    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    saveCookiePreferences(preferences);
    onSave();
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Cookie Settings
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Manage your cookie preferences. You can enable or disable different types of cookies below.
          </p>

          <div className="space-y-6">
            {/* Necessary Cookies */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Necessary Cookies
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                  </p>
                </div>
                <div className="ml-4">
                  <div className="relative inline-flex items-center cursor-not-allowed opacity-50">
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="sr-only"
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#102C46]"></div>
                  </div>
                  <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">Always On</span>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Analytics Cookies
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handleToggle('analytics')}
                    className="relative inline-flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => handleToggle('analytics')}
                      className="sr-only peer"
                    />
                    <div className={`w-11 h-6 rounded-full peer peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 ${
                      preferences.analytics
                        ? 'bg-[#102C46] after:translate-x-full after:border-white'
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`}></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="pb-6">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Marketing Cookies
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    These cookies are used to track visitors across websites. They are used to display ads that are relevant and engaging for individual users, thereby making them more valuable for publishers and third-party advertisers.
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handleToggle('marketing')}
                    className="relative inline-flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => handleToggle('marketing')}
                      className="sr-only peer"
                    />
                    <div className={`w-11 h-6 rounded-full peer peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 ${
                      preferences.marketing
                        ? 'bg-[#102C46] after:translate-x-full after:border-white'
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`}></div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={onClose}
              className="px-6 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 text-sm font-medium text-white bg-[#102C46] hover:bg-opacity-90 rounded-md transition-colors"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
