"use client"
import Slider from "react-slick";
import React, { useMemo } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {HardwareData} from "@/app/api/data";

const HardwareSlider = () => {
    const settings = useMemo(() => ({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }), []);

    return (
        <section className="bg-primary/15" role="region" aria-label="Hardware products carousel">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md'>
                {HardwareData?.length > 0 ? (
                    <Slider {...settings}>
                        {HardwareData.map((items, index) => (

                            <div key={`hardware-${index}`} className="bg-amber-400 container rounded-3xl mx-auto lg:max-w-screen-xl md:max-w-screen-md">

                                <div className='grid grid-cols-1 lg:grid-cols-12 my-16 mx-8'>

                                    <div className='col-span-6 flex flex-col justify-center'>
                                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white text-start">
                                            {items.profession}
                                        </h2>
                                        <p className='text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-2'>
                                            {items.name}
                                        </p>
                                        <button 
                                            className='text-xl font-medium rounded-full text-white py-5 px-6 bg-primary lg:px-10 mr-6 w-fit border border-primary hover:bg-transparent hover:text-primary'
                                            aria-label={`Request a demo for ${items.profession}`}
                                        >
                                            Request a Demo
                                        </button>
                                    </div>

                                    <div className='col-span-6 flex justify-start'>
                                        <Image 
                                            src={items.imgSrc} 
                                            alt={`${items.profession} product image`}
                                            width={636} 
                                            height={808}
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <p className='text-center py-10'>No hardware data available</p>
                )}
            </div>
        </section>
    )
}

export default HardwareSlider;
