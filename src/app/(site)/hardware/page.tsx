"use client"
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HardwareSlider from "@/components/HardwareSlider";
import { FAQ } from "@/components/FAQ";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// Hardware categories data
const hardwareCategories = [
  {
    title: "POS Terminals",
    description: "Modern, reliable point-of-sale terminals designed for high-volume businesses.",
    image: "/images/hero/hardware-1-1.webp",
    features: ["Touchscreen Display", "Fast Processing", "Compact Design", "EMV Certified"],
  },
  {
    title: "Payment Terminals",
    description: "Secure payment processing with support for all major payment methods.",
    image: "/images/hero/payments.webp",
    features: ["Contactless Payments", "EMV Chip", "NFC Enabled", "PCI Compliant"],
  },
  {
    title: "Digital Displays",
    description: "Eye-catching digital menu boards and customer-facing displays.",
    image: "/images/hero/display.webp",
    features: ["HD Resolution", "Remote Management", "Dynamic Content", "Energy Efficient"],
  },
  {
    title: "Self-Service Kiosks",
    description: "Empower customers with intuitive self-service ordering kiosks.",
    image: "/images/hero/kiosks.webp",
    features: ["User-Friendly Interface", "Customizable Layout", "Integrated Payments", "ADA Compliant"],
  },
];

// Hardware benefits
const hardwareBenefits = [
  {
    icon: "💪",
    title: "Durable & Reliable",
    description: "Built to withstand the demands of busy retail and restaurant environments.",
  },
  {
    icon: "🎨",
    title: "Modern Design",
    description: "Sleek, professional hardware that complements any business aesthetic.",
  },
  {
    icon: "🔌",
    title: "Easy Integration",
    description: "Seamlessly integrates with BEET POS software for a unified experience.",
  },
  {
    icon: "🛡️",
    title: "Secure & Certified",
    description: "PCI-compliant and EMV-certified for maximum security and peace of mind.",
  },
  {
    icon: "⚡",
    title: "Fast Performance",
    description: "Quick processing speeds to keep your lines moving and customers happy.",
  },
  {
    icon: "🔧",
    title: "24/7 Support",
    description: "Expert technical support available whenever you need assistance.",
  },
];

export default function HardwarePage() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-violet-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            <div className="col-span-6">
              {/* Badge */}
              <div className="flex lg:justify-start justify-center mb-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-600/10 to-indigo-600/10 border border-violet-600/20 backdrop-blur-sm">
                  <span className="text-sm font-medium bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    <span aria-hidden="true">🖥️</span> Premium Hardware
                  </span>
                </div>
              </div>

              <h1 className="text-3xl lg:text-6xl font-bold mb-5 text-black dark:text-white lg:text-start text-center leading-tight">
                Professional Hardware for{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-extrabold">
                  Modern Businesses
                </span>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 lg:text-xl font-normal mb-10 lg:text-start text-center">
                Get durable and reliable hardware with a modern design that blends into any retail or restaurant business. Our hardware solutions are built to last and designed to perform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                <Link
                  href="/request-demo"
                  className="text-xl font-medium rounded-full text-white py-5 px-10 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-lg shadow-violet-600/25 hover:shadow-xl hover:shadow-violet-600/40 transition-all duration-300 text-center"
                >
                  Request a Demo
                </Link>
                <Link
                  href="/pricing"
                  className="flex border border-violet-600 justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-violet-600 hover:text-white hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 transition-all duration-300"
                >
                  See Pricing
                </Link>
              </div>
            </div>
            <div className="col-span-6 flex justify-center relative">
              <Image
                src="/images/hero/hardware-1-1.webp"
                alt="BEET POS Hardware"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Benefits Section */}
      <section className="bg-primary/15 py-20">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="text-center mb-14">
            <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
              Why Choose BEET Hardware
            </p>
            <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
              Built for Performance & Reliability
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hardwareBenefits.map((benefit, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl text-black dark:text-white font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-base font-normal text-black/50 dark:text-white/50">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Categories Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="text-center mb-16">
            <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
              Our Products
            </p>
            <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-4">
              Complete Hardware Solutions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 lg:text-xl max-w-2xl mx-auto">
              From countertop terminals to self-service kiosks, we have everything you need to power your business.
            </p>
          </div>

          <div className="space-y-16">
            {hardwareCategories.map((category, index) => (
              <div
                key={index}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",
                  index % 2 === 1 && "lg:flex-row-reverse"
                )}
              >
                <div className={cn("col-span-6", index % 2 === 1 && "lg:order-2")}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-indigo-600/10 rounded-3xl blur-2xl"></div>
                    <Image
                      src={category.image}
                      alt={category.title}
                      width={600}
                      height={400}
                      className="relative w-full h-auto rounded-3xl shadow-xl"
                    />
                  </div>
                </div>
                <div className={cn("col-span-6", index % 2 === 1 && "lg:order-1")}>
                  <h3 className="text-2xl lg:text-4xl font-bold text-black dark:text-white mb-4">
                    {category.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {category.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="rounded-full p-1 bg-gradient-to-r from-violet-600 to-indigo-600">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-base text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/request-demo"
                    className="inline-flex items-center justify-center text-base font-semibold rounded-xl text-white py-3.5 px-8 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-lg shadow-violet-600/25 hover:shadow-xl hover:shadow-violet-600/40 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Slider Section */}
      <HardwareSlider />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-violet-600 to-indigo-600 text-white">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Upgrade Your Hardware?
          </h2>
          <p className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Get started with professional-grade hardware that grows with your business. Our team is ready to help you find the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-demo"
              className="text-xl font-medium rounded-full bg-white text-violet-600 py-5 px-10 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Request a Demo
            </Link>
            <Link
              href="/pricing"
              className="text-xl font-medium rounded-full border-2 border-white text-white py-5 px-10 hover:bg-white hover:text-violet-600 transition-all duration-300 hover:-translate-y-1"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </>
  );
}
