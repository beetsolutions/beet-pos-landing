import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import HardwareSlider from "@/components/HardwareSlider";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
    title: "Handheld POS",
    description: "Take orders anywhere with BEET POS handheld devices. Perfect for table-side ordering, outdoor seating, and busy restaurants. Improve service speed and accuracy.",
    openGraph: {
        title: "Handheld POS - BEET POS",
        description: "Take orders anywhere with handheld devices. Perfect for table-side ordering and busy restaurants.",
        images: ['/images/hero/beetpos.png'],
    },
};

// Core Handheld Features
const handheldFeatures = [
  {
    icon: "📱",
    iconLabel: "Mobile phone",
    title: "Take Orders Anywhere",
    description: "Never miss an order. Your staff can take orders directly at the table, in the garden, or anywhere in your venue with portable handheld devices.",
  },
  {
    icon: "⚡",
    iconLabel: "Lightning bolt",
    title: "Lightning-Fast Service",
    description: "Speed up table turns and reduce wait times. Orders go straight to the kitchen the moment they're taken, no running back to a terminal.",
  },
  {
    icon: "💳",
    iconLabel: "Credit card",
    title: "Accept Payments Tableside",
    description: "Process payments right at the table for a seamless checkout experience. Accept cards, contactless, and mobile wallets securely.",
  },
  {
    icon: "🔄",
    iconLabel: "Sync arrows",
    title: "Real-Time Synchronization",
    description: "All devices stay in perfect sync. Menu changes, pricing updates, and inventory levels update instantly across all handhelds.",
  },
  {
    icon: "🎯",
    iconLabel: "Target",
    title: "Reduce Order Errors",
    description: "Minimize mistakes with clear menu displays, easy modifiers, and direct kitchen communication. Orders are always accurate.",
  },
  {
    icon: "🔋",
    iconLabel: "Battery",
    title: "All-Day Battery Life",
    description: "Long-lasting battery keeps your team moving through busy shifts. Hot-swappable batteries mean zero downtime.",
  },
];

// Detailed product sections
const detailedFeatures = [
  {
    title: "Tableside Ordering Made Simple",
    description: "Empower your servers to deliver exceptional service. With BEET POS handheld devices, your staff can focus on customers instead of running back and forth to a terminal. Take orders, split checks, and process payments—all from the palm of their hand.",
    image: "/images/hero/handheld.avif",
    features: [
      "Intuitive touch interface for fast order entry",
      "Visual menu with item photos and descriptions",
      "Easy modifiers and special requests",
      "Split bills by seat or custom amounts",
      "Guest check management",
    ],
  },
  {
    title: "Seamless Kitchen Communication",
    description: "Orders flow instantly from handheld to kitchen display. No paper tickets, no miscommunication. Your kitchen staff sees orders the moment they're taken, complete with timing preferences and special instructions.",
    image: "/images/hero/kitchen-extension.png",
    features: [
      "Direct order routing to kitchen stations",
      "Course fire timing controls",
      "Special instruction notes",
      "Order modification tracking",
      "Real-time order status updates",
    ],
  },
  {
    title: "Flexible Payment Processing",
    description: "Give customers the convenience of paying right at their table. Speed up table turns and improve satisfaction with secure, fast payment processing that supports all major payment methods.",
    image: "/images/hero/payments.webp",
    features: [
      "EMV chip and contactless payments",
      "Apple Pay, Google Pay, Samsung Pay",
      "Split payment between multiple cards",
      "Tip adjustment options",
      "Digital receipt delivery via email or SMS",
    ],
  },
  {
    title: "Built for Busy Restaurants",
    description: "Designed to withstand the demands of high-volume service. Durable, spill-resistant devices that handle drops, bumps, and long shifts. Wireless connectivity ensures your team stays connected throughout your entire venue.",
    image: "/images/hero/hq.webp",
    features: [
      "Rugged, restaurant-grade hardware",
      "Spill and splash resistant design",
      "Drop-tested durability",
      "Extended battery life (12+ hours)",
      "Strong Wi-Fi connectivity",
    ],
  },
];

