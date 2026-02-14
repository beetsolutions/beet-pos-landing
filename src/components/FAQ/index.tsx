"use client"

import React, {useRef} from 'react';
import {motion, useInView} from "framer-motion";
import {Sparkles} from "lucide-react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/Accordion";

interface FAQItem {
    question: string;
    answer: string;
}

export function FAQ() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, {once: true, margin: "-100px"});

    const faqItems: FAQItem[] = [
        {
            question: "What support can I get when running multiple stores?",
            answer: "Rest assured that our exceptional customer support is at your service round the clock, 24 hours a day, 7 days a week. We take great pride in providing you with unwavering assistance, ensuring that any issues or concerns you may encounter are swiftly and effectively addressed. Feel free to reach out to our dedicated support team whenever the need arises, as we are always here to provide you with prompt and reliable solutions."
        },
        {
            question: "What sort of tools does BEET POS have for retail?",
            answer: "BEET POS takes pride in providing a comprehensive suite of tools designed to facilitate seamless operations for your business. With our powerful software, you can take advantage of a range of features tailored to enhance your efficiency and customer experience."
        },
        {
            question: "What industries does BEET POS support?",
            answer: "BEET POS covers a wide range of industries, priding ourselves in having – every process for every business. Our solutions support both retail and restaurant businesses, more specifically Convenience Stores, Grocery Stores, Liquor Stores, Smoke Shops, Fast Food, Full Service restaurants, Fast Causal dining, Bars, and Cafes and Bakeries."
        },
        {
            question: "How can my business use loyalty programs with BEET POS?",
            answer: "Maximize the potential of LoyalCard, our loyalty tool, by harnessing its features to create customer loyalty and drive repeat visits to your store. With Cartzie Campaigns, you can implement robust loyalty programs that incentivize customers to return, fostering a strong and lasting relationship with your brand. Furthermore, take advantage of the automated customer outreach capabilities of Cartzie Campaigns through text messaging. This powerful feature allows you to engage with your customer base proactively, sending personalized messages, promotions, and updates directly to their mobile devices. By automating this process, you save time and effort while maintaining consistent and effective communication with your valued customers. Additionally, Cartzie empowers you to offer online ordering, opening up new avenues for sales and customer convenience. By leveraging Cartzie loyalty programs, automated customer outreach via text messaging, and online ordering capabilities, you can enhance customer engagement, increase sales, and deliver exceptional customer experiences. Embrace the full potential of these tools to grow your business and establish a strong presence in the digital realm."
        },
    ];

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {staggerChildren: 0.1}
        }
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.6, ease: "easeOut"}
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative bg-primary/15"
            id="faq"
        >
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md'>

                <div className="relative z-10 max-w-2xl mx-auto text-center mb-12">
                    <motion.div
                        initial={{opacity: 0, y: -20}}
                        animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: -20}}
                        transition={{duration: 0.6}}
                        className="flex justify-center mb-3"
                    >
                        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>FAQ</p>
                    </motion.div>

                    <motion.h2
                        id="faq-heading"
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                        transition={{duration: 0.7, delay: 0.2}}
                        className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
                    >
                       <span className="text-3xl lg:text-5xl font-semibold text-black ">
                          Questions & Answers
                        </span>
                    </motion.h2>
                </div>

                <motion.div
                    className="relative z-10 w-full mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <Accordion type="single" collapsible className="space-y-2 w-full">
                        {faqItems.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group"
                            >
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="border border-gray-200/50 rounded-lg bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-all duration-200 hover:shadow-sm hover:border-purple-200/50 px-4 py-1"
                                >
                                    <AccordionTrigger
                                        className="text-left hover:no-underline group-hover:text-purple-700 transition-colors duration-200 py-4 text-sm md:text-base font-medium">
                  <span className="flex items-start gap-2">
                    <Sparkles
                        className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-200"/>
                      {item.question}
                  </span>
                                    </AccordionTrigger>
                                    <AccordionContent
                                        className="text-muted-foreground leading-relaxed pb-4 pl-6 text-sm">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>

            </div>
        </section>
    );
}
