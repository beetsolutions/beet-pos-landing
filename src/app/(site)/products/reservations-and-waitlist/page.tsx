import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Reservations & Waitlist",
    description: "Manage reservations and waitlists seamlessly with BEET POS. Optimize table turnover, reduce wait times, and deliver better customer experiences.",
    openGraph: {
        title: "Reservations & Waitlist - BEET POS",
        description: "Manage reservations and waitlists seamlessly. Optimize table turnover and reduce wait times.",
        images: ['/images/hero/beetpos.png'],
    },
};

const ProductsPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className='bg-gray-50 dark:bg-gray-700'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-16">
                    <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8'>
                        <div className='col-span-6'>
                            <h1 className="text-1xl lg:text-3xl font-light mb-5 text-black dark:text-white lg:text-start text-center">
                                Reservations and Waitlist
                            </h1>
                            <h1 className="text-2xl lg:text-5xl font-semibold mb-5 text-black dark:text-white lg:text-start text-center">
                                A smarter way to manage your waitlist and tables
                            </h1>
                            <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>
                                For busy hosts, every second counts. BEET Tables helps keep your front of house running smoothly with direct BEET POS integration and automated server rotation designed to keep tables turning and guests happy.
                            </p>
                            <div className='md:flex align-middle justify-center lg:justify-start gap-4'>
                                <Link href='/request-demo' className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-primary hover:text-primary lg:px-14 border border-primary hover:bg-transparent transition-colors duration-300'>Get a Demo</Link>
                                <Link href='/pricing' className='flex border w-full md:w-auto mt-5 md:mt-0 border-primary justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-primary hover:text-white hover:bg-primary transition-colors duration-300'>See Pricing</Link>
                            </div>
                        </div>
                        <div className='col-span-6 flex justify-center relative'>
                            <Image src="/images/hero/tables-hero-ca.avif" alt="BEET Tables reservation system" width={1000} height={805} priority />
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
                            Everything you need to manage tables efficiently
                        </h2>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {/* Feature 1 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Online Reservations</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Accept reservations 24/7 through your website, social media, or Google. Let guests book when it's convenient for them.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Waitlist Management</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Manage walk-ins effortlessly with smart waitlist features. Send automated text notifications when tables are ready.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Table Management</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Visual floor plan and table status in real-time. Optimize seating arrangements and maximize table turnover.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Guest Notifications</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Automated SMS and email reminders reduce no-shows. Keep guests informed throughout their dining experience.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Analytics & Reports</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Track covers, peak times, and server performance. Make data-driven decisions to improve operations.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Guest Profiles</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Build guest profiles with dining preferences, allergies, and visit history. Provide personalized service every time.
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
                            <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Why Choose BEET Tables</p>
                            <h2 className="text-3xl lg:text-5xl font-semibold mb-8 text-black dark:text-white">
                                Turn more tables, serve more guests
                            </h2>
                            
                            <div className='space-y-6'>
                                <div className='flex gap-4'>
                                    <div className='flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl'>
                                        1
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Reduce No-Shows</h3>
                                        <p className='text-black/60 dark:text-white/60'>
                                            Automated reminders and confirmations help significantly reduce no-shows, keeping your tables full and revenue flowing.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex gap-4'>
                                    <div className='flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl'>
                                        2
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Improve Guest Experience</h3>
                                        <p className='text-black/60 dark:text-white/60'>
                                            Let guests book online anytime and keep them updated with real-time notifications. Happy guests become repeat customers.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex gap-4'>
                                    <div className='flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl'>
                                        3
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Streamline Operations</h3>
                                        <p className='text-black/60 dark:text-white/60'>
                                            Seamless integration with BEET POS means your front and back of house work in perfect harmony. No double-entry, no confusion.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex gap-4'>
                                    <div className='flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl'>
                                        4
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Increase Revenue</h3>
                                        <p className='text-black/60 dark:text-white/60'>
                                            Optimize your seating, reduce wait times, and fill more tables. Better table management leads to increased revenue.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <Image src="/images/hero/beetpos.png" alt="BEET POS system" width={600} height={600} className="rounded-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Section */}
            <section className='bg-white dark:bg-gray-800 py-20'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-16">
                        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Seamless Integration</p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-6">
                            Works perfectly with BEET POS
                        </h2>
                        <p className='text-black/60 dark:text-white/60 text-lg max-w-3xl mx-auto'>
                            BEET Tables is built to work seamlessly with your BEET POS system, creating a unified experience from reservation to payment.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl'>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Automatic Table Assignment</h3>
                            <p className='text-black/60 dark:text-white/60 mb-4'>
                                When guests are seated, their table is automatically opened in your POS system. No manual entry needed.
                            </p>
                        </div>

                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl'>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Server Rotation</h3>
                            <p className='text-black/60 dark:text-white/60 mb-4'>
                                Intelligent server rotation ensures fair distribution of tables and helps balance workload across your team.
                            </p>
                        </div>

                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl'>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Real-Time Sync</h3>
                            <p className='text-black/60 dark:text-white/60 mb-4'>
                                Table status updates instantly across all devices. Your hosts always know which tables are available.
                            </p>
                        </div>

                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl'>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Guest History</h3>
                            <p className='text-black/60 dark:text-white/60 mb-4'>
                                Access complete guest history including past orders, preferences, and special occasions directly from the reservation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='bg-primary py-20' id="pricing-section">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center">
                        <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6">
                            Ready to optimize your restaurant operations?
                        </h2>
                        <p className='text-white/90 text-lg mb-10 max-w-2xl mx-auto'>
                            Join restaurants worldwide using BEET Tables to manage reservations, reduce no-shows, and deliver exceptional guest experiences.
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

export default ProductsPage;