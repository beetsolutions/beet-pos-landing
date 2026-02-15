import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Door Counter Management",
    description: "Track customer traffic and optimize staffing with BEET POS Door Counter Management. Real-time foot traffic analytics, peak hour identification, and conversion rate tracking to maximize your restaurant's efficiency.",
    openGraph: {
        title: "Door Counter Management - BEET POS",
        description: "Track customer traffic and optimize staffing with real-time foot traffic analytics and conversion rate tracking.",
        images: ['/images/hero/beetpos.png'],
    },
};

const DoorCounterManagementPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className='bg-gray-50 dark:bg-gray-700'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-16">
                    <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8'>
                        <div className='col-span-6'>
                            <h1 className="text-1xl lg:text-3xl font-light mb-5 text-black dark:text-white lg:text-start text-center">
                                Door Counter Management
                            </h1>
                            <h1 className="text-2xl lg:text-5xl font-semibold mb-5 text-black dark:text-white lg:text-start text-center">
                                Understand your traffic with intelligent customer counting
                            </h1>
                            <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>
                                Make data-driven decisions with BEET POS Door Counter Management. Track foot traffic in real-time, identify peak hours, measure conversion rates, and optimize staffing to ensure every customer receives exceptional service.
                            </p>
                            <div className='md:flex align-middle justify-center lg:justify-start gap-4'>
                                <Link href='/request-demo' className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-primary hover:text-primary lg:px-14 border border-primary hover:bg-transparent transition-colors duration-300'>Get a Demo</Link>
                                <Link href='/pricing' className='flex border w-full md:w-auto mt-5 md:mt-0 border-primary justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-primary hover:text-white hover:bg-primary transition-colors duration-300'>See Pricing</Link>
                            </div>
                        </div>
                        <div className='col-span-6 flex justify-center relative'>
                            <Image src="/images/hero/beetpos.png" alt="BEET POS Door Counter Management System" width={1000} height={805} priority />
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
                            Everything you need to track your traffic
                        </h2>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {/* Feature 1 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Real-Time Traffic Tracking</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Monitor customer traffic as it happens with accurate, real-time counting. See exactly how many customers enter and exit your establishment throughout the day.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Peak Hour Analysis</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Identify your busiest times with detailed traffic patterns. Understand when customers visit most frequently and plan your staffing accordingly.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Conversion Rate Tracking</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Measure how many visitors become paying customers. Track conversion rates to understand your sales effectiveness and identify opportunities for improvement.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Historical Data Analysis</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Access comprehensive historical data to spot trends and patterns. Compare traffic across days, weeks, and months to make informed business decisions.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Staff Optimization</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Use traffic data to schedule the right number of staff at the right times. Reduce labor costs during slow periods and ensure adequate coverage during peak hours.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Custom Alerts</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Set up notifications for unusual traffic patterns or when customer counts reach specific thresholds. Stay informed and respond quickly to changing conditions.
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
                            <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Why BEET Door Counter Management</p>
                            <h2 className="text-3xl lg:text-5xl font-semibold mb-8 text-black dark:text-white">
                                Make smarter decisions with traffic data
                            </h2>
                            
                            <div className='space-y-6'>
                                <div className='flex gap-4'>
                                    <div className='flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl'>
                                        1
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Optimize Labor Costs</h3>
                                        <p className='text-black/60 dark:text-white/60'>
                                            Schedule staff based on actual traffic patterns instead of guesswork. Reduce overstaffing during slow periods and ensure adequate coverage when you need it most.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex gap-4'>
                                    <div className='flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl'>
                                        2
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Improve Marketing ROI</h3>
                                        <p className='text-black/60 dark:text-white/60'>
                                            Measure the impact of marketing campaigns and promotions on foot traffic. See exactly how many additional customers your efforts bring in.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex gap-4'>
                                    <div className='flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl'>
                                        3
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Enhance Customer Experience</h3>
                                        <p className='text-black/60 dark:text-white/60'>
                                            Ensure you have enough staff during busy times to provide excellent service. Shorter wait times and better service lead to happier customers and positive reviews.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex gap-4'>
                                    <div className='flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl'>
                                        4
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Strategic Planning</h3>
                                        <p className='text-black/60 dark:text-white/60'>
                                            Use traffic data to inform decisions about hours of operation, menu offerings, and special promotions. Base your strategy on real customer behavior patterns.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <Image src="/images/hero/beetpos.png" alt="BEET POS Door Counter Management" width={600} height={600} className="rounded-2xl" />
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
                            Built for data-driven operations
                        </h2>
                        <p className='text-black/60 dark:text-white/60 text-lg max-w-3xl mx-auto'>
                            BEET Door Counter Management goes beyond simple counting with intelligent analytics and actionable insights for your business.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl'>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Multi-Location Support</h3>
                            <p className='text-black/60 dark:text-white/60 mb-4'>
                                Track traffic across multiple locations from a single dashboard. Compare performance between locations and identify your most successful venues.
                            </p>
                        </div>

                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl'>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Weather Integration</h3>
                            <p className='text-black/60 dark:text-white/60 mb-4'>
                                Correlate traffic patterns with weather conditions. Understand how weather affects your business and plan accordingly.
                            </p>
                        </div>

                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl'>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Occupancy Management</h3>
                            <p className='text-black/60 dark:text-white/60 mb-4'>
                                Monitor current occupancy levels in real-time. Ensure compliance with capacity restrictions and maintain a comfortable environment for guests.
                            </p>
                        </div>

                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl'>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Predictive Analytics</h3>
                            <p className='text-black/60 dark:text-white/60 mb-4'>
                                AI-powered forecasting predicts future traffic patterns based on historical data. Plan ahead with confidence using accurate traffic predictions.
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
                            BEET Door Counter Management integrates seamlessly with your entire BEET POS system for comprehensive business insights.
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
                                        Compare foot traffic with sales data to calculate conversion rates. Understand how effectively you convert visitors into customers.
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
                                        Sync traffic data with your employee scheduling system. Automatically suggest optimal staffing levels based on expected traffic.
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
                                    <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Marketing Tools</h3>
                                    <p className='text-black/60 dark:text-white/60'>
                                        Track the effectiveness of marketing campaigns by measuring traffic spikes. Integrate with email marketing to target customers during slow periods.
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
                                    <h3 className='text-xl font-semibold mb-2 text-black dark:text-white'>Analytics Dashboard</h3>
                                    <p className='text-black/60 dark:text-white/60'>
                                        View traffic data alongside all other key metrics in your unified dashboard. Get a complete picture of your business performance.
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
                            Ready to understand your customer traffic?
                        </h2>
                        <p className='text-white/90 text-lg mb-10 max-w-2xl mx-auto'>
                            Join thousands of restaurants using BEET Door Counter Management to optimize operations, reduce costs, and deliver exceptional customer experiences.
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

export default DoorCounterManagementPage;
