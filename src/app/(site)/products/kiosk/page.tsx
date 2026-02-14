import NotFound from "@/components/NotFound";
import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Self-Service Kiosk",
    description: "Empower your customers with BEET POS self-service kiosks. Reduce wait times, increase order accuracy, and boost sales with intuitive ordering technology.",
    openGraph: {
        title: "Self-Service Kiosk - BEET POS",
        description: "Reduce wait times and increase order accuracy with BEET POS self-service kiosks.",
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
                                KIOSK
                            </h1>
                            <h1 className="text-2xl lg:text-5xl font-semibold mb-5 text-black dark:text-white md:4px lg:text-start text-center">
                                Eliminate Long Lines and Mismanaged Orders
                            </h1>
                            <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>Struggling with long lines, order mistakes, or overwhelmed staff? Switch to Modisoft’s Self-Service Kiosk. Designed for retail stores or restaurants, it simplifies order processing, reduces errors, and improves customer satisfaction.</p>
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
                            <Image src="/images/hero/kiosk.webp" alt="nothing" width={1000} height={805} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductsPage;