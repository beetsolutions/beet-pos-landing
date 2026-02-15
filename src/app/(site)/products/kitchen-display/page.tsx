import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import HardwareSlider from "@/components/HardwareSlider";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
    title: "Kitchen Display System",
    description: "Streamline your kitchen operations with BEET POS Kitchen Display System. Real-time order management, reduce errors, improve communication, and speed up service.",
    openGraph: {
        title: "Kitchen Display System - BEET POS",
        description: "Streamline kitchen operations with real-time order management and improved communication.",
        images: ['/images/hero/kitchen-extension.png'],
    },
};

// Core KDS Features
const kdsFeatures = [
  {
    icon: "📱",
    iconLabel: "Kitchen screen",
    title: "Real-Time Order Display",
    description: "Orders appear instantly on kitchen screens as they're placed. No delays, no paper tickets, no confusion.",
  },
  {
    icon: "🎨",
    iconLabel: "Artist palette",
    title: "Color-Coded Priority",
    description: "Visual alerts show order urgency with color changes. Never miss a time-sensitive order again.",
  },
  {
    icon: "⏱️",
    iconLabel: "Timer",
    title: "Prep Time Tracking",
    description: "Track preparation times for every item. Optimize kitchen workflow and identify bottlenecks.",
  },
  {
    icon: "✅",
    iconLabel: "Check mark",
    title: "Order Accuracy",
    description: "Eliminate handwriting errors and miscommunication. Clear, digital orders every time.",
  },
  {
    icon: "🔄",
    iconLabel: "Refresh arrows",
    title: "Order Modifications",
    description: "Instant alerts for order changes or special requests. Keep your kitchen informed in real-time.",
  },
  {
    icon: "📊",
    iconLabel: "Bar chart",
    title: "Kitchen Analytics",
    description: "Track ticket times, item performance, and kitchen efficiency with detailed reports.",
  },
];

// Detailed product sections
const detailedFeatures = [
  {
    title: "Streamlined Kitchen Workflow",
    description: "Transform your kitchen operations with intelligent order routing. Orders are automatically sent to the right station - grill, fryer, prep, or expo - ensuring your team works efficiently without confusion or delays.",
    image: "/images/hero/kitchen-extension.png",
    features: [
      "Multi-station order routing",
      "Course timing and sequencing",
      "Bump bar integration",
      "Order modification alerts",
      "Special instruction highlighting",
    ],
  },
  {
    title: "Visual Priority Management",
    description: "Never lose track of order urgency. Our color-coded system automatically changes order tiles from green to yellow to red based on elapsed time, helping your kitchen prioritize effectively during rush hours.",
    image: "/images/hero/display.webp",
    features: [
      "Automatic color transitions",
      "Configurable time thresholds",
      "Order age indicators",
      "Rush order highlighting",
      "Delivery time targets",
    ],
  },
  {
    title: "Seamless POS Integration",
    description: "Perfect synchronization with your BEET POS system. Orders flow from server tablets, kiosks, and online ordering directly to your kitchen displays without any manual entry or paper tickets.",
    image: "/images/hero/beetpos.png",
    features: [
      "Instant order transmission",
      "Table and order number display",
      "Server identification",
      "Multiple POS integration",
      "Online order integration",
    ],
  },
  {
    title: "Performance Analytics & Insights",
    description: "Make data-driven decisions to improve kitchen efficiency. Track average ticket times, identify slow-moving items, monitor station performance, and optimize your menu based on real kitchen metrics.",
    image: "/images/hero/hq.webp",
    features: [
      "Average prep time tracking",
      "Station performance metrics",
      "Peak hour analysis",
      "Item efficiency reports",
      "Historical trend data",
    ],
  },
];

