import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  gradient: string;
  popular?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Plus",
    price: "£69",
    description: "",
    gradient: "from-violet-600/80 to-indigo-600/80",
    features: [
      { text: "Cloud-based POS System", included: true },
      { text: "Robust Back Office Software", included: true },
      { text: "Inventory Management", included: true },
      { text: "Multi-location management", included: true },
      { text: "Daily Reconciliation", included: true },
      { text: "Employee management", included: true },
      { text: "Control on the Go", included: true },
    ],
    buttonText: "Get Started Free",
  },
  {
    name: "Advanced",
    price: "£89",
    description: "",
    gradient: "from-violet-600/80 to-indigo-600/80",
    features: [
      { text: "Cloud-based POS System", included: true },
      { text: "Robust Back Office Software", included: true },
      { text: "Inventory Management", included: true },
      { text: "Multi-location management", included: true },
      { text: "Daily Reconciliation", included: true },
      { text: "Employee management", included: true },
      { text: "Control on the Go", included: true },
    ],
    buttonText: "Get Started Free",
    popular: true,
  },
];

const tiersRestaurant: PricingTier[] = [
  {
    name: "Starter",
    price: "£0",
    description: "Hardware and software costs are built into the 2.69% + 7 cents processing fee*",
    gradient: "from-pink-600/80 to-rose-600/80",
    features: [
      { text: "Cloud-based POS System", included: true },
      { text: "Robust Back Office Software", included: true },
      { text: "Inventory Management", included: true },
      { text: "Report & Analytics", included: true },
      { text: "Employee management", included: true },
      { text: "Control on the Go", included: true },
    ],
    buttonText: "Get Started",
  },
  {
    name: "Growth",
    price: "£69",
    description: "£2,099 £1,199 M8 POS Counter Station with 2.49% + 7 cents processing fee*",
    gradient: "from-pink-600/80 to-rose-600/80",
    popular: true,
    features: [
      { text: "Everything included in Starter and", included: true },
      { text: "Customer Loyalty Program", included: true },
      { text: "Online Ordering", included: true },
      { text: "Delivery Service", included: true },
      { text: "Takeout & Curbside", included: true },
      { text: "Custom Website", included: true },
      { text: "Multi-location Management", included: true },
    ],
    buttonText: "Get Started",
  },
];

