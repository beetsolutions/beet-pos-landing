import NotFound from "@/components/NotFound";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Products ",
};

const ProductsPage = () => {
    return (
        <>
            <NotFound/>
        </>
    );
};

export default ProductsPage;