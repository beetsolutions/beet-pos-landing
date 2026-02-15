import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import HardwareSlider from "@/components/HardwareSlider";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
    title: "Point of Sale",
    description: "Revolutionize your restaurant with BEET POS. Our modern point of sale system streamlines operations, enhances customer experience, and improves your bottom line.",
    openGraph: {
        title: "Point of Sale - BEET POS",
        description: "Modern point of sale system designed to streamline your restaurant operations and enhance customer experience.",
        images: ['/images/hero/beetpos.png'],
    },
};

// Core POS Features
const posFeatures = [
  {
    icon: "🍽️",
    iconLabel: "Plate and utensils",
    title: "Fast Order Processing",
    description: "Lightning-fast order entry with intuitive menu layouts. Take orders in seconds, not minutes.",
  },
  {
    icon: "💳",
    iconLabel: "Credit card",
    title: "Flexible Payments",
    description: "Accept all payment types: cash, credit, debit, mobile wallets, and contactless payments.",
  },
  {
    icon: "👨‍💼",
    iconLabel: "Business person",
    title: "Employee Management",
    description: "Track time, manage schedules, control permissions, and monitor performance effortlessly.",
  },
  {
    icon: "📊",
    iconLabel: "Bar chart",
    title: "Real-Time Analytics",
    description: "Get instant insights into sales, inventory, and customer trends with live reporting.",
  },
  {
    icon: "🔄",
    iconLabel: "Refresh arrows",
    title: "Inventory Control",
    description: "Automatic inventory tracking with low-stock alerts and smart reordering capabilities.",
  },
  {
    icon: "☁️",
    iconLabel: "Cloud",
    title: "Cloud-Based",
    description: "Access your data from anywhere, anytime. Automatic backups ensure you never lose data.",
  },
];

// Detailed product sections
const detailedFeatures = [
  {
    title: "Streamlined Order Management",
    description: "Process orders faster with our intuitive interface. Customize menu items, apply discounts, split bills, and manage tables with ease. Perfect for both quick-service and full-service restaurants.",
    image: "/images/hero/beetpos.png",
    features: [
      "Customizable menu layouts",
      "Quick modifiers and special requests",
      "Split bills and partial payments",
      "Table management and floor plans",
      "Course timing controls",
    ],
  },
  {
    title: "Kitchen Display Integration",
    description: "Seamlessly connect front-of-house with back-of-house operations. Orders flow directly to the kitchen, reducing errors and improving efficiency.",
    image: "/images/hero/kitchen-extension.png",
    features: [
      "Real-time order routing",
      "Color-coded priority system",
      "Preparation time tracking",
      "Bump bar compatible",
      "Order modification alerts",
    ],
  },
  {
    title: "Advanced Reporting & Analytics",
    description: "Make data-driven decisions with comprehensive reports. Track sales trends, identify top performers, and optimize your operations with actionable insights.",
    image: "/images/hero/hq.webp",
    features: [
      "Sales reports by hour, day, week, or month",
      "Product performance analytics",
      "Employee productivity tracking",
      "Customer behavior insights",
      "Export data to Excel or PDF",
    ],
  },
  {
    title: "Multi-Location Management",
    description: "Managing multiple locations? Control everything from one centralized dashboard. Monitor performance, standardize menus, and ensure consistency across all your locations.",
    image: "/images/hero/beetpos.png",
    features: [
      "Centralized dashboard for all locations",
      "Standardized menus and pricing",
      "Cross-location reporting",
      "Remote configuration updates",
      "Consolidated inventory management",
    ],
  },
];

// Benefits section
const benefits = [
  {
    title: "Boost Efficiency",
    description: "Reduce order times by up to 40% with streamlined workflows and intuitive interfaces.",
    stat: "40%",
    statLabel: "Faster Service",
  },
  {
    title: "Increase Revenue",
    description: "Upsell more effectively with suggestive selling features and detailed menu descriptions.",
    stat: "25%",
    statLabel: "More Sales",
  },
  {
    title: "Reduce Errors",
    description: "Minimize mistakes with direct kitchen communication and clear order displays.",
    stat: "90%",
    statLabel: "Fewer Errors",
  },
  {
    title: "Save Money",
    description: "Cut costs with better inventory control, reduced waste, and optimized staffing.",
    stat: "$15K",
    statLabel: "Annual Savings",
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
                                        <span role="img" aria-label="Plate and utensils">🍽️</span> Restaurant Point of Sale
                                    </span>
                                </div>
                            </div>
                            
                            <h1 className="text-3xl lg:text-6xl font-bold mb-5 text-black dark:text-white lg:text-start text-center leading-tight">
                                Revolutionize Your Restaurant with{" "}
                                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-extrabold">
                                    BEET POS
                                </span>
                            </h1>
                            <p className='text-gray-600 dark:text-gray-300 lg:text-xl font-normal mb-10 lg:text-start text-center'>
                                Managing your restaurant should be as enjoyable as dining in it. Whether you have one location or ten, our Restaurant Point of Sale is designed to streamline your operations, enhance your customer experience, and ultimately benefit your bottom line.
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
                            <Image src="/images/hero/beetpos.png" alt="BEET POS System" width={1000} height={805} className="w-full h-auto" />
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
                            Everything You Need to Run Your Restaurant
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posFeatures.map((feature, i) => (
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
                            Built for Modern Restaurants
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 lg:text-xl max-w-2xl mx-auto">
                            From order taking to analytics, BEET POS handles every aspect of your restaurant operations with precision and ease.
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
                            Measurable Results for Your Business
                        </h2>
                        <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
                            Join thousands of restaurants that have transformed their operations with BEET POS.
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
                        Ready to Transform Your Restaurant?
                    </h2>
                    <p className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        Start your journey with BEET POS today. Get a personalized demo and see how we can help your business thrive.
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