export function PricingSection() {
  return (
      <>
        <section className="pb-16 pt-8 px-4 sm:px-6 lg:px-8 relative bg-primary/15">
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="flex flex-col items-center gap-4 mb-12 mt-2">
                <div className="flex flex-col items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600/10 to-blue-600/10 border border-violet-600/20 shadow-lg shadow-violet-600/5 backdrop-blur-sm">
              <span className="text-sm font-medium bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                🏪 For Retailers
              </span>
                </div>
                <p className="text-base text-gray-600 dark:text-gray-400 hover:text-violet-600 transition-colors duration-300 font-medium" role="text">
                  Convenience<span aria-hidden="true"> • </span><span className="sr-only">, </span>
                  Grocery<span aria-hidden="true"> • </span><span className="sr-only">, </span>
                  Liquor<span aria-hidden="true"> • </span><span className="sr-only">, </span>
                  Smoke Shop
                </p>
              </div>
            </div>

            <div className="flex justify-center md:grid-cols-2 gap-8 lg:gap-4 max-w-4xl mx-auto">
              {tiers.map((tier) => (
                  <div
                      key={tier.name}
                      className={cn(
                          "relative rounded-2xl h-full transition-all duration-500",
                          tier.popular && "scale-105 md:-mt-8 z-10"
                      )}
                  >
                    {tier.popular && (
                        <div className="absolute -top-12 left-0 right-0 mx-auto w-40 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-sm text-white text-center font-semibold shadow-xl shadow-violet-600/30 animate-pulse">
                          ⭐ Most popular
                        </div>
                    )}

                    <div className="h-full rounded-2xl border border-white/40 bg-white/50 backdrop-blur-xl p-10 relative overflow-hidden group hover:shadow-2xl hover:shadow-violet-600/20 hover:-translate-y-2 transition-all duration-500 hover:border-violet-200/60">
                      <div className={cn(
                          "absolute inset-0 bg-gradient-to-br opacity-[0.06] -z-10 transition-opacity duration-500",
                          tier.gradient,
                          "group-hover:opacity-[0.15]"
                      )} />
                      
                      {/* Decorative Corner Element */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-violet-500/10 to-transparent rounded-bl-3xl"></div>

                      <div className="mb-10">
                        <h3 className="text-2xl font-bold">{tier.name}</h3>
                        <div className="mt-5 flex items-baseline">
                    <span className={cn(
                        "text-6xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                        tier.gradient
                    )}>
                      {tier.price}
                    </span>
                          {tier.price !== "£0" && (
                              <span className="ml-2 text-muted-foreground">/month</span>
                          )}
                        </div>
                        <p className="mt-3 text-muted-foreground">{tier.description}</p>
                      </div>

                      <ul className="space-y-5 mb-10">
                        {tier.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-4">
                              <div className={cn(
                                  "rounded-full p-1 bg-gradient-to-r",
                                  feature.included ? tier.gradient : "from-gray-200 to-gray-300"
                              )}>
                                <Check className={cn(
                                    "h-4 w-4",
                                    feature.included ? "text-white" : "text-gray-400"
                                )} />
                              </div>
                              <span className={cn(
                                  "text-sm",
                                  feature.included ? "text-foreground" : "text-muted-foreground/50"
                              )}>
                        {feature.text}
                      </span>
                            </li>
                        ))}
                      </ul>

                      <Link 
                        href='#' 
                        className='inline-flex items-center justify-center text-base font-semibold rounded-xl text-white py-3.5 px-8 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-lg shadow-violet-600/25 hover:shadow-xl hover:shadow-violet-600/40 transition-all duration-300 hover:-translate-y-0.5 w-full'
                      >
                        {tier.buttonText}
                      </Link>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 pt-8 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 dark:from-gray-900 dark:via-pink-900/20 dark:to-gray-800">
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="flex flex-col items-center gap-4 mb-12 mt-2">
                <div className="flex flex-col items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-600/10 to-rose-600/10 border border-pink-600/20 shadow-lg shadow-pink-600/5 backdrop-blur-sm">
              <span className="text-sm font-medium bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                🍽️ For Restaurants
              </span>
                </div>
                <p className="text-base text-gray-600 dark:text-gray-400 hover:text-pink-600 transition-colors duration-300 font-medium" role="text">
                  Fast Food<span aria-hidden="true"> • </span><span className="sr-only">, </span>
                  Full Service<span aria-hidden="true"> • </span><span className="sr-only">, </span>
                  Fast Casual<span aria-hidden="true"> • </span><span className="sr-only">, </span>
                  Cafe & Bakery<span aria-hidden="true"> • </span><span className="sr-only">, </span>
                  Bar<span aria-hidden="true"> • </span><span className="sr-only">, </span>
                  Nightclub
                </p>
              </div>
            </div>

            <div className="flex justify-center md:grid-cols-2 gap-8 lg:gap-4 max-w-4xl mx-auto">
              {tiersRestaurant.map((info) => (
                  <div
                      key={info.name}
                      className={cn(
                          "relative rounded-2xl h-full transition-all duration-500",
                          info.popular && "scale-105 md:-mt-8 z-10"
                      )}
                  >
                    {info.popular && (
                        <div className="absolute -top-12 left-0 right-0 mx-auto w-40 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 px-4 py-2 text-sm text-white text-center font-semibold shadow-xl shadow-pink-600/30 animate-pulse">
                          ⭐ Most popular
                        </div>
                    )}

                    <div className="h-full rounded-2xl border border-white/40 bg-white/50 backdrop-blur-xl p-10 relative overflow-hidden group hover:shadow-2xl hover:shadow-pink-600/20 hover:-translate-y-2 transition-all duration-500 hover:border-pink-200/60">
                      <div className={cn(
                          "absolute inset-0 bg-gradient-to-br opacity-[0.06] -z-10 transition-opacity duration-500",
                          info.gradient,
                          "group-hover:opacity-[0.15]"
                      )} />
                      
                      {/* Decorative Corner Element */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-500/10 to-transparent rounded-bl-3xl"></div>

                      <div className="mb-10">
                        <h3 className="text-2xl font-bold">{info.name}</h3>
                        <div className="mt-5 flex items-baseline">
                    <span className={cn(
                        "text-6xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                        info.gradient
                    )}>
                      {info.price}
                    </span>
                          {info.price !== "£0" && (
                              <span className="ml-2 text-muted-foreground">/month</span>
                          )}
                        </div>
                        <p className="mt-3 text-muted-foreground">{info.description}</p>
                      </div>

                      <ul className="space-y-5 mb-10">
                        {info.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-4">
                              <div className={cn(
                                  "rounded-full p-1 bg-gradient-to-r",
                                  feature.included ? info.gradient : "from-gray-200 to-gray-300"
                              )}>
                                <Check className={cn(
                                    "h-4 w-4",
                                    feature.included ? "text-white" : "text-gray-400"
                                )} />
                              </div>
                              <span className={cn(
                                  "text-sm",
                                  feature.included ? "text-foreground" : "text-muted-foreground/50"
                              )}>
                        {feature.text}
                      </span>
                            </li>
                        ))}
                      </ul>

                      <Link 
                        href='#' 
                        className='inline-flex items-center justify-center text-base font-semibold rounded-xl text-white py-3.5 px-8 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 shadow-lg shadow-pink-600/25 hover:shadow-xl hover:shadow-pink-600/40 transition-all duration-300 hover:-translate-y-0.5 w-full'
                      >
                        {info.buttonText}
                      </Link>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>
      </>
  );
}
