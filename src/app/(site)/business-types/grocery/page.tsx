import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Newsletter from "@/components/Home/Newsletter";

export const metadata: Metadata = {
    title: "Grocery Store POS System | BEET POS",
    description: "Complete grocery store POS system with inventory management, fresh produce tracking, and integrated scales. Streamline checkout and manage your grocery store efficiently.",
    openGraph: {
        title: "Grocery Store POS System - BEET POS",
        description: "Complete grocery store POS with inventory management, fresh produce tracking, and integrated scales.",
        images: ['/images/hero/beetpos.png'],
    },
};

const GroceryPage = () => {
    return (
        <>
            <section className='bg-gray-50 dark:bg-gray-700'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-20">
                    <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8'>
                        <div className='col-span-6'>
                            <h1 className="text-xl lg:text-3xl font-light mb-5 text-black dark:text-white lg:text-start text-center">
                                Grocery Store POS System
                            </h1>
                            <h1 className="text-2xl lg:text-5xl font-semibold mb-5 text-black dark:text-white lg:text-start text-center">
                                Complete Solutions for Modern Grocery Stores
                            </h1>
                            <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>
                                BEET POS delivers a comprehensive point of sale system designed specifically for grocery stores. From fresh produce weighing to bakery management, we've got everything you need to run your grocery business efficiently.
                            </p>
                            <div className='md:flex align-middle justify-center lg:justify-start gap-4'>
                                <Link href='#features' className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-primary hover:text-primary lg:px-14 border border-primary hover:bg-transparent'>
                                    Explore Features
                                </Link>
                                <Link href='/pricing' className='flex border w-full md:w-auto mt-5 md:mt-0 border-primary justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-primary hover:text-white hover:bg-primary'>
                                    See Pricing
                                </Link>
                            </div>
                        </div>
                        <div className='col-span-6 flex justify-center relative'>
                            <Image src="/images/hero/beetpos.png" alt="BEET POS System" width={1000} height={805} />
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative py-16'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className='text-center mb-16'>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-5">
                            Why Choose BEET POS for Your Grocery Store?
                        </h2>
                        <p className='text-black/60 dark:text-white/60 lg:text-lg max-w-3xl mx-auto'>
                            Our POS system is built to handle the complexity of grocery retail, from fresh produce and bakery items to deli counters and special promotions.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Integrated Scale Support
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Seamlessly integrate with deli scales and produce scales. Price by weight automatically and print labels with barcodes for pre-packaged items.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Advanced Inventory Management
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Track thousands of products with ease. Monitor expiration dates, manage perishables, and set up automatic reordering for your entire inventory.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Flexible Pricing & Promotions
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Create mix-and-match deals, BOGO offers, quantity discounts, and loyalty programs. Run weekly specials and seasonal promotions with ease.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Expiration Date Tracking
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Monitor expiration dates for perishable items, receive alerts for items nearing expiration, and reduce waste with smart inventory rotation.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                EBT/SNAP Processing
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Accept EBT and SNAP benefits with automatic eligible item identification. Seamless split tender support for mixed basket transactions.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Department Management
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Organize products by department - produce, dairy, meat, bakery, and more. Track sales and margins by department for better insights.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative py-16 bg-gray-50 dark:bg-gray-800' id="features">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16'>
                        <div className='col-span-6 flex flex-col justify-center'>
                            <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white text-start mb-6">
                                Everything Your Grocery Store Needs
                            </h2>
                            <p className='text-black/60 dark:text-white/60 font-normal text-start mb-6'>
                                BEET POS handles the unique challenges of grocery retail with specialized features for produce weighing, bakery management, deli operations, and fresh food tracking. Our system grows with your business, whether you operate a small neighborhood market or a full-service supermarket.
                            </p>
                            <ul className='space-y-4'>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Integrated produce and deli scales with label printing</span>
                                </li>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Batch and expiration date tracking for perishables</span>
                                </li>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Advanced promotion engine with mix-and-match deals</span>
                                </li>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Multi-department reporting and analytics</span>
                                </li>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Customer loyalty programs and digital coupons</span>
                                </li>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>EBT/SNAP integration with automatic eligibility checking</span>
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-6 flex justify-center'>
                            <Image src="/images/hero/team.jpg" alt="Grocery Store Team" width={636} height={808} className="rounded-3xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative py-16'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className='text-center mb-12'>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-5">
                            Ready to Transform Your Grocery Store?
                        </h2>
                        <p className='text-black/60 dark:text-white/60 lg:text-lg max-w-3xl mx-auto mb-8'>
                            Join successful grocery store owners who have modernized their operations with BEET POS. See how our system can help you increase efficiency and grow your business.
                        </p>
                        <div className='flex gap-4 justify-center flex-wrap'>
                            <Link href='/contact-us' className='text-xl font-medium rounded-full text-white py-5 px-10 bg-primary hover:bg-primary/90 transition-colors'>
                                Request a Demo
                            </Link>
                            <Link href='/pricing' className='text-xl font-medium rounded-full text-primary py-5 px-10 border border-primary hover:bg-primary hover:text-white transition-colors'>
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Newsletter/>
        </>
    );
};

export default GroceryPage;
