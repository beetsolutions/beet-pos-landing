import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Newsletter from "@/components/Home/Newsletter";

export const metadata: Metadata = {
    title: "Cafe and Bakery POS System | BEET POS",
    description: "Streamline your cafe and bakery operations with BEET POS. Table management, online ordering, inventory tracking, and powerful reporting for cafes and bakeries.",
};

const CafeAndBakeriesPage = () => {
    return (
        <>
            <section className='bg-gray-50 dark:bg-gray-700'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-20">
                    <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8'>
                        <div className='col-span-6'>
                            <h1 className="text-xl lg:text-3xl font-light mb-5 text-black dark:text-white lg:text-start text-center">
                                Cafe and Bakery POS
                            </h1>
                            <h1 className="text-2xl lg:text-5xl font-semibold mb-5 text-black dark:text-white lg:text-start text-center">
                                Crafted for Coffee and Pastries
                            </h1>
                            <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>
                                BEET POS is designed specifically for cafes and bakeries. Manage tables, process orders quickly, track fresh inventory, and delight your customers with our intuitive point of sale system.
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
                            Why Choose BEET POS for Your Cafe or Bakery?
                        </h2>
                        <p className='text-black/60 dark:text-white/60 lg:text-lg max-w-3xl mx-auto'>
                            Our POS system is tailored to meet the unique needs of cafes and bakeries, helping you serve customers faster and manage your business more effectively.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Quick Order Processing
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Speed up your service with intuitive order entry. Customize drinks, add modifiers, and send orders to the kitchen or barista station instantly.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Table Management
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Efficiently manage dine-in customers with visual table layouts, split bills, and seamless order tracking for each table.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Fresh Inventory Tracking
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Monitor ingredient levels, track daily baked goods, set expiration alerts, and reduce waste with smart inventory management designed for perishables.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Online Ordering Integration
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Accept online orders for pickup or delivery. Seamlessly integrate web and mobile orders directly into your POS workflow.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Customer Loyalty Programs
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Build customer relationships with built-in loyalty programs. Reward regulars with points, discounts, and special offers to keep them coming back.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Detailed Sales Analytics
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Track your best-selling items, peak hours, average ticket size, and staff performance with comprehensive reporting and analytics.
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
                                Everything You Need to Run Your Cafe or Bakery
                            </h2>
                            <p className='text-black/60 dark:text-white/60 font-normal text-start mb-6'>
                                From espresso customization to pastry tracking, BEET POS handles the complexity of cafe and bakery operations with ease. Our system supports recipe management, modifier handling, and time-sensitive inventory perfect for fresh baked goods.
                            </p>
                            <ul className='space-y-4'>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Recipe and ingredient management</span>
                                </li>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Customizable drink modifiers (size, milk type, extras)</span>
                                </li>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Kitchen display system for efficient order routing</span>
                                </li>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Gift card sales and management</span>
                                </li>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Catering and special order management</span>
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-6 flex justify-center'>
                            <Image src="/images/hero/team.jpg" alt="Cafe and Bakery Team" width={636} height={808} className="rounded-3xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative py-16'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className='text-center mb-12'>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-5">
                            Ready to Modernize Your Cafe or Bakery?
                        </h2>
                        <p className='text-black/60 dark:text-white/60 lg:text-lg max-w-3xl mx-auto mb-8'>
                            Join thousands of cafe and bakery owners who trust BEET POS to power their business. Get started today with a free demo.
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

export default CafeAndBakeriesPage;
