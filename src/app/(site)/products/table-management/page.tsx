import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Table Management",
    description: "Optimize your restaurant floor with BEET POS Table Management. Visual floor plans, real-time status updates, intelligent seating, and seamless integration for maximum efficiency.",
    openGraph: {
        title: "Table Management - BEET POS",
        description: "Optimize your restaurant floor with visual floor plans and real-time table status updates.",
        images: ['/images/hero/beetpos.png'],
    },
};

const TableManagementPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className='bg-gray-50 dark:bg-gray-700'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-16">
                    <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8'>
                        <div className='col-span-6'>
                            <h1 className="text-1xl lg:text-3xl font-light mb-5 text-black dark:text-white lg:text-start text-center">
                                Table Management
                            </h1>
                            <h1 className="text-2xl lg:text-5xl font-semibold mb-5 text-black dark:text-white lg:text-start text-center">
                                Master your floor with intelligent table management
                            </h1>
                            <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>
                                Take full control of your restaurant floor with BEET POS Table Management. Visualize your entire layout, monitor table status in real-time, and optimize seating to maximize revenue and enhance guest satisfaction.
                            </p>
                            <div className='md:flex align-middle justify-center lg:justify-start gap-4'>
                                <Link href='/request-demo' className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-primary hover:text-primary lg:px-14 border border-primary hover:bg-transparent transition-colors duration-300'>Get a Demo</Link>
                                <Link href='/pricing' className='flex border w-full md:w-auto mt-5 md:mt-0 border-primary justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-primary hover:text-white hover:bg-primary transition-colors duration-300'>See Pricing</Link>
                            </div>
                        </div>
                        <div className='col-span-6 flex justify-center relative'>
                            <Image src="/images/hero/tables-hero-ca.avif" alt="BEET POS Table Management System" width={1000} height={805} priority />
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className='bg-white dark:bg-gray-800 py-20' id="features-section">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-16">
                        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Powerful Features</p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
                            Everything you need to manage your floor
                        </h2>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {/* Feature 1 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Visual Floor Plan</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Create customizable floor plans that mirror your actual restaurant layout. Drag and drop tables, add sections, and visualize your entire floor at a glance.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Real-Time Status</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                See table status instantly - available, occupied, dirty, or reserved. Color-coded indicators help your hosts make quick seating decisions.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Smart Seating</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Intelligent seating suggestions based on party size, server sections, and table availability. Optimize your floor for maximum efficiency.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Table Timers</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Track how long guests have been seated. Identify tables ready to turn over and improve your table turnover rate.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Section Management</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Organize tables into sections and assign servers. Ensure balanced workload distribution and smooth service flow.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Table Transfers</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Move guests between tables seamlessly. Transfer orders and maintain service continuity without missing a beat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className='bg-gray-50 dark:bg-gray-700 py-20'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <div>
                            <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Why BEET Table Management</p>
                            <h2 className="text-3xl lg:text-5xl font-semibold mb-8 text-black dark:text-white">
                                Transform your restaurant operations
                            </h2>
                            
                            <div className='space-y-6'>
                                <div className='flex gap-4'>
                                    <div className='flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl'>
                                        1
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Maximize Table Turnover</h3>
                                        <p className='text-black/60 dark:text-white/60'>
                                            Real-time visibility into table status helps you seat more guests. Faster turnover means increased revenue without adding more tables.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex gap-4'>
                                    <div className='flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl'>
                                        2
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Reduce Wait Times</h3>
                                        <p className='text-black/60 dark:text-white/60'>
                                            Quickly identify available tables and seat guests faster. Less waiting means happier customers and better reviews.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex gap-4'>
                                    <div className='flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl'>
                                        3
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Optimize Staff Performance</h3>
                                        <p className='text-black/60 dark:text-white/60'>
                                            Balance server sections automatically. Ensure fair table distribution and prevent server burnout during busy shifts.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex gap-4'>
                                    <div className='flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl'>
                                        4
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Data-Driven Decisions</h3>
                                        <p className='text-black/60 dark:text-white/60'>
                                            Track seating patterns, peak times, and table performance. Use insights to optimize your floor plan and staffing levels.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <Image src="/images/hero/beetpos.png" alt="BEET POS Table Management" width={600} height={600} className="rounded-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Advanced Features Section */}
            <section className='bg-white dark:bg-gray-800 py-20'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-16">
                        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Advanced Capabilities</p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-6">
                            Built for modern restaurants
                        </h2>
                        <p className='text-black/60 dark:text-white/60 text-lg max-w-3xl mx-auto'>
                            BEET Table Management goes beyond basic floor plans with intelligent features designed to streamline your operations.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl'>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Multi-Location Support</h3>
                            <p className='text-black/60 dark:text-white/60 mb-4'>
                                Manage multiple restaurant locations from a single interface. Each location can have unique floor plans and configurations.
                            </p>
                        </div>

                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl'>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Table Combinations</h3>
                            <p className='text-black/60 dark:text-white/60 mb-4'>
                                Easily combine tables for larger parties or special events. Split combined tables when parties leave with a single tap.
                            </p>
                        </div>

                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl'>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Mobile Management</h3>
                            <p className='text-black/60 dark:text-white/60 mb-4'>
                                Manage your floor from anywhere using tablets or smartphones. Your hosts can seat guests without being tied to a podium.
                            </p>
                        </div>

                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl'>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Historical Analytics</h3>
                            <p className='text-black/60 dark:text-white/60 mb-4'>
                                Review past service periods to identify trends. Understand your busiest times and optimize staffing accordingly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Section */}
            <section className='bg-gray-50 dark:bg-gray-700 py-20'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-16">
                        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Seamless Integration</p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-6">
                            Part of your complete POS ecosystem
                        </h2>
                        <p className='text-black/60 dark:text-white/60 text-lg max-w-3xl mx-auto'>
                            BEET Table Management integrates seamlessly with your entire BEET POS system for a unified restaurant management experience.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <div className='space-y-6'>
                            <div className='flex gap-4'>
                                <div className='flex-shrink-0'>
                                    <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>POS Integration</h3>
                                    <p className='text-black/60 dark:text-white/60'>
                                        Tables automatically sync with your POS. When you seat guests, their check opens instantly at the correct table.
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-4'>
                                <div className='flex-shrink-0'>
                                    <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Reservation System</h3>
                                    <p className='text-black/60 dark:text-white/60'>
                                        Works hand-in-hand with BEET Reservations. Reserved tables are clearly marked and automatically updated.
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-4'>
                                <div className='flex-shrink-0'>
                                    <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Kitchen Display</h3>
                                    <p className='text-black/60 dark:text-white/60'>
                                        Orders from each table flow directly to your kitchen display system. Your kitchen always knows which table each order belongs to.
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-4'>
                                <div className='flex-shrink-0'>
                                    <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Employee Management</h3>
                                    <p className='text-black/60 dark:text-white/60'>
                                        Server assignments sync with your employee management system. Track performance metrics and optimize schedules.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <Image src="/images/hero/beetpos.png" alt="Integrated POS System" width={600} height={600} className="rounded-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='bg-primary py-20' id="pricing-section">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center">
                        <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6">
                            Ready to optimize your restaurant floor?
                        </h2>
                        <p className='text-white/90 text-lg mb-10 max-w-2xl mx-auto'>
                            Join thousands of restaurants using BEET Table Management to increase efficiency, boost revenue, and deliver exceptional dining experiences.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                            <Link href='/request-demo' className='text-xl w-full sm:w-auto font-medium rounded-full text-primary py-5 px-14 bg-white hover:bg-gray-100 transition-colors duration-300'>
                                Schedule a Demo
                            </Link>
                            <Link href='/company/contact-us' className='text-xl w-full sm:w-auto font-medium rounded-full text-white py-5 px-14 border-2 border-white hover:bg-white hover:text-primary transition-colors duration-300'>
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TableManagementPage;