// Benefits section
const benefits = [
  {
    title: "Faster Service",
    description: "Reduce average ticket times with streamlined communication between front and back of house.",
    stat: "35%",
    statLabel: "Faster Prep",
  },
  {
    title: "Fewer Errors",
    description: "Eliminate miscommunication and order mistakes with clear digital displays.",
    stat: "95%",
    statLabel: "Order Accuracy",
  },
  {
    title: "Higher Efficiency",
    description: "Optimize kitchen flow and handle more orders during peak hours without adding staff.",
    stat: "40%",
    statLabel: "More Orders",
  },
  {
    title: "Better Communication",
    description: "Keep your entire kitchen team synchronized with instant updates and modifications.",
    stat: "100%",
    statLabel: "Transparency",
  },
];

const ProductsPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className='relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900'>
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-12 relative z-10">
                    <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8'>
                        <div className='col-span-6'>
                            {/* Badge */}
                            <div className="flex lg:justify-start justify-center mb-6">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-600/10 to-red-600/10 border border-orange-600/20 backdrop-blur-sm">
                                    <span role="img" aria-label="Chef hat">👨‍🍳</span>
                                    <span className="text-sm font-medium bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent ml-2">
                                        Kitchen Display System
                                    </span>
                                </div>
                            </div>
                            
                            <h1 className="text-3xl lg:text-6xl font-bold mb-5 text-black dark:text-white lg:text-start text-center leading-tight">
                                Eliminate Paper Tickets and{" "}
                                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-extrabold">
                                    Transform Your Kitchen
                                </span>
                            </h1>
                            <p className='text-gray-600 dark:text-gray-300 lg:text-xl font-normal mb-10 lg:text-start text-center'>
                                Running a busy kitchen shouldn't mean chaos. BEET POS Kitchen Display System brings clarity to your back-of-house operations with real-time order visibility, intelligent routing, and instant communication that keeps your team synchronized and efficient.
                            </p>
                            <div className='flex flex-col sm:flex-row gap-4 lg:justify-start justify-center'>
                                <Link href='/request-demo' className='text-xl font-medium rounded-full text-white py-5 px-10 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 shadow-lg shadow-orange-600/25 hover:shadow-xl hover:shadow-orange-600/40 transition-all duration-300 text-center'>
                                    Get a Demo
                                </Link>
                                <Link href='/pricing' className='flex border border-orange-600 justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-orange-600 hover:text-white hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 transition-all duration-300'>
                                    See Pricing
                                </Link>
                            </div>
                        </div>
                        <div className='col-span-6 flex justify-center relative'>
                            <Image src="/images/hero/kitchen-extension.png" alt="BEET POS Kitchen Display System" width={1000} height={805} className="w-full h-auto" />
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
                            Everything Your Kitchen Needs to Excel
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {kdsFeatures.map((feature, i) => (
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
                            Built for High-Volume Kitchens
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 lg:text-xl max-w-2xl mx-auto">
                            From order entry to completion, BEET KDS orchestrates every step of your kitchen workflow with precision and reliability.
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
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-red-600/10 rounded-3xl blur-2xl"></div>
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
                                                <div className="rounded-full p-1 bg-gradient-to-r from-orange-600 to-red-600">
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
            <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                            Measurable Impact on Kitchen Performance
                        </h2>
                        <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
                            Thousands of kitchens rely on BEET KDS to serve more customers faster with fewer mistakes.
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
                        Ready to Modernize Your Kitchen?
                    </h2>
                    <p className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        See BEET KDS in action. Get a personalized demo and discover how we can transform your kitchen operations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/request-demo"
                            className="text-xl font-medium rounded-full text-white py-5 px-10 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 shadow-lg shadow-orange-600/25 hover:shadow-xl hover:shadow-orange-600/40 transition-all duration-300 hover:-translate-y-1"
                        >
                            Request a Demo
                        </Link>
                        <Link
                            href="/pricing"
                            className="text-xl font-medium rounded-full border-2 border-orange-600 text-orange-600 dark:text-orange-400 py-5 px-10 hover:bg-orange-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
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
