import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with BEET POS. Our team is here to answer your questions, provide support, and help you find the perfect POS solution for your business.",
    openGraph: {
        title: "Contact Us - BEET POS",
        description: "Get in touch with BEET POS. Our team is here to help you find the perfect solution.",
        images: ['/images/hero/beetpos.png'],
    },
};

export default function ContactUsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
