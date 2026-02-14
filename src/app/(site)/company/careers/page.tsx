import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Newsletter from "@/components/Home/Newsletter";

export const metadata: Metadata = {
    title: "Careers - Join Our Team",
    description: "Join the BEET POS team and help us transform how businesses operate. Explore career opportunities and be part of building the future of point of sale technology.",
    openGraph: {
        title: "Careers - Join Our Team - BEET POS",
        description: "Explore career opportunities at BEET POS and help us build the future of POS technology.",
        images: ['/images/hero/beetpos.png'],
    },
};

const CareersPage = () => {
    const jobOpenings = [
        {
            title: "Senior Frontend Developer",
            department: "Engineering",
            location: "Remote / Hybrid",
            type: "Full-time",
        },
        {
            title: "Product Manager",
            department: "Product",
            location: "Remote / Hybrid",
            type: "Full-time",
        },
        {
            title: "Customer Success Manager",
            department: "Customer Success",
            location: "Remote",
            type: "Full-time",
        },
        {
            title: "UX/UI Designer",
            department: "Design",
            location: "Remote / Hybrid",
            type: "Full-time",
        },
    ];

    const benefits = [
        {
            title: "Competitive Compensation",
            description: "We offer competitive salaries and equity packages to reward your contributions.",
        },
        {
            title: "Health & Wellness",
            description: "Comprehensive health, dental, and vision insurance for you and your family.",
        },
        {
            title: "Flexible Work",
            description: "Work remotely or from our office - whatever works best for you and your team.",
        },
        {
            title: "Professional Growth",
            description: "Continuous learning opportunities, conferences, and career development support.",
        },
        {
            title: "Work-Life Balance",
            description: "Generous PTO, flexible hours, and a culture that values your time outside work.",
        },
        {
            title: "Great Team Culture",
            description: "Join a diverse, inclusive team that celebrates wins and supports each other.",
        },
    ];

    return (
        <>
            <section className='bg-gray-50 dark:bg-gray-700' style={{ width: "100%", height: "700px", backgroundSize: "cover", backgroundImage: `url('/images/hero/team.jpg')` }}>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 h-[700px]">
                    <div className='items-center'>
                        <div className=''>
                            <h1 className="text-2xl lg:text-5xl font-semibold mb-5 text-white dark:text-white md:4px lg:text-start text-center">
                                Join Our Team
                            </h1>
                            <p className='text-white/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>
                                Help us revolutionize how businesses operate. Join a passionate team dedicated to building innovative solutions that empower businesses worldwide.
                            </p>
                            <div className='md:flex align-middle justify-center lg:justify-start'>
                                <Link href='#open-positions' className='flex border w-full md:w-auto mt-5 md:mt-0 border-primary justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-white hover:text-white hover:bg-primary'>View Open Positions</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                    <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5 ml-5 mr-5'>
                        <div className='col-span-6 flex flex-col justify-center'>
                            <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white text-start">
                                Why Join BEET POS?
                            </h2>
                            <p className='text-black/60 dark:text-white/60 font-normal mt-4 mb-3 text-start'>
                                At BEET POS, we're more than just a company—we're a community of innovators, problem-solvers, and dreamers. We believe in empowering our team members to do their best work while making a real impact on businesses around the world.
                            </p>
                            <p className='text-black/60 dark:text-white/60 font-normal mb-3 text-start'>
                                Our culture is built on collaboration, innovation, and continuous learning. We celebrate diversity, encourage creative thinking, and support each team member's professional growth.
                            </p>
                        </div>
                        <div className='col-span-6 flex justify-start'>
                            <Image src="/images/hero/team.jpg" alt="BEET POS team members collaborating in the office" width={636} height={808} className="rounded-3xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-gray-50 dark:bg-gray-800 py-16'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className='text-center mb-12'>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-4">
                            Benefits & Perks
                        </h2>
                        <p className='text-black/60 dark:text-white/60 lg:text-lg font-normal'>
                            We invest in our team members' success and well-being
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {benefits.map((benefit, index) => (
                            <div key={index} className='bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow'>
                                <h3 className='text-xl font-semibold text-black dark:text-white mb-3'>
                                    {benefit.title}
                                </h3>
                                <p className='text-black/60 dark:text-white/60'>
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='relative py-16' id="open-positions">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className='text-center mb-12'>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-4">
                            Open Positions
                        </h2>
                        <p className='text-black/60 dark:text-white/60 lg:text-lg font-normal'>
                            Find your next opportunity with us
                        </p>
                    </div>
                    <div className='space-y-4'>
                        {jobOpenings.map((job, index) => (
                            <div key={index} className='bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600'>
                                <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                                    <div className='mb-4 md:mb-0'>
                                        <h3 className='text-2xl font-semibold text-black dark:text-white mb-2'>
                                            {job.title}
                                        </h3>
                                        <div className='flex flex-wrap gap-3'>
                                            <span className='text-black/60 dark:text-white/60'>
                                                {job.department}
                                            </span>
                                            <span className='text-black/60 dark:text-white/60'>•</span>
                                            <span className='text-black/60 dark:text-white/60'>
                                                {job.location}
                                            </span>
                                            <span className='text-black/60 dark:text-white/60'>•</span>
                                            <span className='text-black/60 dark:text-white/60'>
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>
                                    <Link href='mailto:careers@beetpos.com' className='flex border border-primary justify-center rounded-full font-medium items-center py-3 px-8 text-primary hover:text-white hover:bg-primary transition-colors'>
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='text-center mt-12'>
                        <p className='text-black/60 dark:text-white/60 mb-4'>
                            Don't see a position that matches your skills?
                        </p>
                        <Link href='mailto:careers@beetpos.com' className='inline-flex border border-primary justify-center rounded-full text-lg font-medium items-center py-4 px-10 text-primary hover:text-white hover:bg-primary transition-colors'>
                            Send Us Your Resume
                        </Link>
                    </div>
                </div>
            </section>

            <Newsletter/>
        </>
    );
};

export default CareersPage;
