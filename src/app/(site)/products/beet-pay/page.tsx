import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import HardwareSlider from "@/components/HardwareSlider";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
    title: "BEET Pay - Payment Processing",
    description: "Accept all payment types with BEET Pay. Fast, secure payment processing with competitive rates. Support for cards, contactless, mobile payments, and more.",
    openGraph: {
        title: "BEET Pay - Payment Processing - BEET POS",
        description: "Fast, secure payment processing with competitive rates. Accept all payment types.",
        images: ['/images/hero/payments.webp'],
    },
};

// Core Payment Features
const paymentFeatures = [
  {
    icon: "💳",
    iconLabel: "Credit card",
    title: "Accept All Payment Types",
    description: "Credit cards, debit cards, contactless payments, mobile wallets, and more. Accept payments however your customers want to pay.",
  },
  {
    icon: "🔒",
    iconLabel: "Lock",
    title: "Bank-Level Security",
    description: "PCI-compliant payment processing with end-to-end encryption. Your customers' data is always protected.",
  },
  {
    icon: "⚡",
    iconLabel: "Lightning bolt",
    title: "Lightning-Fast Processing",
    description: "Process transactions in seconds with our optimized payment gateway. No waiting, no delays.",
  },
  {
    icon: "💰",
    iconLabel: "Money bag",
    title: "Competitive Rates",
    description: "Transparent pricing with no hidden fees. Get the best rates for your business with flexible processing options.",
  },
  {
    icon: "📱",
    iconLabel: "Mobile phone",
    title: "Mobile Payments",
    description: "Accept Apple Pay, Google Pay, Samsung Pay, and other digital wallets. Tap-to-pay for faster checkout.",
  },
  {
    icon: "🔄",
    iconLabel: "Refresh arrows",
    title: "Seamless Integration",
    description: "Fully integrated with BEET POS. No separate terminals or complicated setups. Everything works together.",
  },
];

// Detailed product sections
const detailedFeatures = [
  {
    title: "Complete Payment Processing Solution",
    description: "BEET Pay provides everything you need to accept payments confidently. From credit and debit cards to contactless and mobile payments, we've got you covered. Process transactions securely and efficiently with our fully integrated payment system.",
    image: "/images/hero/payments.webp",
    features: [
      "All major credit and debit cards accepted",
      "Contactless and NFC payments (Apple Pay, Google Pay)",
      "EMV chip card support",
      "Magnetic stripe fallback",
      "Gift cards and store credit",
    ],
  },
  {
    title: "Enterprise-Grade Security",
    description: "Protect your business and your customers with advanced security features. BEET Pay is fully PCI-DSS compliant with end-to-end encryption, tokenization, and fraud prevention built-in. Sleep easy knowing every transaction is secure.",
    image: "/images/hero/beetpos.png",
    features: [
      "PCI-DSS Level 1 certified",
      "Point-to-point encryption (P2PE)",
      "Tokenization for card-on-file",
      "Real-time fraud detection",
      "Secure customer data vault",
    ],
  },
  {
    title: "Smart Payment Features",
    description: "Go beyond basic payment processing. Split checks, save cards on file, process refunds instantly, and handle tips with ease. BEET Pay includes all the features modern restaurants need.",
    image: "/images/hero/handheld.avif",
    features: [
      "Split payments across multiple cards",
      "Tip adjustment and suggestions",
      "Instant refunds and voids",
      "Card-on-file for regulars",
      "Pre-authorization for tabs",
    ],
  },
  {
    title: "Fast Deposits & Transparent Reporting",
    description: "Get paid faster with next-day deposits. Track every transaction with detailed reporting and reconciliation tools. Always know where your money is and when it's coming.",
    image: "/images/hero/hq.webp",
    features: [
      "Next-day deposits to your bank",
      "Real-time transaction monitoring",
      "Detailed batch reports",
      "Easy reconciliation tools",
      "Export to accounting software",
    ],
  },
];

// Benefits section
const benefits = [
  {
    title: "Fast Processing",
    description: "Process payments in under 3 seconds for faster table turns and happier customers.",
    stat: "<3s",
    statLabel: "Average Transaction",
  },
  {
    title: "Higher Approval Rates",
    description: "Industry-leading approval rates mean more successful transactions and less lost revenue.",
    stat: "99.8%",
    statLabel: "Approval Rate",
  },
  {
    title: "Secure Payments",
    description: "PCI-compliant with end-to-end encryption protecting every transaction.",
    stat: "100%",
    statLabel: "Encrypted",
  },
  {
    title: "Quick Deposits",
    description: "Get your money fast with next-day deposits directly to your bank account.",
    stat: "1 Day",
    statLabel: "Fund Deposit",
  },
];

const ProductsPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className='relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900'>
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-green-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-12 relative z-10">
                    <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8'>
                        <div className='col-span-6'>
                            {/* Badge */}
                            <div className="flex lg:justify-start justify-center mb-6">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-600/20 backdrop-blur-sm">
                                    <span className="text-sm font-medium bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                        <span role="img" aria-label="Credit card">💳</span> Payment Processing
                                    </span>
                                </div>
                            </div>
                            
                            <h1 className="text-3xl lg:text-6xl font-bold mb-5 text-black dark:text-white lg:text-start text-center leading-tight">
                                Payments Made Smarter with{" "}
                                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent font-extrabold">
                                    BEET Pay
                                </span>
                            </h1>
                            <p className='text-gray-600 dark:text-gray-300 lg:text-xl font-normal mb-10 lg:text-start text-center'>
                                Accept all payment types with confidence. BEET Pay offers fast, secure payment processing with competitive rates, fully integrated into your POS system. No matter how or where you sell, we make accepting payments simple.
                            </p>
                            <div className='flex flex-col sm:flex-row gap-4 lg:justify-start justify-center'>
                                <Link href='/request-demo' className='text-xl font-medium rounded-full text-white py-5 px-10 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/40 transition-all duration-300 text-center'>
                                    Get a Demo
                                </Link>
                                <Link href='/pricing' className='flex border border-green-600 justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-green-600 hover:text-white hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 transition-all duration-300'>
                                    See Pricing
                                </Link>
                            </div>
                        </div>
                        <div className='col-span-6 flex justify-center relative'>
                            <Image src="/images/hero/payments.webp" alt="BEET Pay Payment Processing" width={1000} height={805} className="w-full h-auto" />
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
                            Everything You Need for Payment Processing
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {paymentFeatures.map((feature, i) => (
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
                            Built for Modern Payment Processing
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 lg:text-xl max-w-2xl mx-auto">
                            From accepting payments to securing transactions, BEET Pay handles every aspect of payment processing with precision and ease.
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
                                        <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-blue-600/10 rounded-3xl blur-2xl"></div>
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
                                                <div className="rounded-full p-1 bg-gradient-to-r from-green-600 to-blue-600">
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
            <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                            Reliable Performance You Can Count On
                        </h2>
                        <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
                            Join thousands of businesses that trust BEET Pay for their payment processing needs.
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
                        Ready to Simplify Payment Processing?
                    </h2>
                    <p className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        Start accepting payments with confidence. Get a personalized demo and see how BEET Pay can transform your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/request-demo"
                            className="text-xl font-medium rounded-full text-white py-5 px-10 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/40 transition-all duration-300 hover:-translate-y-1"
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