"use client"
import Link from "next/link";
import React from "react";
import Newsletter from "@/components/Home/Newsletter";
import { Icon } from "@iconify/react";

const IntegrationsPage = () => {
    const integrationCategories = [
        {
            title: "Payment Processing",
            description: "Seamlessly accept all major payment methods with our integrated payment solutions",
            icon: "mdi:credit-card-outline",
            integrations: [
                { name: "Stripe", icon: "simple-icons:stripe" },
                { name: "Square", icon: "simple-icons:square" },
                { name: "PayPal", icon: "simple-icons:paypal" },
                { name: "Clover", icon: "mdi:credit-card-check-outline" },
            ]
        },
        {
            title: "Accounting & Finance",
            description: "Sync your sales data automatically with leading accounting platforms",
            icon: "mdi:calculator-variant-outline",
            integrations: [
                { name: "QuickBooks", icon: "simple-icons:quickbooks" },
                { name: "Xero", icon: "simple-icons:xero" },
                { name: "FreshBooks", icon: "mdi:book-open-outline" },
                { name: "Sage", icon: "mdi:chart-line" },
            ]
        },
        {
            title: "Delivery & Online Ordering",
            description: "Expand your reach with integrated delivery and online ordering platforms",
            icon: "mdi:truck-delivery-outline",
            integrations: [
                { name: "DoorDash", icon: "mdi:food-outline" },
                { name: "Uber Eats", icon: "simple-icons:uber" },
                { name: "Grubhub", icon: "mdi:silverware-fork-knife" },
                { name: "Postmates", icon: "mdi:package-variant" },
            ]
        },
        {
            title: "Inventory Management",
            description: "Keep track of stock levels and manage your inventory efficiently",
            icon: "mdi:package-variant-closed",
            integrations: [
                { name: "MarketMan", icon: "mdi:chart-box-outline" },
                { name: "BlueCart", icon: "mdi:cart-outline" },
                { name: "Restaurant365", icon: "mdi:store-outline" },
                { name: "Compeat", icon: "mdi:clipboard-list-outline" },
            ]
        },
        {
            title: "Marketing & Loyalty",
            description: "Build customer relationships and drive repeat business",
            icon: "mdi:heart-outline",
            integrations: [
                { name: "Mailchimp", icon: "simple-icons:mailchimp" },
                { name: "Klaviyo", icon: "mdi:email-outline" },
                { name: "LoyaltyLion", icon: "mdi:crown-outline" },
                { name: "Yotpo", icon: "mdi:star-outline" },
            ]
        },
        {
            title: "E-commerce Platforms",
            description: "Connect your online store with your point of sale system",
            icon: "mdi:shopping-outline",
            integrations: [
                { name: "Shopify", icon: "simple-icons:shopify" },
                { name: "WooCommerce", icon: "simple-icons:woocommerce" },
                { name: "BigCommerce", icon: "simple-icons:bigcommerce" },
                { name: "Magento", icon: "simple-icons:magento" },
            ]
        },
    ];

    const benefits = [
        {
            icon: "mdi:lightning-bolt-outline",
            title: "Real-Time Sync",
            description: "All your business data syncs in real-time across integrated platforms"
        },
        {
            icon: "mdi:shield-check-outline",
            title: "Secure & Reliable",
            description: "Enterprise-grade security ensures your data is always protected"
        },
        {
            icon: "mdi:puzzle-outline",
            title: "Easy Setup",
            description: "Simple one-click integrations that take minutes, not hours"
        },
        {
            icon: "mdi:headset",
            title: "24/7 Support",
            description: "Our integration experts are available whenever you need help"
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className='bg-gray-50 dark:bg-gray-700' style={{ width: "100%", height: "600px", backgroundSize: "cover", backgroundImage: `url('/images/hero/hq.webp')` }}>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 h-[600px] flex items-center">
                    <div className='w-full'>
                        <h1 className="text-4xl lg:text-6xl font-semibold mb-5 text-white dark:text-white text-center">
                            Powerful Integrations
                        </h1>
                        <p className='text-white/70 dark:text-white/70 lg:text-xl font-normal mb-10 text-center max-w-3xl mx-auto'>
                            Connect BEET POS with the tools you already use. Streamline your operations and grow your business with seamless integrations.
                        </p>
                        <div className='flex align-middle justify-center'>
                            <Link href='#integrations' className='flex border w-full md:w-auto mt-5 md:mt-0 border-white justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-white hover:bg-white hover:text-primary transition-all duration-300'>
                                Explore Integrations
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className='relative py-20 bg-white dark:bg-gray-800'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-4'>
                            Why Choose Our Integrations?
                        </h2>
                        <p className='text-black/60 dark:text-white/70 text-lg max-w-2xl mx-auto'>
                            Built for businesses that want more from their POS system
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {benefits.map((benefit, index) => (
                            <div key={index} className='text-center'>
                                <div className='bg-primary/10 dark:bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6'>
                                    <Icon icon={benefit.icon} width="40" height="40" className="text-primary" />
                                </div>
                                <h3 className='text-xl font-semibold text-black dark:text-white mb-3'>
                                    {benefit.title}
                                </h3>
                                <p className='text-black/60 dark:text-white/70'>
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration Categories Section */}
            <section id='integrations' className='relative py-20 bg-gray-50 dark:bg-gray-900'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-4'>
                            All Your Favorite Tools in One Place
                        </h2>
                        <p className='text-black/60 dark:text-white/70 text-lg max-w-2xl mx-auto'>
                            Connect with the platforms you already use to run your business
                        </p>
                    </div>
                    
                    <div className='space-y-16'>
                        {integrationCategories.map((category, categoryIndex) => (
                            <div key={categoryIndex} className='bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-lg'>
                                <div className='flex items-center mb-6'>
                                    <div className='bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mr-4'>
                                        <Icon icon={category.icon} width="32" height="32" className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className='text-2xl lg:text-3xl font-semibold text-black dark:text-white'>
                                            {category.title}
                                        </h3>
                                        <p className='text-black/60 dark:text-white/70 mt-1'>
                                            {category.description}
                                        </p>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-8'>
                                    {category.integrations.map((integration, integrationIndex) => (
                                        <div 
                                            key={integrationIndex} 
                                            className='bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'
                                        >
                                            <Icon icon={integration.icon} width="48" height="48" className="text-primary mb-3" />
                                            <span className='text-black dark:text-white font-medium text-center'>
                                                {integration.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='relative py-20 bg-primary'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className='text-center max-w-3xl mx-auto'>
                        <h2 className='text-3xl lg:text-5xl font-semibold text-white mb-6'>
                            Ready to Connect Your Business?
                        </h2>
                        <p className='text-white/90 text-lg mb-10'>
                            Start integrating BEET POS with your favorite tools today. Our team is here to help you every step of the way.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                            <Link 
                                href='/company/contact-us' 
                                className='bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-10 rounded-full transition-all duration-300 inline-flex items-center justify-center'
                            >
                                Contact Sales
                                <Icon icon="tabler:arrow-narrow-right" width="24" height="24" className="ml-2" />
                            </Link>
                            <Link 
                                href='#' 
                                className='border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-10 rounded-full transition-all duration-300 inline-flex items-center justify-center'
                            >
                                View Documentation
                                <Icon icon="tabler:external-link" width="20" height="20" className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <Newsletter/>
        </>
    );
};

export default IntegrationsPage;
