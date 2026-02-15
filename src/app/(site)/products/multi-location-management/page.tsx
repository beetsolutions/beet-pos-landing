import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import HardwareSlider from "@/components/HardwareSlider";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
    title: "Multi-Location Management",
    description: "Manage multiple locations from one platform with BEET POS. Centralized reporting, inventory management, and employee oversight across all your business locations.",
    openGraph: {
        title: "Multi-Location Management - BEET POS",
        description: "Manage multiple locations from one platform with centralized reporting and oversight.",
        images: ['/images/hero/hq.webp'],
    },
};

// Core Multi-Location Features
const multiLocationFeatures = [
  {
    icon: "🏢",
    iconLabel: "Office buildings",
    title: "Centralized Dashboard",
    description: "Monitor all your locations from one unified dashboard. Get real-time insights and make informed decisions across your entire business.",
  },
  {
    icon: "📊",
    iconLabel: "Bar chart",
    title: "Consolidated Reporting",
    description: "Access comprehensive reports combining data from all locations. Compare performance, identify trends, and optimize operations.",
  },
  {
    icon: "📦",
    iconLabel: "Package box",
    title: "Unified Inventory Control",
    description: "Manage inventory across all locations with automatic transfers, central purchasing, and real-time stock visibility.",
  },
  {
    icon: "👥",
    iconLabel: "People",
    title: "Enterprise Employee Management",
    description: "Manage staff across multiple locations with centralized scheduling, time tracking, and performance monitoring.",
  },
  {
    icon: "🍽️",
    iconLabel: "Fork and knife",
    title: "Standardized Menus",
    description: "Deploy consistent menus and pricing across locations while allowing local customizations when needed.",
  },
  {
    icon: "☁️",
    iconLabel: "Cloud",
    title: "Remote Configuration",
    description: "Update settings, menus, and promotions remotely. Roll out changes to all locations instantly from anywhere.",
  },
];

// Detailed product sections
const detailedFeatures = [
  {
    title: "Centralized Operations Dashboard",
    description: "Get a bird's eye view of your entire business with our powerful multi-location dashboard. Monitor sales, inventory, and performance metrics across all locations in real-time. Identify top performers, spot issues quickly, and make data-driven decisions.",
    image: "/images/hero/hq.webp",
    features: [
      "Real-time sales tracking across all locations",
      "Location performance comparison and ranking",
      "Consolidated financial reporting",
      "Live inventory status across all stores",
      "Multi-location KPI dashboards",
    ],
  },
  {
    title: "Smart Inventory Management",
    description: "Optimize inventory across your entire operation with intelligent multi-location inventory controls. Transfer stock between locations, set up automatic replenishment, and reduce waste with centralized purchasing and distribution.",
    image: "/images/hero/beetpos.png",
    features: [
      "Inter-location inventory transfers",
      "Centralized purchasing and vendors",
      "Location-specific stock alerts",
      "Consolidated inventory reports",
      "Recipe and ingredient standardization",
    ],
  },
  {
    title: "Enterprise Employee Management",
    description: "Manage your workforce across all locations with ease. Track time and attendance, create schedules, manage permissions, and monitor performance from one central system. Enable staff to work at multiple locations seamlessly.",
    image: "/images/hero/team.jpg",
    features: [
      "Cross-location employee access",
      "Centralized time and attendance tracking",
      "Multi-location scheduling",
      "Role-based permissions by location",
      "Consolidated payroll reporting",
    ],
  },
  {
    title: "Menu and Pricing Control",
    description: "Maintain brand consistency while allowing for local flexibility. Deploy standardized menus across all locations, set location-specific pricing, and manage seasonal items or regional variations with ease.",
    image: "/images/hero/kitchen-extension.png",
    features: [
      "Central menu library and templates",
      "Location-specific customizations",
      "Bulk menu updates across locations",
      "Regional pricing strategies",
      "Promotional campaigns management",
    ],
  },
];

// Benefits section
const benefits = [
  {
    title: "Save Time",
    description: "Reduce administrative overhead by up to 60% with centralized management and automated processes.",
    stat: "60%",
    statLabel: "Less Admin Time",
  },
  {
    title: "Increase Visibility",
    description: "Get complete visibility into all locations with real-time data and comprehensive reporting.",
    stat: "100%",
    statLabel: "Full Visibility",
  },
  {
    title: "Improve Consistency",
    description: "Ensure brand consistency with standardized menus, pricing, and procedures across all locations.",
    stat: "95%",
    statLabel: "Brand Consistency",
  },
  {
    title: "Boost Profitability",
    description: "Identify optimization opportunities and increase profitability through better insights and control.",
    stat: "30%",
    statLabel: "Profit Growth",
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
                                        <span role="img" aria-label="Office buildings">🏢</span> Multi-Location Management
                                    </span>
                                </div>
                            </div>
                            
                            <h1 className="text-3xl lg:text-6xl font-bold mb-5 text-black dark:text-white lg:text-start text-center leading-tight">
                                Manage All Your Locations from{" "}
                                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-extrabold">
                                    One Platform
                                </span>
                            </h1>
                            <p className='text-gray-600 dark:text-gray-300 lg:text-xl font-normal mb-10 lg:text-start text-center'>
                                Take control of your multi-location business with BEET POS. Centralized reporting, unified inventory management, and seamless employee oversight across all your locations. Scale with confidence.
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
                            <Image src="/images/hero/hq.webp" alt="Multi-Location Management Dashboard" width={1000} height={805} className="w-full h-auto rounded-2xl shadow-2xl" />
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
                            Everything You Need to Manage Multiple Locations
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {multiLocationFeatures.map((feature, i) => (
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
                            Built for Enterprise-Level Control
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 lg:text-xl max-w-2xl mx-auto">
                            From centralized operations to location-specific customization, BEET POS gives you complete control over your multi-location business.
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
                            Proven Results for Multi-Location Businesses
                        </h2>
                        <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
                            Join successful restaurant chains and franchises that have streamlined their operations with BEET POS.
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
                        Ready to Scale Your Business?
                    </h2>
                    <p className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        Start managing all your locations from one powerful platform. Get a personalized demo and see how BEET POS can help you grow.
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