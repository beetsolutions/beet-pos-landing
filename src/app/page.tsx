import React from "react";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Newsletter from "@/components/Home/Newsletter";
import {Metadata} from "next";
import POS from "@/components/POS";
import HardwareSlider from "@/components/HardwareSlider";
import {FAQ} from "@/components/FAQ";
import Empowerment from "@/components/Empowerment";
import TrustpilotReviews from "@/components/TrustpilotReviews";

export const metadata: Metadata = {
    title: "Home",
    description: "BEET POS is the modern point of sale system that transforms how you run your business. Powerful features, easy to use, transparent pricing. Perfect for restaurants, bars, cafes, and retail stores.",
    openGraph: {
        title: "BEET POS - Modern Point of Sale System",
        description: "Transform your business with BEET POS. Modern, cloud-based POS system with powerful features and transparent pricing.",
        images: ['/images/hero/beetpos.png'],
    },
};

export default function Home() {
    return (
        <main>
            <Hero/>
            <Features/>
            {/*<Cook />*/}
            <POS/>
            <HardwareSlider/>
            {/*<Expert/>*/}
            {/*<Gallery/>*/}
            <Empowerment/>
            <TrustpilotReviews/>
            <Newsletter/>
            <FAQ/>
        </main>
    );
}
