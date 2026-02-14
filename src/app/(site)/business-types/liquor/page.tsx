import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Newsletter from "@/components/Home/Newsletter";

export const metadata: Metadata = {
    title: "Liquor Store POS System | BEET POS",
    description: "Optimize your liquor store with BEET POS. Age verification, inventory management, compliance tracking, and powerful reporting for liquor stores.",
};

const LiquorPage = () => {
    return (
        <>
            <section className='bg-gray-50 dark:bg-gray-700'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-20">
                    <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8'>
                        <div className='col-span-6'>
                            <h1 className="text-xl lg:text-3xl font-light mb-5 text-black dark:text-white lg:text-start text-center">
                                Liquor Store POS
                            </h1>
                            <h1 className="text-2xl lg:text-5xl font-semibold mb-5 text-black dark:text-white lg:text-start text-center">
                                Compliance Meets Convenience
                            </h1>
                            <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>
                                BEET POS is purpose-built for liquor stores. Stay compliant with built-in age verification, manage diverse inventory effortlessly, and grow your business with intelligent sales insights.
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
                            Why Choose BEET POS for Your Liquor Store?
                        </h2>
                        <p className='text-black/60 dark:text-white/60 lg:text-lg max-w-3xl mx-auto'>
                            Our POS system is designed specifically for liquor stores, helping you stay compliant, manage complex inventory, and serve customers efficiently.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Built-In Age Verification
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Automated age verification prompts for every alcohol sale. Scan IDs, capture customer information, and maintain compliance effortlessly.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Advanced Inventory Tracking
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Track bottles, cases, and kegs with precision. Monitor stock by brand, size, and type with real-time inventory updates and low-stock alerts.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Smart Pricing & Promotions
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Implement mix-and-match deals, volume discounts, and happy hour pricing. Create promotions that drive sales and customer loyalty.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Sales Analytics & Reports
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Access detailed sales reports by product category, brand performance, peak hours, and seasonal trends to make informed business decisions.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Customer Loyalty Programs
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Build customer relationships with integrated loyalty programs. Track purchases, reward repeat customers, and drive retention.
                            </p>
                        </div>

                        <div className='p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold text-black dark:text-white mb-4'>
                                Flexible Payment Processing
                            </h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Accept all major payment types including credit, debit, contactless, and mobile payments. Fast, secure transactions every time.
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
                                Purpose-Built for Liquor Retail
                            </h2>
                            <p className='text-black/60 dark:text-white/60 font-normal text-start mb-6'>
                                From wine cellars to craft beer selection, BEET POS understands the unique needs of liquor stores. Our system helps you manage complex inventory, stay compliant with regulations, and provide exceptional customer service.
                            </p>
                            <ul className='space-y-4'>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Multi-variant SKU management for different sizes and packaging</span>
                                </li>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Automated compliance reporting and audit trails</span>
                                </li>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Vendor and distributor management with purchase orders</span>
                                </li>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Temperature-controlled storage monitoring and alerts</span>
                                </li>
                                <li className='flex items-start'>
                                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className='text-black/60 dark:text-white/60'>Special order and custom request management</span>
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-6 flex justify-center'>
                            <Image src="/images/hero/team.jpg" alt="Liquor Store Team" width={636} height={808} className="rounded-3xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative py-16'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className='text-center mb-12'>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-5">
                            Ready to Transform Your Liquor Store?
                        </h2>
                        <p className='text-black/60 dark:text-white/60 lg:text-lg max-w-3xl mx-auto mb-8'>
                            Join successful liquor store owners who trust BEET POS to manage their business. Experience the difference with a personalized demo.
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

export default LiquorPage;
