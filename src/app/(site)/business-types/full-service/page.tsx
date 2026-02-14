import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Newsletter from "@/components/Home/Newsletter";

export const metadata: Metadata = {
    title: "Full Service Restaurant POS System | BEET POS",
    description: "Transform your full-service restaurant with BEET POS. Table management, order tracking, kitchen display, and seamless service for fine dining.",
};

const FullServicePage = () => {
    return (
        <>
            <section className='bg-gray-50 dark:bg-gray-700'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-20">
                    <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8'>
                        <div className='col-span-6'>
                            <h1 className="text-xl lg:text-3xl font-light mb-5 text-black dark:text-white lg:text-start text-center">
                                Full Service Restaurant POS
                            </h1>
                            <h1 className="text-2xl lg:text-5xl font-semibold mb-5 text-black dark:text-white lg:text-start text-center">
                                Elevate Your Dining Experience
                            </h1>
                            <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>
                                BEET POS is designed specifically for full-service restaurants. Manage tables, coordinate between front and back of house, and deliver exceptional dining experiences with our comprehensive restaurant management system.
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
                            Why Choose BEET POS for Your Full Service Restaurant?
                        </h2>
                        <p className='text-black/60 dark:text-white/60 lg:text-lg max-w-3xl mx-auto'>
                            Our POS system is built to handle the complexity of full-service dining, from reservations to final check, ensuring smooth operations and exceptional guest experiences.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Advanced Table Management
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Visual floor plans, table assignments, server sections, and real-time status updates. Manage your dining room efficiently with intuitive drag-and-drop controls.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Intelligent Order Management
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Course timing, order modifications, special requests, and split checks. Keep orders organized and ensure perfect timing for every course.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Kitchen Display System
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Real-time order routing to kitchen stations, prep timers, and order tracking. Eliminate paper tickets and improve kitchen efficiency.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Reservation & Waitlist
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Online booking integration, waitlist management with SMS notifications, and table availability tracking for optimal seating.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Flexible Payment Processing
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Split checks by seat or item, process tips, handle gift cards, and accept all major payment methods including contactless payments.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Comprehensive Analytics
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Track table turnover, average check size, server performance, peak hours, and menu item popularity. Make data-driven decisions to optimize your operations.
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
                                Everything You Need for Full Service Excellence
                            </h2>
                            <p className='text-black/60 dark:text-white/60 font-normal text-start mb-6'>
                                From reservations to the final check, BEET POS streamlines every aspect of your restaurant operations. Our system is designed to handle the unique challenges of full-service dining, ensuring seamless coordination between front and back of house.
                            </p>
                            <ul className='space-y-4'>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Customizable menu with modifiers and variations</span>
                                </li>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Course sequencing and timing control</span>
                                </li>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Server performance tracking and tip management</span>
                                </li>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Multi-location management for restaurant groups</span>
                                </li>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Integration with online ordering and delivery platforms</span>
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-6 flex justify-center'>
                            <Image src="/images/hero/team.jpg" alt="Restaurant Team" width={636} height={808} className="rounded-3xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative py-16'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className='text-center mb-12'>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-5">
                            Ready to Transform Your Restaurant?
                        </h2>
                        <p className='text-black/60 dark:text-white/60 lg:text-lg max-w-3xl mx-auto mb-8'>
                            Join leading full-service restaurants that trust BEET POS to deliver exceptional dining experiences. Get started today with a personalized demo.
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

export default FullServicePage;
