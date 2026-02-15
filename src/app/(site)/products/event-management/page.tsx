import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Event Management",
    description: "Streamline event planning and execution with BEET POS Event Management. Manage bookings, coordinate staff, track inventory, and deliver seamless experiences for private parties, catering, and special events.",
    openGraph: {
        title: "Event Management - BEET POS",
        description: "Streamline event planning with booking management, staff coordination, and seamless execution.",
        images: ['/images/hero/beetpos.png'],
    },
};

const EventManagementPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className='bg-gray-50 dark:bg-gray-700'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-16">
                    <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8'>
                        <div className='col-span-6'>
                            <h1 className="text-1xl lg:text-3xl font-light mb-5 text-black dark:text-white lg:text-start text-center">
                                Event Management
                            </h1>
                            <h1 className="text-2xl lg:text-5xl font-semibold mb-5 text-black dark:text-white lg:text-start text-center">
                                Transform events into unforgettable experiences
                            </h1>
                            <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>
                                Take complete control of your private parties, catering events, and special occasions with BEET POS Event Management. From booking to billing, manage every detail seamlessly to ensure flawless execution and happy guests.
                            </p>
                            <div className='md:flex align-middle justify-center lg:justify-start gap-4'>
                                <Link href='/request-demo' className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-primary hover:text-primary lg:px-14 border border-primary hover:bg-transparent transition-colors duration-300'>Get a Demo</Link>
                                <Link href='/pricing' className='flex border w-full md:w-auto mt-5 md:mt-0 border-primary justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-primary hover:text-white hover:bg-primary transition-colors duration-300'>See Pricing</Link>
                            </div>
                        </div>
                        <div className='col-span-6 flex justify-center relative'>
                            <Image src="/images/hero/beetpos.png" alt="BEET POS Event Management System" width={1000} height={805} priority />
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
                            Everything you need for successful events
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
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Event Booking</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Capture and manage event bookings with customizable forms. Track deposits, guest counts, dietary restrictions, and special requests all in one place.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Custom Menus</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Create tailored menus for each event. Build packages, set pricing tiers, and handle dietary preferences with ease.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Staff Coordination</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Assign staff to events, manage schedules, and track responsibilities. Ensure every event has the right team in place.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Inventory Tracking</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Plan ingredient needs and track inventory for upcoming events. Get alerts for items that need to be ordered.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Payment Management</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Handle deposits, payment schedules, and final billing. Accept multiple payment methods and automate invoicing.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Event Contracts</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Generate professional contracts and agreements. Digital signatures make it easy to secure bookings quickly.
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
                            <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Why BEET Event Management</p>
                            <h2 className="text-3xl lg:text-5xl font-semibold mb-8 text-black dark:text-white">
                                Deliver exceptional events every time
                            </h2>
                            
                            <div className='space-y-6'>
                                <div className='flex gap-4'>
                                    <div className='flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl'>
                                        1
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Increase Event Revenue</h3>
                                        <p className='text-black/60 dark:text-white/60'>
                                            Capture more event bookings with streamlined processes. Upsell packages and add-ons to maximize profitability per event.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex gap-4'>
                                    <div className='flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl'>
                                        2
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Eliminate Double Bookings</h3>
                                        <p className='text-black/60 dark:text-white/60'>
                                            Real-time availability tracking prevents scheduling conflicts. Ensure smooth operations without embarrassing mistakes.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex gap-4'>
                                    <div className='flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl'>
                                        3
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Reduce Planning Time</h3>
                                        <p className='text-black/60 dark:text-white/60'>
                                            Automate repetitive tasks and standardize event workflows. Spend less time on admin and more time creating amazing experiences.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex gap-4'>
                                    <div className='flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl'>
                                        4
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Improve Communication</h3>
                                        <p className='text-black/60 dark:text-white/60'>
                                            Keep clients, staff, and vendors in sync with automated notifications. Everyone stays informed throughout the event lifecycle.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <Image src="/images/hero/beetpos.png" alt="BEET POS Event Management" width={600} height={600} className="rounded-2xl" />
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
                            Built for professional event operations
                        </h2>
                        <p className='text-black/60 dark:text-white/60 text-lg max-w-3xl mx-auto'>
                            BEET Event Management provides enterprise-grade features to handle events of any size and complexity.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl'>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Multi-Event Management</h3>
                            <p className='text-black/60 dark:text-white/60 mb-4'>
                                Handle multiple events simultaneously across different venues or locations. Centralized dashboard shows all upcoming events at a glance.
                            </p>
                        </div>

                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl'>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Timeline Management</h3>
                            <p className='text-black/60 dark:text-white/60 mb-4'>
                                Create detailed event timelines with automated reminders. Track setup, service, and breakdown schedules to stay on time.
                            </p>
                        </div>

                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl'>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Client Portal</h3>
                            <p className='text-black/60 dark:text-white/60 mb-4'>
                                Give clients access to their event details, menu selections, and payment status. Reduce back-and-forth communication.
                            </p>
                        </div>

                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl'>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Performance Analytics</h3>
                            <p className='text-black/60 dark:text-white/60 mb-4'>
                                Track event profitability, popular packages, and seasonal trends. Use data to refine your event offerings and pricing.
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
                            BEET Event Management integrates seamlessly with your entire BEET POS system for unified restaurant operations.
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
                                        Event menus and pricing sync directly with your POS. Process payments and track sales seamlessly during events.
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
                                    <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Inventory System</h3>
                                    <p className='text-black/60 dark:text-white/60'>
                                        Automatically reserve inventory for upcoming events. Prevent stockouts and ensure you have everything needed.
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
                                        Event orders flow to your kitchen display with proper timing and preparation notes. Your kitchen team stays organized.
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
                                    <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Employee Scheduling</h3>
                                    <p className='text-black/60 dark:text-white/60'>
                                        Event staffing requirements sync with your employee management system. Optimize labor costs and coverage.
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
                            Ready to transform your event operations?
                        </h2>
                        <p className='text-white/90 text-lg mb-10 max-w-2xl mx-auto'>
                            Join restaurants and venues using BEET Event Management to increase bookings, streamline operations, and deliver unforgettable events.
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

export default EventManagementPage;
