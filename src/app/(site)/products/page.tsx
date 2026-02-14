import NotFound from "@/components/NotFound";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Products",
    description: "Explore BEET POS features and products. From point of sale to inventory management, loyalty programs, and payment processing - everything you need to run your business.",
    openGraph: {
        title: "Products - BEET POS",
        description: "Explore BEET POS features and products. Everything you need to run your business.",
        images: ['/images/hero/beetpos.png'],
    },
};

const ProductsPage = () => {
    return (
        <>
            <NotFound/>
        </>
    );
};

export default ProductsPage;