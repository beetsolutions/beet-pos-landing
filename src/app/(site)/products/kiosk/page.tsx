import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import HardwareSlider from "@/components/HardwareSlider";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
    title: "Self-Service Kiosk",
    description: "Empower your customers with BEET POS self-service kiosks. Reduce wait times, increase order accuracy, and boost sales with intuitive ordering technology.",
    openGraph: {
        title: "Self-Service Kiosk - BEET POS",
        description: "Reduce wait times and increase order accuracy with BEET POS self-service kiosks.",
        images: ['/images/hero/kiosk.webp'],
    },
};

// Core Kiosk Features
const kioskFeatures = [
  {
    icon: "⚡",
    iconLabel: "Lightning bolt",
    title: "Speed Up Service",
    description: "Reduce wait times by up to 50% with self-service ordering. Customers order at their own pace while your staff focuses on food prep and quality.",
  },
  {
    icon: "✅",
    iconLabel: "Check mark",
    title: "Eliminate Order Errors",
    description: "Say goodbye to miscommunications. Customers input their own orders with visual menus, ensuring 100% accuracy every time.",
  },
  {
    icon: "📈",
    iconLabel: "Chart increasing",
    title: "Boost Sales",
    description: "Strategic upselling prompts increase average ticket size by 20-30%. Customers explore your full menu without feeling rushed.",
  },
  {
    icon: "👥",
    iconLabel: "People",
    title: "Reduce Labor Costs",
    description: "Free up staff from order-taking tasks. Reallocate resources to food preparation, customer service, and operations.",
  },
  {
    icon: "🎨",
    iconLabel: "Artist palette",
    title: "Customizable Interface",
    description: "Tailor the kiosk experience to match your brand. Custom layouts, colors, imagery, and promotional content.",
  },
  {
    icon: "🔒",
    iconLabel: "Lock",
    title: "Secure Payments",
    description: "Accept all payment types securely: credit/debit cards, mobile wallets, contactless payments, and gift cards.",
  },
];

// Detailed product sections
const detailedFeatures = [
  {
    title: "Intuitive Self-Service Ordering",
    description: "Give customers full control over their ordering experience. Our kiosk interface is designed for speed and ease-of-use, with large touch targets, clear imagery, and logical menu navigation that anyone can master in seconds.",
    image: "/images/hero/kiosk.webp",
    features: [
      "Visual menu with high-quality food photos",
      "Easy customization and modifiers",
      "Multiple language support",
      "Accessibility features for all customers",
      "Quick reorder favorites",
    ],
  },
  {
    title: "Smart Upselling & Promotions",
    description: "Maximize every transaction with intelligent upselling. The kiosk suggests relevant add-ons, combos, and premium options at the perfect moment, increasing average order value without pushy sales tactics.",
    image: "/images/hero/beetpos.png",
    features: [
      "Dynamic product recommendations",
      "Combo and meal deal suggestions",
      "Limited-time offer highlights",
      "Add-on prompts at checkout",
      "Loyalty program integration",
    ],
  },
  {
    title: "Seamless Kitchen Integration",
    description: "Orders flow directly from kiosk to kitchen display system. No paper tickets, no transcription errors. Your kitchen staff sees clear, organized orders with preparation instructions and timing priorities.",
    image: "/images/hero/kitchen-extension.png",
    features: [
      "Real-time order transmission",
      "Kitchen display system integration",
      "Order tracking and status updates",
      "Special request handling",
      "Order priority management",
    ],
  },
  {
    title: "Comprehensive Analytics & Insights",
    description: "Understand customer behavior and optimize your menu. Track popular items, peak ordering times, average order values, and customer preferences to make data-driven decisions that grow your business.",
    image: "/images/hero/hq.webp",
    features: [
      "Real-time sales tracking",
      "Popular item analytics",
      "Peak hour identification",
      "Customer preference insights",
      "Menu performance reports",
    ],
  },
];

// Benefits section
const benefits = [
  {
    title: "Faster Service",
    description: "Dramatically reduce customer wait times and serve more guests during peak hours.",
    stat: "50%",
    statLabel: "Shorter Wait Times",
  },
  {
    title: "Higher Revenue",
    description: "Intelligent upselling and faster throughput translate directly to increased sales.",
    stat: "25%",
    statLabel: "Larger Orders",
  },
  {
    title: "Perfect Accuracy",
    description: "Eliminate order mistakes and miscommunications with customer-driven ordering.",
    stat: "100%",
    statLabel: "Order Accuracy",
  },
  {
    title: "Cost Savings",
    description: "Reduce staffing needs while improving service quality and customer satisfaction.",
    stat: "30%",
    statLabel: "Labor Savings",
  },
];

const ProductsPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className='relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900'>
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-green-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-12 relative z-10">
                    <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8'>
                        <div className='col-span-6'>
                            {/* Badge */}
                            <div className="flex lg:justify-start justify-center mb-6">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-600/20 backdrop-blur-sm">
                                    <span className="text-sm font-medium bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                        <span role="img" aria-label="Computer monitor">🖥️</span> Self-Service Kiosk
                                    </span>
                                </div>
                            </div>
                            
                            <h1 className="text-3xl lg:text-6xl font-bold mb-5 text-black dark:text-white lg:text-start text-center leading-tight">
                                Eliminate Long Lines and{" "}
                                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-extrabold">
                                    Empower Customers
                                </span>
                            </h1>
                            <p className='text-gray-600 dark:text-gray-300 lg:text-xl font-normal mb-10 lg:text-start text-center'>
                                Transform your customer experience with BEET POS self-service kiosks. Reduce wait times by 50%, eliminate order errors, and increase average ticket sizes by 25%. Perfect for quick-service restaurants, cafes, and retail stores.
                            </p>
                            <div className='flex flex-col sm:flex-row gap-4 lg:justify-start justify-center'>
                                <Link href='/request-demo' className='text-xl font-medium rounded-full text-white py-5 px-10 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/40 transition-all duration-300 text-center'>
                                    Get a Demo
                                </Link>
                                <Link href='/pricing' className='flex border border-green-600 justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-green-600 hover:text-white hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 transition-all duration-300'>
                                    See Pricing
                                </Link>
                            </div>
                        </div>
                        <div className='col-span-6 flex justify-center relative'>
                            <Image src="/images/hero/kiosk.webp" alt="BEET POS Self-Service Kiosk" width={1000} height={805} className="w-full h-auto" />
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
                            Why Businesses Choose BEET POS Kiosks
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {kioskFeatures.map((feature, i) => (
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
                            Built for the Modern Customer
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 lg:text-xl max-w-2xl mx-auto">
                            From ordering to payment, BEET POS kiosks deliver a seamless self-service experience that customers love and that drives your business growth.
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
                                        <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-3xl blur-2xl"></div>
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
                                                <div className="rounded-full p-1 bg-gradient-to-r from-green-600 to-emerald-600">
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
            <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                            Proven Results for Your Business
                        </h2>
                        <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
                            Join hundreds of businesses that have transformed their operations and customer experience with BEET POS self-service kiosks.
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
                        Ready to Revolutionize Your Customer Experience?
                    </h2>
                    <p className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        See how BEET POS self-service kiosks can reduce wait times, increase sales, and delight your customers. Get a personalized demo today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/request-demo"
                            className="text-xl font-medium rounded-full text-white py-5 px-10 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/40 transition-all duration-300 hover:-translate-y-1"
                        >
                            Request a Demo
                        </Link>
                        <Link
                            href="/pricing"
                            className="text-xl font-medium rounded-full border-2 border-green-600 text-green-600 dark:text-green-400 py-5 px-10 hover:bg-green-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
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
