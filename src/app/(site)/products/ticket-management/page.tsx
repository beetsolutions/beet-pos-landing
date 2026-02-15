import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import HardwareSlider from "@/components/HardwareSlider";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
    title: "Ticket Management System",
    description: "Streamline support operations with BEET POS integrated ticket management system. Track issues, manage requests, and deliver exceptional customer service efficiently.",
    openGraph: {
        title: "Ticket Management System - BEET POS",
        description: "Streamline support operations with integrated ticket management. Track issues, manage requests, and deliver exceptional service.",
        images: ['/images/hero/beetpos.png'],
    },
};

// Core Ticket Management Features
const ticketFeatures = [
  {
    icon: "🎫",
    iconLabel: "Ticket",
    title: "Quick Ticket Creation",
    description: "Create and assign tickets instantly from any device. Capture all relevant details to resolve issues faster.",
  },
  {
    icon: "📊",
    iconLabel: "Chart",
    title: "Real-Time Tracking",
    description: "Monitor ticket status in real-time. Know exactly where each issue stands and who's working on it.",
  },
  {
    icon: "⚡",
    iconLabel: "Lightning",
    title: "Automated Workflows",
    description: "Set up automatic routing, escalations, and notifications to ensure no ticket falls through the cracks.",
  },
  {
    icon: "🔔",
    iconLabel: "Bell",
    title: "Smart Notifications",
    description: "Keep your team and customers informed with automated status updates and priority alerts.",
  },
  {
    icon: "📈",
    iconLabel: "Growth chart",
    title: "Performance Analytics",
    description: "Track resolution times, team performance, and customer satisfaction with detailed reporting.",
  },
  {
    icon: "🔗",
    iconLabel: "Link",
    title: "Seamless Integration",
    description: "Works directly with your BEET POS system. Access customer history and order details instantly.",
  },
];

// Detailed product sections
const detailedFeatures = [
  {
    title: "Centralized Issue Management",
    description: "Keep all support requests in one place. From technical issues to customer inquiries, manage everything through a unified interface that connects directly with your POS data.",
    image: "/images/hero/beetpos.png",
    features: [
      "Multi-channel ticket capture (email, phone, in-app)",
      "Custom ticket categories and priorities",
      "Automatic ticket assignment rules",
      "Bulk actions for efficient processing",
      "Customer history and context at a glance",
    ],
  },
  {
    title: "Efficient Team Collaboration",
    description: "Empower your support team with tools for effective collaboration. Share notes, transfer tickets, and work together to resolve issues faster while maintaining complete visibility.",
    image: "/images/hero/hq.webp",
    features: [
      "Internal notes and team communication",
      "Ticket transfer and escalation workflows",
      "Team workload balancing",
      "Knowledge base integration",
      "Activity history and audit trails",
    ],
  },
  {
    title: "Customer Self-Service Portal",
    description: "Reduce ticket volume with a self-service portal where customers can track their requests, search FAQs, and find solutions independently.",
    image: "/images/hero/kitchen-extension.png",
    features: [
      "Customer ticket submission portal",
      "Real-time status tracking for customers",
      "Searchable knowledge base",
      "Automated FAQ suggestions",
      "Multi-language support",
    ],
  },
  {
    title: "Advanced Analytics & Reporting",
    description: "Make data-driven decisions with comprehensive analytics. Understand team performance, identify bottlenecks, and continuously improve your support operations.",
    image: "/images/hero/beetpos.png",
    features: [
      "Resolution time and SLA tracking",
      "Team performance metrics",
      "Customer satisfaction scores",
      "Trend analysis and forecasting",
      "Custom report builder",
    ],
  },
];

// Benefits section
const benefits = [
  {
    title: "Faster Resolution",
    description: "Resolve customer issues 50% faster with streamlined workflows and automated routing.",
    stat: "50%",
    statLabel: "Faster Resolution",
  },
  {
    title: "Higher Satisfaction",
    description: "Keep customers happy with prompt responses and transparent status updates.",
    stat: "95%",
    statLabel: "Satisfaction Rate",
  },
  {
    title: "Reduced Volume",
    description: "Self-service portal reduces ticket volume by 30% with instant answers.",
    stat: "30%",
    statLabel: "Fewer Tickets",
  },
  {
    title: "Better Efficiency",
    description: "Automated workflows and smart routing improve team productivity significantly.",
    stat: "3x",
    statLabel: "More Productive",
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
                                        <span role="img" aria-label="Ticket">🎫</span> Support Ticket Management
                                    </span>
                                </div>
                            </div>
                            
                            <h1 className="text-3xl lg:text-6xl font-bold mb-5 text-black dark:text-white lg:text-start text-center leading-tight">
                                Deliver Exceptional Support with{" "}
                                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-extrabold">
                                    Ticket Management
                                </span>
                            </h1>
                            <p className='text-gray-600 dark:text-gray-300 lg:text-xl font-normal mb-10 lg:text-start text-center'>
                                Transform your support operations with BEET POS's integrated ticket management system. Track issues, collaborate efficiently, and resolve customer requests faster than ever before.
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
                            <Image src="/images/hero/beetpos.png" alt="BEET POS Ticket Management System" width={1000} height={805} className="w-full h-auto" />
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
                            Everything You Need for Support Excellence
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ticketFeatures.map((feature, i) => (
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
                            Built for Modern Support Teams
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 lg:text-xl max-w-2xl mx-auto">
                            From ticket creation to resolution, BEET POS ticket management handles every aspect of your support workflow with precision and efficiency.
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
                            Proven Results for Support Teams
                        </h2>
                        <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
                            Join businesses that have transformed their support operations with BEET POS ticket management system.
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
                        Ready to Transform Your Support?
                    </h2>
                    <p className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        Start delivering exceptional customer support today. Get a personalized demo and see how BEET POS ticket management can revolutionize your operations.
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
