"use client";
import { useEffect, useRef } from "react";

interface TrustpilotReviewsProps {
  businessUnitId?: string;
}

const TrustpilotReviews = ({
  businessUnitId = process.env.NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID || "YOUR_BUSINESS_UNIT_ID",
}: TrustpilotReviewsProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Trustpilot widget script
    if (typeof window !== "undefined" && (window as any).Trustpilot) {
      (window as any).Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-black/70 dark:text-white/70">
            Don't just take our word for it - see what our customers have to say about BEET POS
          </p>
        </div>
        
        {/* Trustpilot Carousel Widget */}
        <div
          ref={ref}
          className="trustpilot-widget"
          data-locale="en-GB"
          data-template-id="54ad5defc6454f065c28af8b"
          data-businessunit-id={businessUnitId}
          data-style-height="240px"
          data-style-width="100%"
          data-theme="light"
          data-stars="1,2,3,4,5"
          data-review-languages="en"
        >
          <a
            href="https://www.trustpilot.com/review/beetpos.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Trustpilot
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustpilotReviews;
