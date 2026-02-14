import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Request a Demo",
    description: "See how BEET POS can transform your business. Schedule a personalized demo and discover why thousands of businesses trust BEET POS for their operations.",
    openGraph: {
        title: "Request a Demo - BEET POS",
        description: "Schedule a personalized demo and see how BEET POS can transform your business.",
        images: ['/images/hero/beetpos.png'],
    },
};

export default function RequestDemoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
