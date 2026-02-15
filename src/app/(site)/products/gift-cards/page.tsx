import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import HardwareSlider from "@/components/HardwareSlider";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
    title: "Gift Cards",
    description: "Boost revenue and customer loyalty with BEET POS gift card system. Easy to manage, track gift card balances, and drive new customer acquisition.",
    openGraph: {
        title: "Gift Cards - BEET POS",
        description: "Boost revenue and customer loyalty with integrated gift card management.",
        images: ['/images/hero/beetpos.png'],
    },
};

// Core Gift Card Features
const giftCardFeatures = [
  {
    icon: "💳",
    iconLabel: "Gift card",
    title: "Digital & Physical Cards",
    description: "Offer both digital gift cards sent via email and physical cards customers can purchase in-store.",
  },
  {
    icon: "📱",
    iconLabel: "Mobile phone",
    title: "Mobile-First Experience",
    description: "Customers can purchase, send, and redeem gift cards from any device, making gifting effortless.",
  },
  {
    icon: "💰",
    iconLabel: "Money bag",
    title: "Flexible Denominations",
    description: "Set fixed amounts or let customers choose their own. Offer preset values or custom amounts.",
  },
  {
    icon: "🎨",
    iconLabel: "Artist palette",
    title: "Custom Branding",
    description: "Design gift cards that reflect your brand with custom colors, logos, and messaging.",
  },
  {
    icon: "📊",
    iconLabel: "Bar chart",
    title: "Real-Time Tracking",
    description: "Monitor gift card sales, balances, and redemptions with detailed reporting and analytics.",
  },
  {
    icon: "🔄",
    iconLabel: "Refresh arrows",
    title: "Seamless POS Integration",
    description: "Fully integrated with your BEET POS. Sell and redeem gift cards without switching systems.",
  },
];

// Detailed product sections
const detailedFeatures = [
  {
    title: "Sell More Gift Cards, More Easily",
    description: "Make gift card sales effortless with multiple purchase options. Customers can buy gift cards online, in-store, or via mobile. Digital cards are delivered instantly via email, while physical cards can be beautifully designed to match your brand.",
    image: "/images/hero/gift-card.avif",
    imageAlt: "Gift card purchase interface showing digital and physical card options with customizable designs",
    features: [
      "Online gift card purchases",
      "In-store physical card sales",
      "Instant digital delivery via email",
      "Custom gift card designs",
      "Bulk gift card orders for corporate gifting",
    ],
  },
  {
    title: "Drive New Customer Acquisition",
    description: "Gift cards are powerful marketing tools. Every gift card sold brings new customers through your doors. Recipients spend an average of 38% more than the card value, making gift cards a revenue-driving powerhouse.",
    image: "/images/hero/beetpos.png",
    imageAlt: "BEET POS dashboard showing gift card sales analytics and customer acquisition metrics",
    features: [
      "Turn gift recipients into regular customers",
      "Recipients typically spend above card value",
      "Bring in customers during off-peak times",
      "Great for special occasions and holidays",
      "Promote gift cards during high-traffic periods",
    ],
  },
  {
    title: "Effortless Management & Tracking",
    description: "Manage all gift card operations from one centralized dashboard. Track sales, monitor balances in real-time, handle reloads, and generate detailed reports. Everything you need to run a successful gift card program.",
    image: "/images/hero/hq.webp",
    imageAlt: "Gift card management dashboard displaying real-time balances, sales reports, and tracking features",
    features: [
      "Real-time balance checking",
      "Gift card reload capabilities",
      "Automated low balance alerts",
      "Comprehensive sales reporting",
      "Fraud protection and security features",
    ],
  },
  {
    title: "Boost Revenue Year-Round",
    description: "Gift cards provide consistent revenue throughout the year. They create cash flow upfront and bring customers back repeatedly. Plus, a percentage of gift cards go unredeemed, directly benefiting your bottom line.",
    image: "/images/hero/payments.webp",
    imageAlt: "Payment processing interface showing gift card transactions and revenue analytics",
    features: [
      "Immediate cash flow from card sales",
      "Increased customer lifetime value",
      "Higher average transaction values",
      "Seasonal promotion opportunities",
      "Corporate and bulk order capabilities",
    ],
  },
];