// Benefits section
const benefits = [
  {
    title: "Faster Service",
    description: "Speed up table turns by taking orders and processing payments without leaving the table.",
    stat: "30%",
    statLabel: "Faster Table Turns",
  },
  {
    title: "Higher Tips",
    description: "Better service and more face time with guests leads to increased tip averages.",
    stat: "20%",
    statLabel: "Tip Increase",
  },
  {
    title: "Perfect Accuracy",
    description: "Direct kitchen communication and clear order displays virtually eliminate errors.",
    stat: "95%",
    statLabel: "Fewer Errors",
  },
  {
    title: "Better Guest Experience",
    description: "Customers love the convenience and speed of tableside service and payment.",
    stat: "98%",
    statLabel: "Guest Satisfaction",
  },
];

const ProductsPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className='relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900'>
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-12 relative z-10">
                    <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8'>
                        <div className='col-span-6'>
                            {/* Badge */}
                            <div className="flex lg:justify-start justify-center mb-6">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-600/10 to-amber-600/10 border border-orange-600/20 backdrop-blur-sm">
                                    <span className="text-sm font-medium bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                                        <span role="img" aria-label="Mobile phone">📱</span> Handheld POS
                                    </span>
                                </div>
                            </div>
                            
                            <h1 className="text-3xl lg:text-6xl font-bold mb-5 text-black dark:text-white lg:text-start text-center leading-tight">
                                The Power of BEET POS,{" "}
                                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent font-extrabold">
                                    Right at Your Fingertips
                                </span>
                            </h1>
                            <p className='text-gray-600 dark:text-gray-300 lg:text-xl font-normal mb-10 lg:text-start text-center'>
                                Keep service flowing, communication clear, and operations running smoothly with a handheld POS built to go wherever your team does. Take orders and payments from anywhere in your restaurant—from the dining room to the garden terrace.
                            </p>
                            <div className='flex flex-col sm:flex-row gap-4 lg:justify-start justify-center'>
                                <Link href='/request-demo' className='text-xl font-medium rounded-full text-white py-5 px-10 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 shadow-lg shadow-orange-600/25 hover:shadow-xl hover:shadow-orange-600/40 transition-all duration-300 text-center'>
                                    Get a Demo
                                </Link>
                                <Link href='/pricing' className='flex border border-orange-600 justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-orange-600 hover:text-white hover:bg-gradient-to-r hover:from-orange-600 hover:to-amber-600 transition-all duration-300'>
                                    See Pricing
                                </Link>
                            </div>
                        </div>
                        <div className='col-span-6 flex justify-center relative'>
                            <Image src="/images/hero/handheld.avif" alt="BEET POS Handheld Device" width={1000} height={805} className="w-full h-auto" />
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
                            Mobility That Transforms Service
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {handheldFeatures.map((feature, i) => (
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
                            Service Without Boundaries
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 lg:text-xl max-w-2xl mx-auto">
                            From order taking to payment processing, BEET POS handhelds give your team the freedom to deliver exceptional service anywhere in your venue.
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
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-amber-600/10 rounded-3xl blur-2xl"></div>
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
                                                <div className="rounded-full p-1 bg-gradient-to-r from-orange-600 to-amber-600">
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
            <section className="py-20 bg-gradient-to-br from-orange-600 to-amber-600 text-white">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                            Real Results for Your Restaurant
                        </h2>
                        <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
                            See how BEET POS handhelds improve service, increase revenue, and delight your guests.
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
                        Ready to Go Mobile?
                    </h2>
                    <p className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        See how BEET POS handheld devices can transform your restaurant service. Get a personalized demo and discover the power of mobility.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/request-demo"
                            className="text-xl font-medium rounded-full text-white py-5 px-10 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 shadow-lg shadow-orange-600/25 hover:shadow-xl hover:shadow-orange-600/40 transition-all duration-300 hover:-translate-y-1"
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