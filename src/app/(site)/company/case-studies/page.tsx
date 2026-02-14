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
};

const AboutPage = () => {
    return (
        <>
            <section className='bg-gray-50 dark:bg-gray-700' style={{ width: "100%", height: "700px", backgroundSize: "cover", backgroundImage: `url('/images/hero/hq.webp')` }}>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 h-[700px]">
                    <div className='items-center'>
                        <div className=''>

                            <h1 className="text-2xl lg:text-5xl font-semibold mb-5 text-white dark:text-white md:4px lg:text-start text-center">
                                Revolutionizing Business
                            </h1>
                            <p className='text-white/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>
                                BEET POs’s highest priority is to help independent businesses flourish. Our vision is to build innovative solutions that help every business run better—today and into the future.
                            </p>
                            <div className='md:flex align-middle justify-center lg:justify-start'>
                                <Link href='#' className='flex border w-full md:w-auto mt-5 md:mt-0 border-primary justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-white hover:text-white hover:bg-primary'>Read Our Story</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='relative' id="cook-section">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">

                    <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5 ml-5 mr-5'>

                        <div className='col-span-6 flex flex-col justify-center'>
                            <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white text-start">
                                About us
                            </h2>

                            <p className='text-black/60 font-normal mt-4 mb-3 text-start'>
                                BEET POS began as a free desktop program that business owners could download. At this stage, “BEETs Lounge” was a passion project that Sohail provided with the sole purpose of helping small businesses. As Modisoft grew and moved onto a server, clients were only charged the cost of the server to keep it running — Sohail did this to make efficient and accessible software available to everyone. Now, Modisoft is thriving and remains the most effective, complete and economically friendly option for back office functionality for businesses of all kinds and scales, from local mom-and-pops to well-established companies with over 100 locations. This broad network of businesses is a powerful benefit to family-owned stores and their home communities.
                            </p>
                        </div>

                        <div className='col-span-6 flex justify-start'>
                            <Image src="/images/hero/team.jpg" alt="nothing" width={636} height={808} className="rounded-3xl" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='relative'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">

                    <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5 ml-5 mr-5'>
                        <div className='col-span-6 flex justify-start'>
                            <Image src="/images/hero/team.jpg" alt="nothing" width={636} height={808} className="rounded-3xl" />
                        </div>
                        <div className='col-span-6 flex flex-col justify-center pl-5'>
                            <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white text-start">
                                Our Mission
                            </h2>

                            <p className='text-black/60 font-normal mt-4 mb-3 text-start'>
                                At BEET POS, we build solutions that empowers businesses to operate smarter, adapt faster, and grow stronger. We’re committed to helping businesses thrive through strong partnerships and forward-thinking innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Newsletter/>
        </>
    );
};

export default AboutPage;