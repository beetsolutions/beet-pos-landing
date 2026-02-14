import {Metadata} from "next";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
    title: "Resources",
    description: "Helpful resources, guides, and tools to get the most out of your BEET POS system. Access training materials, video tutorials, and best practices.",
    openGraph: {
        title: "Resources - BEET POS",
        description: "Helpful resources, guides, and tools to get the most out of your BEET POS system.",
        images: ['/images/hero/beetpos.png'],
    },
};

export default function ResourcesPage() {
    return <ResourcesClient />;
}
