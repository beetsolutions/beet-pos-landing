import React from "react";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Newsletter from "@/components/Home/Newsletter";
import {Metadata} from "next";
import POS from "@/components/POS";
import HardwareSlider from "@/components/HardwareSlider";
import {FAQ} from "@/components/FAQ";
import Empowerment from "@/components/Empowerment";

export const metadata: Metadata = {
    title: "BEET POS",
};

export default function Home() {
    return (
        <main>
            <Hero/>
            <Features/>
            {/*/!*<Cook />*!/*/}
            <POS/>
            <HardwareSlider/>
            {/*/!*<Expert/>*!/*/}
            {/*<Gallery/>*/}
            <Empowerment/>
            <Newsletter/>
            <FAQ/>
        </main>
    );
}
