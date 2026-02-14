"use client"
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";
import Newsletter from "@/components/Home/Newsletter";

const ContactUsPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        try {
            // Simulate API call - Replace with actual endpoint
            await new Promise(resolve => setTimeout(resolve, 1000));
            toast.success("Thank you for contacting us! We'll get back to you soon.");
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className='bg-gray-50 dark:bg-gray-700' style={{ width: "100%", height: "500px", backgroundSize: "cover", backgroundImage: `url('/images/hero/hq.webp')` }}>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 h-[500px] flex items-center">
                    <div className='w-full'>
                        <h1 className="text-4xl lg:text-6xl font-semibold mb-5 text-white dark:text-white text-center">
                            Get in Touch
                        </h1>
                        <p className='text-white/70 dark:text-white/70 lg:text-xl font-normal text-center max-w-3xl mx-auto'>
                            Have questions about our POS solutions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information Cards */}
            <section className='relative py-20'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
                        {/* Address Card */}
                        <div className='bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
                                <Icon icon="mdi:map-marker" width="32" height="32" className="text-primary" />
                            </div>
                            <h3 className='text-xl font-semibold text-black dark:text-white mb-3'>
                                Visit Us
                            </h3>
                            <p className='text-black/60 dark:text-white/70'>
                                123 Business Street<br />
                                Suite 100<br />
                                San Francisco, CA 94105
                            </p>
                        </div>

                        {/* Phone Card */}
                        <div className='bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
                                <Icon icon="mdi:phone" width="32" height="32" className="text-primary" />
                            </div>
                            <h3 className='text-xl font-semibold text-black dark:text-white mb-3'>
                                Call Us
                            </h3>
                            <p className='text-black/60 dark:text-white/70'>
                                Sales: (555) 123-4567<br />
                                Support: (555) 123-4568<br />
                                Mon-Fri, 9AM-6PM PST
                            </p>
                        </div>

                        {/* Email Card */}
                        <div className='bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow'>
                            <div className='bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
                                <Icon icon="mdi:email" width="32" height="32" className="text-primary" />
                            </div>
                            <h3 className='text-xl font-semibold text-black dark:text-white mb-3'>
                                Email Us
                            </h3>
                            <p className='text-black/60 dark:text-white/70'>
                                Sales: sales@beetpos.com<br />
                                Support: support@beetpos.com<br />
                                General: info@beetpos.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className='relative py-20 bg-gray-50 dark:bg-gray-800'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                        {/* Form Description */}
                        <div className='lg:col-span-5 flex flex-col justify-center'>
                            <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-6">
                                Send Us a Message
                            </h2>
                            <p className='text-black/60 dark:text-white/70 text-lg mb-8'>
                                Fill out the form and our team will get back to you within 24 hours. We're committed to providing excellent customer service and support.
                            </p>
                            <div className='space-y-4'>
                                <div className='flex items-center'>
                                    <Icon icon="mdi:check-circle" width="24" height="24" className="text-primary mr-3" />
                                    <span className='text-black/70 dark:text-white/70'>Quick response time</span>
                                </div>
                                <div className='flex items-center'>
                                    <Icon icon="mdi:check-circle" width="24" height="24" className="text-primary mr-3" />
                                    <span className='text-black/70 dark:text-white/70'>Expert support team</span>
                                </div>
                                <div className='flex items-center'>
                                    <Icon icon="mdi:check-circle" width="24" height="24" className="text-primary mr-3" />
                                    <span className='text-black/70 dark:text-white/70'>Personalized solutions</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className='lg:col-span-7'>
                            <form onSubmit={handleSubmit} className='bg-white dark:bg-gray-700 p-8 lg:p-12 rounded-3xl shadow-xl'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                                    <div>
                                        <label htmlFor='name' className='block text-sm font-medium text-black dark:text-white mb-2'>
                                            Full Name *
                                        </label>
                                        <input
                                            type='text'
                                            id='name'
                                            name='name'
                                            required
                                            className='w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary'
                                            placeholder='John Doe'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='email' className='block text-sm font-medium text-black dark:text-white mb-2'>
                                            Email Address *
                                        </label>
                                        <input
                                            type='email'
                                            id='email'
                                            name='email'
                                            required
                                            className='w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary'
                                            placeholder='john@example.com'
                                        />
                                    </div>
                                </div>
                                <div className='mb-6'>
                                    <label htmlFor='subject' className='block text-sm font-medium text-black dark:text-white mb-2'>
                                        Subject *
                                    </label>
                                    <input
                                        type='text'
                                        id='subject'
                                        name='subject'
                                        required
                                        className='w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary'
                                        placeholder='How can we help you?'
                                    />
                                </div>
                                <div className='mb-6'>
                                    <label htmlFor='message' className='block text-sm font-medium text-black dark:text-white mb-2'>
                                        Message *
                                    </label>
                                    <textarea
                                        id='message'
                                        name='message'
                                        required
                                        rows={6}
                                        className='w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none'
                                        placeholder='Tell us more about your inquiry...'
                                    />
                                </div>
                                <button
                                    type='submit'
                                    disabled={isSubmitting}
                                    className='w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed'
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Icon icon="eos-icons:loading" width="24" height="24" className="mr-2" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Icon icon="tabler:arrow-narrow-right" width="24" height="24" className="ml-2" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <Newsletter/>
        </>
    );
};

export default ContactUsPage;
