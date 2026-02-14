"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Newsletter from "@/components/Home/Newsletter";
import { Icon } from "@iconify/react";

type ResourceCategory = "all" | "guides" | "case-studies" | "blog" | "videos";

interface Resource {
    id: number;
    title: string;
    description: string;
    category: ResourceCategory;
    image: string;
    link: string;
    date: string;
    readTime?: string;
}

const resources: Resource[] = [
    {
        id: 1,
        title: "Complete Guide to POS Systems for Restaurants",
        description: "Learn everything you need to know about modern POS systems and how they can transform your restaurant operations.",
        category: "guides",
        image: "/images/blog/blog_1.jpg",
        link: "#",
        date: "2024-02-10",
        readTime: "10 min read"
    },
    {
        id: 2,
        title: "How Local Coffee Shop Increased Sales by 40%",
        description: "Discover how a small coffee shop used BEET POS to streamline operations and boost revenue.",
        category: "case-studies",
        image: "/images/blog/blog_2.jpg",
        link: "#",
        date: "2024-02-08",
        readTime: "8 min read"
    },
    {
        id: 3,
        title: "5 Ways to Improve Customer Experience",
        description: "Practical tips to enhance customer satisfaction and build loyalty in your retail business.",
        category: "blog",
        image: "/images/blog/blog_3.jpg",
        link: "#",
        date: "2024-02-05",
        readTime: "6 min read"
    },
    {
        id: 4,
        title: "Setting Up Your First POS System",
        description: "A step-by-step video tutorial for getting started with your new POS system quickly and efficiently.",
        category: "videos",
        image: "/images/blog/blog_4.jpg",
        link: "#",
        date: "2024-02-01",
        readTime: "15 min watch"
    },
    {
        id: 5,
        title: "Inventory Management Best Practices",
        description: "Master inventory tracking and reduce waste with these proven strategies for retail businesses.",
        category: "guides",
        image: "/images/blog/blog_5.jpg",
        link: "#",
        date: "2024-01-28",
        readTime: "12 min read"
    },
    {
        id: 6,
        title: "Multi-Location Success Story",
        description: "How a growing chain managed 15 locations seamlessly with BEET POS's multi-location features.",
        category: "case-studies",
        image: "/images/blog/blog_6.jpg",
        link: "#",
        date: "2024-01-25",
        readTime: "10 min read"
    },
    {
        id: 7,
        title: "Understanding Payment Processing Fees",
        description: "Break down the costs of payment processing and learn how to minimize transaction fees.",
        category: "blog",
        image: "/images/blog/blog_7.jpg",
        link: "#",
        date: "2024-01-20",
        readTime: "7 min read"
    },
    {
        id: 8,
        title: "Kitchen Display System Setup Guide",
        description: "Watch how to configure and optimize your kitchen display system for maximum efficiency.",
        category: "videos",
        image: "/images/blog/blog_8.jpg",
        link: "#",
        date: "2024-01-15",
        readTime: "12 min watch"
    },
    {
        id: 9,
        title: "Employee Management Handbook",
        description: "Comprehensive guide to scheduling, time tracking, and managing your team effectively.",
        category: "guides",
        image: "/images/blog/blog_1.jpg",
        link: "#",
        date: "2024-01-10",
        readTime: "15 min read"
    },
];

const categories = [
    { id: "all" as ResourceCategory, label: "All Resources", icon: "solar:document-text-outline" },
    { id: "guides" as ResourceCategory, label: "Guides", icon: "solar:book-outline" },
    { id: "case-studies" as ResourceCategory, label: "Case Studies", icon: "solar:chart-outline" },
    { id: "blog" as ResourceCategory, label: "Blog", icon: "solar:pen-outline" },
    { id: "videos" as ResourceCategory, label: "Videos", icon: "solar:video-library-outline" },
];

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

const ResourcesClient = () => {
    const [activeCategory, setActiveCategory] = useState<ResourceCategory>("all");

    const filteredResources = activeCategory === "all" 
        ? resources 
        : resources.filter(resource => resource.category === activeCategory);

    return (
        <>
            {/* Hero Section */}
            <section className='relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900'>
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-violet-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-12 relative z-10">
                    <div className='items-center'>
                        <div className='space-y-6'>
                            {/* Badge */}
                            <div className="flex justify-center">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-600/10 to-indigo-600/10 border border-violet-600/20 backdrop-blur-sm">
                                    <span className="text-sm font-medium bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                                        <span aria-label="Books icon">📚</span> Knowledge Center
                                    </span>
                                </div>
                            </div>

                            <h1 className="text-3xl lg:text-6xl font-bold mb-5 text-black dark:text-white text-center leading-tight">
                                Resources to help your<br className="hidden lg:block" />
                                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-extrabold"> business thrive</span>
                            </h1>
                            <p className='text-gray-600 dark:text-gray-300 lg:text-xl font-normal mb-10 text-center max-w-3xl mx-auto'>
                                Explore our collection of guides, case studies, and insights to get the most out of BEET POS
                                and grow your business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className='bg-white dark:bg-gray-800 py-12'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                    activeCategory === category.id
                                        ? 'bg-primary text-white shadow-lg scale-105'
                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                }`}
                            >
                                <Icon icon={category.icon} width="20" height="20" />
                                <span>{category.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Grid Section */}
            <section className='bg-gray-50 dark:bg-gray-900 py-16'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredResources.map((resource) => (
                            <Link 
                                key={resource.id} 
                                href={resource.link}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image 
                                        src={resource.image}
                                        alt={resource.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-xs font-medium rounded-full text-gray-800 dark:text-gray-200 capitalize">
                                            {resource.category === "case-studies" ? "Case Study" : resource.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        <span className="flex items-center gap-1">
                                            <Icon icon="solar:calendar-outline" width="16" height="16" />
                                            {formatDate(resource.date)}
                                        </span>
                                        {resource.readTime && (
                                            <>
                                                <span>•</span>
                                                <span className="flex items-center gap-1">
                                                    <Icon icon="solar:clock-circle-outline" width="16" height="16" />
                                                    {resource.readTime}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                        {resource.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                                        {resource.description}
                                    </p>
                                    <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                                        <span>Read more</span>
                                        <Icon 
                                            icon="solar:arrow-right-outline" 
                                            width="20" 
                                            height="20"
                                            className="group-hover:translate-x-1 transition-transform"
                                        />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filteredResources.length === 0 && (
                        <div className="text-center py-16">
                            <Icon icon="solar:document-text-outline" width="80" height="80" className="mx-auto text-gray-400 mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                No resources found
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Try selecting a different category
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className='bg-white dark:bg-gray-800 py-16'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">
                            Can't find what you're looking for?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                            Our support team is here to help you succeed. Get in touch with us for personalized assistance.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link 
                                href="/company/contact-us" 
                                className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                            >
                                Contact Support
                                <Icon icon="solar:arrow-right-outline" width="20" height="20" />
                            </Link>
                            <Link 
                                href="/documentation" 
                                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:border-primary hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2"
                            >
                                View Documentation
                                <Icon icon="solar:book-outline" width="20" height="20" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Newsletter />
        </>
    );
};

export default ResourcesClient;
