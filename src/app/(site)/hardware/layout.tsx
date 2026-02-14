import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hardware",
    description: "Reliable POS hardware built for your business. Explore our range of terminals, payment devices, receipt printers, and accessories designed for demanding environments.",
    openGraph: {
        title: "Hardware - BEET POS",
        description: "Reliable POS hardware built for your business. Terminals, payment devices, and more.",
        images: ['/images/hero/hardware-1-1.webp'],
    },
};

export default function HardwareLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
