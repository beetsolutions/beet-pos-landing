import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Newsletter from "@/components/Home/Newsletter";
import {PricingSection} from "@/app/(site)/pricing/PricingSection";
import {FAQ} from "@/components/FAQ";

export const metadata: Metadata = {
    title: "Pricing ",
};

const PricingPage = () => {
    return (
        <>
            <section className='relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900'>
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-violet-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-12 relative z-10">
                    <div className='items-center'>
                        <div className='space-y-6'>
                            {/* Badge */}
                            <div className="flex justify-center">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-600/10 to-indigo-600/10 border border-violet-600/20 backdrop-blur-sm">
                                    <span className="text-sm font-medium bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                                        <span aria-hidden="true">💎</span> Transparent Pricing
                                    </span>
                                </div>
                            </div>

                            <h1 className="text-3xl lg:text-6xl font-bold mb-5 text-black dark:text-white text-center leading-tight">
                                Powerful POS doesn't have to<br className="hidden lg:block" />
                                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-extrabold"> break the bank</span>
                            </h1>
                            <p className='text-gray-600 dark:text-gray-300 lg:text-xl font-normal mb-10 text-center max-w-2xl mx-auto'>
                                What you see, is what you pay. Transparent pricing with
                                no upfront costs or hidden fees.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <PricingSection/>
            <Newsletter/>
            <FAQ/>
        </>
    );
};

export default PricingPage;