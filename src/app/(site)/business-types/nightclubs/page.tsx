import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Newsletter from "@/components/Home/Newsletter";

export const metadata: Metadata = {
    title: "Nightclub POS System | BEET POS",
    description: "Elevate your nightclub operations with BEET POS. Fast service, advanced tab management, and real-time insights for nightclubs and late-night venues.",
    openGraph: {
        title: "Nightclub POS System - BEET POS",
        description: "Fast service, advanced tab management, and real-time insights for nightclubs.",
        images: ['/images/hero/beetpos.png'],
    },
};

const NightclubsPage = () => {
    return (
        <>
            <section className='bg-gray-50 dark:bg-gray-700'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-20">
                    <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8'>
                        <div className='col-span-6'>
                            <h1 className="text-xl lg:text-3xl font-light mb-5 text-black dark:text-white lg:text-start text-center">
                                Nightclub POS System
                            </h1>
                            <h1 className="text-2xl lg:text-5xl font-semibold mb-5 text-black dark:text-white lg:text-start text-center">
                                Built for High-Volume, High-Energy Service
                            </h1>
                            <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>
                                BEET POS is designed specifically for nightclubs and late-night entertainment venues. Manage high-volume service, track tabs effortlessly, and keep the party going with our powerful point of sale system.
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
                            Why Choose BEET POS for Your Nightclub?
                        </h2>
                        <p className='text-black/60 dark:text-white/60 lg:text-lg max-w-3xl mx-auto'>
                            Our POS system is built to handle the fast-paced, high-volume environment of nightclubs, helping you serve more guests efficiently while maximizing revenue.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Lightning-Fast Service
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Process orders in seconds even during peak hours. Optimized for high-volume service with intuitive workflows that keep your bar staff moving.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Advanced Tab Management
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Open, manage, and close tabs seamlessly. Track multiple tabs per bartender, split checks, and prevent walkouts with smart tab alerts.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                ID Verification & Compliance
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Built-in age verification for alcohol service. Track compliance, prevent underage sales, and protect your liquor license.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Flexible Payment Processing
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Accept all payment types including cash, cards, mobile payments, and contactless. Pre-authorize tabs and process tips effortlessly.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Real-Time Analytics
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Monitor sales in real-time, track peak hours, analyze drink popularity, and make data-driven decisions to maximize profitability.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Inventory Control
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Track liquor inventory, monitor pour costs, receive low stock alerts, and prevent theft with precise inventory management.
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
                                Everything You Need to Run Your Nightclub
                            </h2>
                            <p className='text-black/60 dark:text-white/60 font-normal text-start mb-6'>
                                From VIP bottle service to crowded bar rushes, BEET POS handles the complexity of nightclub operations with ease. Our system integrates seamlessly with your existing workflows while providing powerful features designed specifically for late-night entertainment venues.
                            </p>
                            <ul className='space-y-4'>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>VIP bottle service tracking and management</span>
                                </li>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Cover charge and event ticketing integration</span>
                                </li>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Multiple bar and service station support</span>
                                </li>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Happy hour and promotional pricing automation</span>
                                </li>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Staff performance tracking and tip management</span>
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-6 flex justify-center'>
                            <Image src="/images/hero/team.jpg" alt="Nightclub Team" width={636} height={808} className="rounded-3xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative py-16'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className='text-center mb-12'>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-5">
                            Ready to Elevate Your Nightclub Experience?
                        </h2>
                        <p className='text-black/60 dark:text-white/60 lg:text-lg max-w-3xl mx-auto mb-8'>
                            Join nightclub owners who trust BEET POS to power their venues. Get started today with a free demo and see how we can help you serve more guests and increase revenue.
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

export default NightclubsPage;
