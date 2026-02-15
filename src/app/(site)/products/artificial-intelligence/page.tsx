import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import HardwareSlider from "@/components/HardwareSlider";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
    title: "Artificial Intelligence",
    description: "Harness the power of AI with BEET POS. Smart insights, predictive analytics, automated recommendations, and intelligent decision-making to optimize your restaurant operations.",
    openGraph: {
        title: "Artificial Intelligence - BEET POS",
        description: "Smart insights and predictive analytics powered by AI to optimize your restaurant operations.",
        images: ['/images/hero/beetpos.png'],
    },
};

// Core AI Features
const aiFeatures = [
  {
    icon: "🧠",
    iconLabel: "Brain",
    title: "Smart Forecasting",
    description: "Predict sales, customer traffic, and inventory needs with AI-powered forecasting algorithms.",
  },
  {
    icon: "📈",
    iconLabel: "Chart increasing",
    title: "Predictive Analytics",
    description: "Get ahead of trends with predictive insights on customer behavior and operational patterns.",
  },
  {
    icon: "🎯",
    iconLabel: "Target",
    title: "Personalized Recommendations",
    description: "AI-driven suggestions for upselling, cross-selling, and menu optimization based on customer preferences.",
  },
  {
    icon: "⚡",
    iconLabel: "Lightning bolt",
    title: "Automated Insights",
    description: "Receive actionable insights automatically, from inventory optimization to staff scheduling.",
  },
  {
    icon: "🔍",
    iconLabel: "Magnifying glass",
    title: "Pattern Recognition",
    description: "Identify hidden patterns in sales data, customer behavior, and operational efficiency.",
  },
  {
    icon: "💡",
    iconLabel: "Light bulb",
    title: "Smart Decision Support",
    description: "Make data-driven decisions with AI-powered recommendations and real-time intelligence.",
  },
];

// Detailed AI capabilities
const detailedFeatures = [
  {
    title: "Intelligent Sales Forecasting",
    description: "Leverage machine learning algorithms to predict future sales with remarkable accuracy. Our AI analyzes historical data, seasonal trends, weather patterns, and local events to help you prepare for busy periods and optimize inventory levels.",
    image: "/images/hero/hq.webp",
    features: [
      "Daily, weekly, and monthly sales predictions",
      "Weather-based demand forecasting",
      "Event and holiday impact analysis",
      "Confidence intervals and accuracy metrics",
      "Automatic model retraining and improvement",
    ],
  },
  {
    title: "Smart Inventory Management",
    description: "Never overstock or run out of key ingredients again. Our AI continuously learns from your sales patterns to suggest optimal inventory levels, predict when items will run out, and automate reordering processes.",
    image: "/images/hero/beetpos.png",
    features: [
      "Automated par level recommendations",
      "Waste reduction through precise forecasting",
      "Supplier lead time optimization",
      "Seasonal adjustment algorithms",
      "Multi-location inventory balancing",
    ],
  },
  {
    title: "Customer Behavior Analytics",
    description: "Understand your customers like never before. AI-powered analytics reveal patterns in customer preferences, identify your most valuable customers, and predict churn before it happens.",
    image: "/images/hero/beetpos.png",
    features: [
      "Customer lifetime value prediction",
      "Churn risk identification",
      "Personalized marketing recommendations",
      "Menu preference analysis",
      "Visit frequency optimization",
    ],
  },
  {
    title: "Menu Optimization Intelligence",
    description: "Maximize profitability with AI-driven menu insights. Discover which items drive the most value, identify optimal pricing strategies, and get recommendations for menu engineering that boosts your bottom line.",
    image: "/images/hero/hq.webp",
    features: [
      "Profitability analysis by menu item",
      "Dynamic pricing recommendations",
      "Bundle and combo suggestions",
      "Seasonal menu optimization",
      "Competitor pricing intelligence",
    ],
  },
];

// Benefits section
const benefits = [
  {
    title: "Reduce Waste",
    description: "AI-powered forecasting helps minimize food waste through precise demand prediction.",
    stat: "30%",
    statLabel: "Less Waste",
  },
  {
    title: "Boost Efficiency",
    description: "Automate routine decisions and free up time for strategic business growth.",
    stat: "45%",
    statLabel: "Time Saved",
  },
  {
    title: "Increase Revenue",
    description: "Smart recommendations and personalization drive more sales and higher average tickets.",
    stat: "20%",
    statLabel: "More Revenue",
  },
  {
    title: "Better Decisions",
    description: "Data-driven insights replace guesswork with confident, informed decision-making.",
    stat: "95%",
    statLabel: "Accuracy",
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
                                        <span role="img" aria-label="Brain">🧠</span> AI-Powered Intelligence
                                    </span>
                                </div>
                            </div>
                            
                            <h1 className="text-3xl lg:text-6xl font-bold mb-5 text-black dark:text-white lg:text-start text-center leading-tight">
                                Smarter Operations with{" "}
                                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-extrabold">
                                    Artificial Intelligence
                                </span>
                            </h1>
                            <p className='text-gray-600 dark:text-gray-300 lg:text-xl font-normal mb-10 lg:text-start text-center'>
                                Transform your restaurant with AI-powered insights that predict trends, optimize operations, and drive profitability. Make smarter decisions with machine learning that continuously adapts to your business.
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
                            <Image src="/images/hero/beetpos.png" alt="BEET POS AI System" width={1000} height={805} className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features Section */}
            <section className="bg-primary/15 py-20">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-14">
                        <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
                            AI Capabilities
                        </p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
                            Intelligence That Drives Results
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {aiFeatures.map((feature, i) => (
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
                            Advanced AI Features
                        </p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-4">
                            AI That Works for Your Business
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 lg:text-xl max-w-2xl mx-auto">
                            From forecasting to optimization, our AI continuously learns and adapts to deliver insights that matter.
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
                            Measurable AI Impact
                        </h2>
                        <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
                            Join forward-thinking restaurants that are leveraging AI to stay ahead of the competition.
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

            {/* How It Works Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-16">
                        <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
                            Simple Implementation
                        </p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-4">
                            How BEET AI Works
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 lg:text-xl max-w-2xl mx-auto">
                            Our AI seamlessly integrates with your existing operations—no disruption, just results.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                1
                            </div>
                            <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                                Connect Your Data
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Our AI automatically connects to your POS data and begins learning from your historical patterns.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                2
                            </div>
                            <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                                AI Learns & Adapts
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Machine learning models analyze your data, identify patterns, and continuously improve predictions.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                3
                            </div>
                            <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                                Get Actionable Insights
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Receive clear, actionable recommendations that help you make better decisions every day.
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
                        Ready to Unlock AI-Powered Intelligence?
                    </h2>
                    <p className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        See how artificial intelligence can transform your restaurant operations. Get a personalized demo today.
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
