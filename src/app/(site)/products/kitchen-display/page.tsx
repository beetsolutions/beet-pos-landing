import NotFound from "@/components/NotFound";
import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Kitchen Display System",
    description: "Streamline your kitchen operations with BEET POS Kitchen Display System. Real-time order management, reduce errors, improve communication, and speed up service.",
    openGraph: {
        title: "Kitchen Display System - BEET POS",
        description: "Streamline kitchen operations with real-time order management and improved communication.",
        images: ['/images/hero/beetpos.png'],
    },
};

const ProductsPage = () => {
    return (
        <>
            <section className='bg-gray-50 dark:bg-gray-700'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                    <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
                        <div className='col-span-6'>
                            <h1 className="text-1xl lg:text-3xl font-light mb-5 text-black dark:text-white md:4px lg:text-start text-center">
                                Kitchen Display System
                            </h1>
                            <h1 className="text-3xl lg:text-5xl font-semibold mb-5 text-black dark:text-white md:4px lg:text-start text-center">
                                Serve Up Efficiency with a Kitchen Display System
                            </h1>
                            <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>Running a kitchen that’s packed with orders can be overwhelming. Our Kitchen Display System is designed to make your kitchen operations flow smoothly, helping you handle the lunch rush with ease.</p>
                            <div className='md:flex align-middle justify-center lg:justify-start'>
                                <Link href='#cook-section' className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-primary hover:text-primary lg:px-14 mr-6 border border-primary hover:bg-transparent'>Get a Demo</Link>
                                <Link href='#about-section' className='flex border w-full md:w-auto mt-5 md:mt-0 border-primary justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-primary hover:text-white hover:bg-primary'>See Pricing</Link>
                            </div>
                        </div>
                        <div className='col-span-6 flex justify-center relative'>
                            {/*<div className='flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute'>*/}
                            {/*    <Image src={'/images/hero/pizza.svg'} alt="pizza-image" width={68} height={68} />*/}
                            {/*    <p className='text-lg font-normal'>More than 500+ <br /> recipes.</p>*/}
                            {/*</div>*/}
                            <Image src="/images/hero/kitchen-extension.png" alt="nothing" width={1000} height={805} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductsPage;