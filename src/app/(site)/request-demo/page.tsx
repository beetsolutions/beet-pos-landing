"use client"
import Link from "next/link";
import React, { useState } from "react";
import Newsletter from "@/components/Home/Newsletter";
import toast from "react-hot-toast";

const RequestDemoPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        businessName: "",
        businessType: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        
        // Simulate form submission
        setTimeout(() => {
            toast.success("Thank you! We'll contact you soon to schedule your demo.");
            setLoading(false);
            // Reset form
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                businessName: "",
                businessType: "",
                message: ""
            });
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <section className='bg-gray-50 dark:bg-gray-700'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                    <div className='items-center'>
                        <div className=''>
                            <h1 className="text-2xl lg:text-5xl font-semibold mb-5 text-black dark:text-white md:4px lg:text-center text-center">
                                Request a Demo
                            </h1>
                            <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-center text-center'>
                                See how BEET POS can transform your business. Fill out the form below and we'll reach out to schedule a personalized demo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative py-16'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-start'>
                        {/* Form Section */}
                        <div className='col-span-7'>
                            <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8'>
                                <form onSubmit={handleSubmit}>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                                        <div>
                                            <label htmlFor="firstName" className='block text-sm font-medium text-black dark:text-white mb-2'>
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                                className='w-full rounded-md border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-3 text-base text-black dark:text-white outline-none transition focus:border-primary'
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className='block text-sm font-medium text-black dark:text-white mb-2'>
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                                className='w-full rounded-md border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-3 text-base text-black dark:text-white outline-none transition focus:border-primary'
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div className='mb-6'>
                                        <label htmlFor="email" className='block text-sm font-medium text-black dark:text-white mb-2'>
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className='w-full rounded-md border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-3 text-base text-black dark:text-white outline-none transition focus:border-primary'
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div className='mb-6'>
                                        <label htmlFor="phone" className='block text-sm font-medium text-black dark:text-white mb-2'>
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className='w-full rounded-md border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-3 text-base text-black dark:text-white outline-none transition focus:border-primary'
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>

                                    <div className='mb-6'>
                                        <label htmlFor="businessName" className='block text-sm font-medium text-black dark:text-white mb-2'>
                                            Business Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="businessName"
                                            name="businessName"
                                            value={formData.businessName}
                                            onChange={handleChange}
                                            required
                                            className='w-full rounded-md border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-3 text-base text-black dark:text-white outline-none transition focus:border-primary'
                                            placeholder="Your Business Name"
                                        />
                                    </div>

                                    <div className='mb-6'>
                                        <label htmlFor="businessType" className='block text-sm font-medium text-black dark:text-white mb-2'>
                                            Business Type *
                                        </label>
                                        <select
                                            id="businessType"
                                            name="businessType"
                                            value={formData.businessType}
                                            onChange={handleChange}
                                            required
                                            className='w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-base text-black dark:text-white outline-none transition focus:border-primary'
                                        >
                                            <option value="">Select your business type</option>
                                            <option value="restaurant">Restaurant</option>
                                            <option value="bar">Bar</option>
                                            <option value="cafe">Café & Bakery</option>
                                            <option value="fast-food">Fast Food</option>
                                            <option value="grocery">Grocery Store</option>
                                            <option value="convenience">Convenience Store</option>
                                            <option value="liquor">Liquor Store</option>
                                            <option value="smoke-shop">Smoke Shop</option>
                                            <option value="nightclub">Nightclub</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className='mb-6'>
                                        <label htmlFor="message" className='block text-sm font-medium text-black dark:text-white mb-2'>
                                            Additional Information (Optional)
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className='w-full rounded-md border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-3 text-base text-black dark:text-white outline-none transition focus:border-primary resize-none'
                                            placeholder="Tell us about your business needs..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className='w-full text-xl font-medium rounded-full text-white py-4 px-6 bg-primary hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                                    >
                                        {loading ? "Submitting..." : "Request Demo"}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className='col-span-5'>
                            <div className='bg-primary/10 rounded-2xl p-8 mb-8'>
                                <h2 className="text-2xl lg:text-3xl font-semibold text-black dark:text-white mb-6">
                                    What to Expect
                                </h2>
                                <ul className='space-y-4'>
                                    <li className='flex items-start'>
                                        <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className='text-black/70 dark:text-white/70'>Personalized demo tailored to your business needs</span>
                                    </li>
                                    <li className='flex items-start'>
                                        <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className='text-black/70 dark:text-white/70'>Live walkthrough of key features</span>
                                    </li>
                                    <li className='flex items-start'>
                                        <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className='text-black/70 dark:text-white/70'>Q&A session with our product experts</span>
                                    </li>
                                    <li className='flex items-start'>
                                        <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className='text-black/70 dark:text-white/70'>Pricing and implementation discussion</span>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8'>
                                <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                                    Need Help?
                                </h3>
                                <p className='text-black/60 dark:text-white/60 mb-4'>
                                    Have questions before scheduling a demo? Our team is here to help.
                                </p>
                                <div className='space-y-3'>
                                    <div className='flex items-center'>
                                        <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className='text-black/70 dark:text-white/70'>support@beetpos.com</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span className='text-black/70 dark:text-white/70'>1-800-BEET-POS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Newsletter/>
        </>
    );
};

export default RequestDemoPage;
