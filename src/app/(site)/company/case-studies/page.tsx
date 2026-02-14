import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Newsletter from "@/components/Home/Newsletter";

export const metadata: Metadata = {
    title: "Case Studies",
    description: "Read real success stories from businesses using BEET POS. Discover how restaurants, bars, and retail stores have transformed their operations and increased profitability.",
    openGraph: {
        title: "Case Studies - BEET POS",
        description: "Real success stories from businesses using BEET POS to transform their operations.",
        images: ['/images/hero/hq.webp'],
    },
    title: "Case Studies - Success Stories",
};

const CaseStudiesPage = () => {
    const caseStudies = [
        {
            id: "family-diner",
            title: "Family Diner Increases Revenue by 45%",
            industry: "Restaurant",
            image: "/images/cook/cook.jpg",
            challenge: "A local family diner struggled with slow order processing during peak hours, leading to long wait times and frustrated customers.",
            solution: "Implemented BEET POS with kitchen display system and mobile ordering integration, streamlining operations across front and back of house.",
            results: [
                "45% increase in revenue",
                "60% faster order processing",
                "Customer satisfaction up 35%"
            ],
            clientName: "Joe's Family Diner"
        },
        {
            id: "bakery-chain",
            title: "Bakery Chain Scales to 15 Locations",
            industry: "Bakery",
            image: "/images/hero/bakery.webp",
            challenge: "A growing bakery chain needed a unified system to manage inventory, sales, and customer data across multiple locations.",
            solution: "Deployed BEET POS cloud-based solution with centralized reporting and real-time inventory tracking across all locations.",
            results: [
                "Expanded from 5 to 15 locations",
                "30% reduction in inventory waste",
                "Unified customer loyalty program"
            ],
            clientName: "Sweet Treats Bakery"
        },
        {
            id: "coffee-cafe",
            title: "Cafe Reduces Costs with Smart Inventory",
            industry: "Coffee Shop",
            image: "/images/hero/display.webp",
            challenge: "A busy coffee shop was experiencing significant product waste and difficulty tracking ingredient usage across menu items.",
            solution: "Integrated BEET POS inventory management with recipe costing and automated reorder alerts for optimal stock levels.",
            results: [
                "25% reduction in food costs",
                "50% decrease in waste",
                "Improved profit margins by 18%"
            ],
            clientName: "Daily Grind Cafe"
        },
        {
            id: "fast-casual",
            title: "Fast Casual Restaurant Streamlines Operations",
            industry: "Fast Casual",
            image: "/images/hero/kiosks.webp",
            challenge: "High-volume fast casual restaurant needed to reduce order errors and speed up service during lunch rush.",
            solution: "Installed BEET POS with self-service kiosks and integrated kitchen display system for accurate, efficient order fulfillment.",
            results: [
                "Order accuracy improved to 99%",
                "40% increase in lunch hour orders",
                "Staff reassigned to customer service"
            ],
            clientName: "Fresh Fusion Grill"
        },
        {
            id: "food-truck",
            title: "Food Truck Fleet Optimizes Mobile Operations",
            industry: "Food Truck",
            image: "/images/hero/payments.webp",
            challenge: "A food truck operation needed a portable POS solution that worked offline and synced data when connected.",
            solution: "Implemented BEET POS mobile solution with offline mode, contactless payments, and GPS-based reporting.",
            results: [
                "100% uptime even without internet",
                "35% faster transaction times",
                "Real-time sales tracking per location"
            ],
            clientName: "Urban Eats Food Trucks"
        },
        {
            id: "pizzeria",
            title: "Pizzeria Boosts Online Orders by 200%",
            industry: "Pizza",
            image: "/images/hero/banner-image.jpg",
            challenge: "A traditional pizzeria wanted to expand their online ordering capabilities without compromising kitchen efficiency.",
            solution: "Integrated BEET POS with online ordering platform and delivery management, creating seamless order flow from web to kitchen.",
            results: [
                "200% increase in online orders",
                "Delivery time reduced by 15 minutes",
                "Enhanced customer data insights"
            ],
            clientName: "Antonio's Pizzeria"
        }
    ];

    return (
        <>
            <section className='bg-gray-50 dark:bg-gray-700' style={{ width: "100%", height: "700px", backgroundSize: "cover", backgroundImage: `url('/images/hero/hq.webp')` }}>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 h-[700px]">
                    <div className='items-center'>
                        <div className=''>
                            <h1 className="text-2xl lg:text-5xl font-semibold mb-5 text-white dark:text-white md:4px lg:text-start text-center">
                                Customer Success Stories
                            </h1>
                            <p className='text-white/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>
                                Discover how businesses like yours are thriving with BEET POS. Real results from real customers across diverse industries.
                            </p>
                            <div className='md:flex align-middle justify-center lg:justify-start'>
                                <Link href='#case-studies' className='flex border w-full md:w-auto mt-5 md:mt-0 border-primary justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-white hover:text-white hover:bg-primary'>
                                    Explore Case Studies
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative py-16' id="case-studies">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className='text-center mb-12'>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-4">
                            Success Stories
                        </h2>
                        <p className='text-black/60 dark:text-white/60 lg:text-lg font-normal'>
                            See how BEET POS transforms businesses across different industries
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {caseStudies.map((study) => (
                            <div key={study.id} className='bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-200 dark:border-gray-600'>
                                <div className='relative h-48 w-full'>
                                    <Image 
                                        src={study.image} 
                                        alt={study.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className='p-6'>
                                    <div className='mb-3'>
                                        <span className='inline-block bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary px-3 py-1 rounded-full text-sm font-medium'>
                                            {study.industry}
                                        </span>
                                    </div>
                                    <h3 className='text-xl font-semibold text-black dark:text-white mb-3'>
                                        {study.title}
                                    </h3>
                                    <div className='mb-4'>
                                        <p className='text-sm font-semibold text-black/80 dark:text-white/80 mb-2'>
                                            Challenge:
                                        </p>
                                        <p className='text-black/60 dark:text-white/60 text-sm mb-3'>
                                            {study.challenge}
                                        </p>
                                        <p className='text-sm font-semibold text-black/80 dark:text-white/80 mb-2'>
                                            Solution:
                                        </p>
                                        <p className='text-black/60 dark:text-white/60 text-sm mb-3'>
                                            {study.solution}
                                        </p>
                                    </div>
                                    <div className='mb-4'>
                                        <p className='text-sm font-semibold text-black/80 dark:text-white/80 mb-2'>
                                            Key Results:
                                        </p>
                                        <ul className='space-y-1'>
                                            {study.results.map((result, idx) => (
                                                <li key={`${study.id}-result-${idx}`} className='text-sm text-black/60 dark:text-white/60 flex items-start'>
                                                    <span className='text-primary mr-2'>✓</span>
                                                    {result}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='pt-4 border-t border-gray-200 dark:border-gray-600'>
                                        <p className='text-sm text-black/50 dark:text-white/50 italic'>
                                            {study.clientName}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='bg-gray-50 dark:bg-gray-800 py-16'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className='text-center'>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-6">
                            Ready to Write Your Success Story?
                        </h2>
                        <p className='text-black/60 dark:text-white/60 lg:text-lg font-normal mb-8'>
                            Join thousands of businesses already growing with BEET POS
                        </p>
                        <div className='flex flex-col md:flex-row gap-4 justify-center'>
                            <Link 
                                href='/company/contact-us' 
                                className='inline-flex border border-primary justify-center rounded-full text-lg font-medium items-center py-4 px-10 text-white bg-primary hover:bg-primary/90 transition-colors'
                            >
                                Get Started Today
                            </Link>
                            <Link 
                                href='/request-demo' 
                                className='inline-flex border border-primary justify-center rounded-full text-lg font-medium items-center py-4 px-10 text-primary hover:text-white hover:bg-primary transition-colors'
                            >
                                Schedule a Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Newsletter/>
        </>
    );
};

export default CaseStudiesPage;
