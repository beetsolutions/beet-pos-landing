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
            <section className='bg-gray-50 dark:bg-gray-700'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                    <div className='items-center'>
                        <div className=''>

                            <h1 className="text-2xl lg:text-5xl font-semibold mb-5 text-black dark:text-white md:4px lg:text-center text-center">
                                Powerful POS doesn't have to break the bank
                            </h1>
                            <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-center text-center'>
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