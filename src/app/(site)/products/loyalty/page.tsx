import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import HardwareSlider from "@/components/HardwareSlider";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
    title: "Loyalty & Rewards Program",
    description: "Build customer loyalty with BEET POS integrated rewards program. Increase repeat visits, track customer preferences, and drive more revenue with powerful loyalty features.",
    openGraph: {
        title: "Loyalty & Rewards Program - BEET POS",
        description: "Build customer loyalty and increase repeat visits with integrated rewards programs.",
        images: ['/images/hero/beetpos.png'],
    },
};

// Core Loyalty Features
const loyaltyFeatures = [
  {
    icon: "🎁",
    iconLabel: "Gift",
    title: "Customizable Rewards",
    description: "Create flexible reward programs tailored to your business. Offer points, discounts, free items, or special perks.",
  },
  {
    icon: "📱",
    iconLabel: "Mobile phone",
    title: "Mobile Integration",
    description: "Customers can easily join and track rewards via mobile app or SMS. No cards needed.",
  },
  {
    icon: "🔄",
    iconLabel: "Refresh",
    title: "Automatic Tracking",
    description: "Seamlessly integrated with your POS. Points are automatically applied at checkout.",
  },
  {
    icon: "📊",
    iconLabel: "Chart",
    title: "Customer Insights",
    description: "Track customer behavior, preferences, and spending patterns to optimize your program.",
  },
  {
    icon: "💌",
    iconLabel: "Love letter",
    title: "Targeted Marketing",
    description: "Send personalized offers and promotions based on customer preferences and purchase history.",
  },
  {
    icon: "⚡",
    iconLabel: "Lightning",
    title: "Instant Redemption",
    description: "Customers can redeem rewards immediately at checkout. No delays or complicated processes.",
  },
];

// Detailed product sections
const detailedFeatures = [
  {
    title: "Drive Repeat Business with Rewards",
    description: "Create a loyalty program that keeps customers coming back. Reward frequent visits, higher spending, or specific behaviors with points, discounts, or exclusive perks. Your program, your rules.",
    image: "/images/hero/beetpos.png",
    features: [
      "Points-based or visit-based rewards",
      "Tiered membership levels",
      "Birthday and anniversary rewards",
      "Referral bonuses",
      "Exclusive VIP perks",
    ],
  },
  {
    title: "Effortless Customer Engagement",
    description: "Keep your customers engaged with automated marketing. Send targeted promotions, special offers, and personalized messages based on their preferences and behavior.",
    image: "/images/hero/hq.webp",
    features: [
      "Automated email and SMS campaigns",
      "Personalized offers based on purchase history",
      "Win-back campaigns for inactive customers",
      "New customer welcome series",
      "Seasonal and event-based promotions",
    ],
  },
  {
    title: "Seamless POS Integration",
    description: "Your loyalty program works directly with your BEET POS system. No separate devices or complicated workflows. Everything happens automatically at the point of sale.",
    image: "/images/hero/kitchen-extension.png",
    features: [
      "Automatic points calculation and redemption",
      "Real-time balance updates",
      "Quick customer lookup by phone or email",
      "Instant reward application at checkout",
      "Integrated with all payment methods",
    ],
  },
  {
    title: "Data-Driven Decision Making",
    description: "Get detailed insights into your loyalty program performance. Understand what drives customer behavior and optimize your rewards strategy for maximum ROI.",
    image: "/images/hero/beetpos.png",
    features: [
      "Member enrollment and retention metrics",
      "Reward redemption tracking",
      "Customer lifetime value analysis",
      "Program ROI calculations",
      "Popular rewards and items reporting",
    ],
  },
];

// Benefits section
const benefits = [
  {
    title: "Increase Visits",
    description: "Loyalty members visit 2-3x more frequently than non-members.",
    stat: "3x",
    statLabel: "More Visits",
  },
  {
    title: "Higher Spending",
    description: "Loyalty program members spend 20-30% more per visit on average.",
    stat: "25%",
    statLabel: "More Revenue",
  },
  {
    title: "Better Retention",
    description: "Keep customers coming back with rewards they actually want.",
    stat: "80%",
    statLabel: "Retention Rate",
  },
  {
    title: "Lower Acquisition Costs",
    description: "Retain existing customers at a fraction of the cost of acquiring new ones.",
    stat: "5x",
    statLabel: "Cost Savings",
  },
];

const ProductsPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className='relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900'>
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-12 relative z-10">
                    <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8'>
                        <div className='col-span-6'>
                            {/* Badge */}
                            <div className="flex lg:justify-start justify-center mb-6">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-600/20 backdrop-blur-sm">
                                    <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                        <span role="img" aria-label="Gift">🎁</span> Customer Loyalty & Rewards
                                    </span>
                                </div>
                            </div>
                            
                            <h1 className="text-3xl lg:text-6xl font-bold mb-5 text-black dark:text-white lg:text-start text-center leading-tight">
                                Build Lasting Relationships with{" "}
                                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-extrabold">
                                    Loyalty Rewards
                                </span>
                            </h1>
                            <p className='text-gray-600 dark:text-gray-300 lg:text-xl font-normal mb-10 lg:text-start text-center'>
                                Keep guests coming back with BEET POS's integrated, customizable loyalty program. Reward regulars, retain valuable customers, and encourage repeat visits through a seamless, connected experience built right into your POS.
                            </p>
                            <div className='flex flex-col sm:flex-row gap-4 lg:justify-start justify-center'>
                                <Link href='/request-demo' className='text-xl font-medium rounded-full text-white py-5 px-10 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-600/25 hover:shadow-xl hover:shadow-purple-600/40 transition-all duration-300 text-center'>
                                    Get a Demo
                                </Link>
                                <Link href='/pricing' className='flex border border-purple-600 justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300'>
                                    See Pricing
                                </Link>
                            </div>
                        </div>
                        <div className='col-span-6 flex justify-center relative'>
                            <Image src="/images/hero/beetpos.png" alt="BEET POS Loyalty System" width={1000} height={805} className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features Section */}
            <section className="bg-primary/15 py-20">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-14">
                        <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
                            Core Features
                        </p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
                            Everything You Need for Customer Loyalty
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {loyaltyFeatures.map((feature, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-3xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="text-4xl mb-4">
                                    <span role="img" aria-label={feature.iconLabel}>
                                        {feature.icon}
                                    </span>
                                </div>
                                <h3 className="text-xl text-black dark:text-white font-semibold mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-base font-normal text-black/50 dark:text-white/50">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Features Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-16">
                        <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
                            Powerful Capabilities
                        </p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-4">
                            Built for Customer Retention
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 lg:text-xl max-w-2xl mx-auto">
                            From enrollment to redemption, BEET POS loyalty handles every aspect of your rewards program with ease and precision.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {detailedFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                            >
                                <div className={cn("col-span-6", index % 2 === 1 && "lg:order-2")}>
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-3xl blur-2xl"></div>
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            width={600}
                                            height={400}
                                            className="relative w-full h-auto rounded-3xl shadow-xl"
                                        />
                                    </div>
                                </div>
                                <div className={cn("col-span-6", index % 2 === 1 && "lg:order-1")}>
                                    <h3 className="text-2xl lg:text-4xl font-bold text-black dark:text-white mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                                        {feature.description}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {feature.features.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <div className="rounded-full p-1 bg-gradient-to-r from-purple-600 to-blue-600">
                                                    <Check className="h-4 w-4 text-white" />
                                                </div>
                                                <span className="text-base text-gray-700 dark:text-gray-300">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                            Proven Results for Your Business
                        </h2>
                        <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
                            Join thousands of restaurants that have transformed customer retention with BEET POS loyalty programs.
                        </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="text-center">
                                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300">
                                    <div className="text-5xl lg:text-6xl font-bold mb-2">
                                        {benefit.stat}
                                    </div>
                                    <div className="text-lg mb-4 opacity-90">
                                        {benefit.statLabel}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm opacity-80">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hardware Integration Section */}
            <HardwareSlider />

            {/* CTA Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
                        Ready to Build Customer Loyalty?
                    </h2>
                    <p className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        Start rewarding your customers today. Get a personalized demo and see how BEET POS loyalty can transform your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/request-demo"
                            className="text-xl font-medium rounded-full text-white py-5 px-10 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-600/25 hover:shadow-xl hover:shadow-purple-600/40 transition-all duration-300 hover:-translate-y-1"
                        >
                            Request a Demo
                        </Link>
                        <Link
                            href="/pricing"
                            className="text-xl font-medium rounded-full border-2 border-purple-600 text-purple-600 dark:text-purple-400 py-5 px-10 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                        >
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ />
        </>
    );
};

export default ProductsPage;
