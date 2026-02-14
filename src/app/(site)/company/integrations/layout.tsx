import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Integrations",
    description: "Connect BEET POS with the tools you already use. Seamless integrations with payment processors, accounting software, delivery platforms, and more.",
    openGraph: {
        title: "Integrations - BEET POS",
        description: "Connect BEET POS with your favorite business tools. Seamless integrations with leading platforms.",
        images: ['/images/hero/beetpos.png'],
    },
};

export default function IntegrationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
