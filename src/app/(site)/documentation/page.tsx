
import { Documentation } from "@/components/Documentation/Documentation";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Documentation",
    description: "BEET POS documentation, guides, and resources. Learn how to get the most out of your point of sale system with our comprehensive documentation.",
    openGraph: {
        title: "Documentation - BEET POS",
        description: "Comprehensive guides and resources for BEET POS.",
        images: ['/images/hero/beetpos.png'],
    },
};

export default function Page() {
    return (
        <>
        <Documentation/>
        </>
    );
};
