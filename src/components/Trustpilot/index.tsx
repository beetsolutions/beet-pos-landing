"use client";
import { useEffect, useRef } from "react";

// Declare global Trustpilot type
declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement | null, reload: boolean) => void;
    };
  }
}

interface TrustpilotProps {
  templateId?: string;
  businessUnitId?: string;
  height?: string;
  width?: string;
  theme?: "light" | "dark";
  stars?: string;
  locale?: string;
}

const Trustpilot = ({
  templateId = "5419b6a8b0d04a076446a9ad", // Default: Mini template
  businessUnitId = process.env.NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID,
  height = "24px",
  width = "100%",
  theme = "light",
  stars = "1,2,3,4,5",
  locale = "en-GB",
}: TrustpilotProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Trustpilot widget script
    if (typeof window !== "undefined" && window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);

  return (
    <div
      ref={ref}
      className="trustpilot-widget"
      data-locale={locale}
      data-template-id={templateId}
      data-businessunit-id={businessUnitId}
      data-style-height={height}
      data-style-width={width}
      data-theme={theme}
      data-stars={stars}
    >
      {businessUnitId ? (
        <a
          href={`https://www.trustpilot.com/review/beetpos.com`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Trustpilot
        </a>
      ) : null}
    </div>
  );
};

export default Trustpilot;