// Benefits section
const benefits = [
  {
    title: "Boost Revenue",
    description: "Gift card recipients spend 38% more on average than the card's face value.",
    stat: "38%",
    statLabel: "More Spending",
  },
  {
    title: "New Customers",
    description: "70% of gift card recipients are first-time customers at your establishment.",
    stat: "70%",
    statLabel: "New Guests",
  },
  {
    title: "Instant Revenue",
    description: "Get paid upfront when cards are purchased, improving cash flow immediately.",
    stat: "100%",
    statLabel: "Upfront Payment",
  },
  {
    title: "Breakage Benefit",
    description: "Industry average of unredeemed gift card value benefits your bottom line.",
    stat: "10-20%",
    statLabel: "Unredeemed",
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
                                        <span role="img" aria-label="Gift">🎁</span>
                                    </span>
                                    <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent ml-2">
                                        Restaurant Gift Cards
                                    </span>
                                </div>
                            </div>
                            
                            <h1 className="text-3xl lg:text-6xl font-bold mb-5 text-black dark:text-white lg:text-start text-center leading-tight">
                                Turn Every Occasion into{" "}
                                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-extrabold">
                                    Revenue
                                </span>
                            </h1>
                            <p className='text-gray-600 dark:text-gray-300 lg:text-xl font-normal mb-10 lg:text-start text-center'>
                                Delight your diners with flexible gift cards for your restaurant, nightclub, or bar. Offer guests a simple way to share their love for your venue with both digital and physical options.
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
                            <Image src="/images/hero/gift-card.avif" alt="Digital and physical gift cards displayed with custom branding and design options" width={1000} height={805} className="w-full h-auto" />
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
                            Everything You Need for Gift Cards
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {giftCardFeatures.map((feature, i) => (
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
                            Built for Gift Card Success
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 lg:text-xl max-w-2xl mx-auto">
                            From purchase to redemption, BEET POS handles every aspect of your gift card program with ease and precision.
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
                                            alt={feature.imageAlt}
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
                            Gift Cards Drive Real Results
                        </h2>
                        <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
                            Join thousands of restaurants using BEET POS gift cards to boost revenue and acquire new customers.
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

            {/* Use Cases Section */}
            <section className='bg-gray-50 dark:bg-gray-800 py-20'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-16">
                        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Perfect For</p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
                            Gift Cards for Every Occasion
                        </h2>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='bg-white dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='text-4xl mb-4'>
                                <span role="img" aria-label="Christmas tree">🎄</span>
                            </div>
                            <h3 className='text-xl font-semibold mb-3 text-black dark:text-white'>Holiday Gifting</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Perfect for Christmas, birthdays, and special occasions. Let customers give the gift of a great dining experience.
                            </p>
                        </div>

                        <div className='bg-white dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='text-4xl mb-4'>
                                <span role="img" aria-label="Office building">🏢</span>
                            </div>
                            <h3 className='text-xl font-semibold mb-3 text-black dark:text-white'>Corporate Gifting</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Ideal for employee rewards, client appreciation, and corporate events. Bulk ordering available.
                            </p>
                        </div>

                        <div className='bg-white dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='text-4xl mb-4'>
                                <span role="img" aria-label="Wedding rings">💍</span>
                            </div>
                            <h3 className='text-xl font-semibold mb-3 text-black dark:text-white'>Weddings & Events</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Great for wedding gifts, party favors, and event giveaways. Custom designs available.
                            </p>
                        </div>

                        <div className='bg-white dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='text-4xl mb-4'>
                                <span role="img" aria-label="Thank you">🙏</span>
                            </div>
                            <h3 className='text-xl font-semibold mb-3 text-black dark:text-white'>Thank You Gifts</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Show appreciation to customers, staff, or partners with gift cards that create memorable experiences.
                            </p>
                        </div>

                        <div className='bg-white dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='text-4xl mb-4'>
                                <span role="img" aria-label="Last minute">⏰</span>
                            </div>
                            <h3 className='text-xl font-semibold mb-3 text-black dark:text-white'>Last-Minute Gifts</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Digital gift cards delivered instantly via email. Perfect for those who wait until the last minute.
                            </p>
                        </div>

                        <div className='bg-white dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='text-4xl mb-4'>
                                <span role="img" aria-label="Promotion">📢</span>
                            </div>
                            <h3 className='text-xl font-semibold mb-3 text-black dark:text-white'>Promotional Campaigns</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Use gift cards in marketing campaigns, contests, and promotions to drive traffic and engagement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hardware Integration Section */}
            <HardwareSlider />

            {/* CTA Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
                        Ready to Launch Your Gift Card Program?
                    </h2>
                    <p className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        Start selling gift cards today and unlock a new revenue stream. Get a personalized demo and see how BEET POS gift cards can transform your business.
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