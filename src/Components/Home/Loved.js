import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image'
import right from '../Assets/Image/right.png'
import left from '../Assets/Image/left.png'


const Loved = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const clients = [
        {
            name: "Abdul Halim",
            designation: "Dermatologist",
            image: "https://img.freepik.com/free-photo/pleased-hipster-male-adult-points-with-index-finger-upper-right-corner-dressed-stylish-clothes_273609-23572.jpg?w=1380&t=st=1688669735~exp=1688670335~hmac=0f2fc9eed3eeed19eb64b6edfaf3e2ea1d536bf2c6d1fcb8e2336b2de205e6fe",
            review: "After using this serum for just a week, I noticed a significant improvement in my skin’s texture and radiance. As a dermatologist, I highly recommend it.",
            rate: 5
        },
        {
            name: "John Abraham",
            designation: "Dermatologist",
            image: "https://img.freepik.com/free-photo/serious-pleasant-looking-hipster-with-afro-hairstyle_273609-17457.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=sph",
            review: "This moisturizer is a game changer! My skin feels soft and hydrated all day. I’ve incorporated it into my daily routine and can’t imagine living without it!",
            rate: 4
        },
        {
            name: "Necola Mandana",
            designation: "Dermatologist",
            image: "https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=sph",
            review: "I’ve tried countless products over the years, but nothing compares to this! My skin has never looked so clear and vibrant!",
            rate: 5
        },
        {
            name: "Sheikh Shakil",
            designation: "Dermatologist",
            image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.2.1402415944.1685737805&semt=sph",
            review: "Impressive work! They understand the market and provided excellent solutions.",
            rate: 4
        },
        {
            name: "Ashok Mredha",
            designation: "Dermatologist",
            image: "https://img.freepik.com/premium-photo/portrait-businessman-grunge-style_743855-18797.jpg?size=626&ext=jpg&ga=GA1.2.1402415944.1685737805&semt=sph",
            review: "Fantastic service and exceptional results. Highly recommended for small businesses!",
            rate: 5
        },
    ];

    var settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const nextState = () => {
        sliderRef.current.slickNext();
    }

    const prevState = () => {
        sliderRef.current.slickPrev();
    }

    return <div className="py-16 bg-[#FCFAF0] relative">
        <h1 className="text-center py-4">Video Review</h1>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[72px] leading-[108px] text-center text-[#262626] font-mollie">Loved by Influencers </h1>
        <Image src={right} alt='rgkjoi' height={1000} width={1000} className='absolute top-0 right-0 w-[376px] h-[436px]' />
        <Image src={left} alt='rgkjoi' height={1000} width={1000} className='absolute left-0 bottom-0 w-[376px] h-[436px]' />




        <div className="py-5 px-5 md:px-10 lg:px-28 xl:px-44 2xl:px-[300px]">
            <Slider {...settings} ref={sliderRef}>
                {clients.map((client, index) => {
                    return (
                        <div className={`px-0`} key={index}>
                            <div className="p-5 w-full relative">
                                <svg
                                    width="94"
                                    height="94"
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    viewBox="0 0 94 94"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g filter="url(#filter0_b_1_563)">
                                        <circle cx="47" cy="47" r="47" fill="white" fillOpacity="0.2" />
                                    </g>
                                    <path
                                        d="M70 43.0359C72.6667 44.5755 72.6667 48.4245 70 49.9641L39.25 67.7176C36.5833 69.2572 33.25 67.3327 33.25 64.2535L33.25 28.7465C33.25 25.6673 36.5833 23.7428 39.25 25.2824L70 43.0359Z"
                                        fill="white"
                                    />
                                    <defs>
                                        <filter
                                            id="filter0_b_1_563"
                                            x="-4"
                                            y="-4"
                                            width="102"
                                            height="102"
                                            filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB"
                                        >
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_563" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_563" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>

                                <div className="flex justify-start items-center gap-5 absolute left-10 bottom-10">
                                    <div>
                                        <Image
                                            src={`https://s3-alpha-sig.figma.com/img/f706/4029/073f9d8a4556c882b8432fad224e0af1?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YkBfbIpgsE6AV2yRtp1Bf-JyRL~Wre4nUaADDiRxVlHFOJcDKodjKVdt1w78kAgSMGobTElKuGVtzhrTFTD3-bgMD0LvfCFlQDDGZzrtKJ5T~BTU8IsX8Lu4ITc7fZ6denzQaeMDsZY9j6S~xTQmVRJPLWKsxhLGimVcPRCJ7uF-tyUiumXhks9DjwY9H1PwZafqDa0ja1vwYbDxqSkwV-xhGUr62HS7wfWJBq8gA4UZGVvrmeMNjBlifFq58JwiB4Zg6I1FeJwK8hOmQGC1oSPZ17gN3ecngwn65GQzK~GHMyJv7QNl20r1LW6NfWuCKyZF9WAo4UBOpuRsjMlVbQ__`}
                                            alt="rgkjoi"
                                            height={1000}
                                            width={1000}
                                            className="rounded-full w-[70px] h-[70px]"
                                        />
                                    </div>
                                    <div>
                                        <h1 className="text-[20px] leading-[24px] text-white">Evelyn Bennett</h1>
                                        <p className="text-[14px] leading-[16px] text-white pt-1.5 font-lato">Product Manager</p>
                                    </div>
                                </div>

                                <Image
                                    src={`https://s3-alpha-sig.figma.com/img/a5a6/0b88/5ae6f95e87056cd0b7077977bdb21249?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l4e3FDi2L2OpPZRL6pfN-dFei8rzmMB2E0JBa0F664e~Q9RNRWBsobIdty2D4bFrlGh~onf0FTZRTlfsoPio1C-nR2DYjW8wdteLQHZpP9yW2Nb9KzycmEIAad3EGtvLucoVlDG7~kBqRnLDoTC9ApjZOAVKuELwn0gf6Od4e3BFkadQelxyxrZO0ECzuBppAfCZzdX4ySyoOOkE0yRAOSd-GiQB3YW2Kqj4wYMf0BFFbWvafluXebfgGyEWwM-wqwtJL4tmruUGRygM-nYG7hVZVRuI8l8NQzKYsd4qcOPNzt4AT~e39bIrTdxQdxfTsb33BVMOLbZPyQ4iPzm21A__`}
                                    alt="rgkjoi"
                                    height={1000}
                                    width={1000}
                                    className={`w-full ${currentIndex + 1 === index ? "h-[520px]" : "h-[436px] mt-10"} rounded-xl`}
                                />
                            </div>
                        </div>
                    );
                })}
            </Slider>

            <div className="flex justify-center items-center gap-5">

                <svg width="56" height="56" onClick={prevState} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.7177 33.2806L23.7954 39.4679C24.2123 39.8913 24.8914 39.8978 25.3148 39.4808C25.7382 39.0639 25.7446 38.3848 25.3277 37.9593L19.2435 31.7655C18.8417 31.3636 18.2807 30.749 17.7069 30.1021C17.4254 29.784 17.2255 29.4229 17.0923 29.0426L39.4517 29.0426C40.0449 29.0426 40.5263 28.5612 40.5263 27.968C40.5263 27.3748 40.0449 26.8934 39.4517 26.8934L17.0923 26.8934C17.2277 26.513 17.4254 26.152 17.7091 25.8339C18.2807 25.187 18.8417 24.5724 19.25 24.164L25.3277 17.9767C25.7446 17.5533 25.7382 16.8721 25.3148 16.4551C25.1042 16.251 24.8334 16.1478 24.5605 16.1478C24.2832 16.1478 24.0039 16.2553 23.7954 16.468L17.7241 22.6489C17.2986 23.0744 16.7033 23.7235 16.0994 24.4069C14.3006 26.4357 14.3006 29.496 16.0994 31.5248C16.7054 32.2082 17.3007 32.8594 17.7177 33.2763L17.7177 33.2806Z" fill="#9E9E9E" />
                    <path d="M2.44784e-06 28C3.79974e-06 12.536 12.536 1.49563e-08 28 1.36686e-06C43.464 2.71876e-06 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 1.09593e-06 43.464 2.44784e-06 28ZM53.8636 28C53.8636 13.7159 42.2841 2.13637 28 2.13637C13.7159 2.13637 2.13638 13.7159 2.13637 28C2.13637 42.2841 13.7159 53.8636 28 53.8636C42.2841 53.8636 53.8636 42.2841 53.8636 28Z" fill="#D9D9D9" />
                </svg>

                <svg width="56" height="56" onClick={nextState} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.2823 22.7194L32.2046 16.5321C31.7877 16.1087 31.1086 16.1022 30.6852 16.5192C30.2618 16.9361 30.2554 17.6152 30.6723 18.0407L36.7564 24.2345C37.1583 24.6364 37.7193 25.251 38.2931 25.8979C38.5746 26.216 38.7745 26.5771 38.9077 26.9574H16.5482C15.9551 26.9574 15.4737 27.4389 15.4737 28.032C15.4737 28.6252 15.9551 29.1066 16.5482 29.1066H38.9077C38.7723 29.487 38.5746 29.848 38.2909 30.1661C37.7193 30.813 37.1583 31.4276 36.75 31.836L30.6723 38.0233C30.2554 38.4467 30.2618 39.1279 30.6852 39.5449C30.8958 39.749 31.1666 39.8522 31.4395 39.8522C31.7168 39.8522 31.9961 39.7447 32.2046 39.532L38.2759 33.3511C38.7014 32.9256 39.2967 32.2765 39.9006 31.5931C41.6994 29.5643 41.6994 26.504 39.9006 24.4752C39.2946 23.7918 38.6993 23.1406 38.2823 22.7237V22.7194Z" fill="#9E9E9E" />
                    <path d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28ZM2.13637 28C2.13637 42.2841 13.7159 53.8636 28 53.8636C42.2841 53.8636 53.8636 42.2841 53.8636 28C53.8636 13.7159 42.2841 2.13637 28 2.13637C13.7159 2.13637 2.13637 13.7159 2.13637 28Z" fill="#D9D9D9" />
                    <path d="M55.8625 25.2287C56.4106 30.7394 55.3123 36.2889 52.7065 41.1753C50.1007 46.0618 46.1043 50.0658 41.2229 52.6811C36.3414 55.2963 30.7941 56.4053 25.2823 55.8678C19.7706 55.3303 14.542 53.1705 10.2578 49.6614C5.97361 46.1523 2.82617 41.4516 1.21351 36.1538C-0.399154 30.8559 -0.4046 25.1988 1.19786 19.8978C2.80032 14.5969 5.93871 9.89013 10.2162 6.37282C14.4936 2.85551 19.718 0.685596 25.2287 0.137483L25.4404 2.26589C20.3507 2.77213 15.5254 4.77628 11.5747 8.02491C7.62396 11.2735 4.72531 15.6207 3.24526 20.5167C1.76521 25.4128 1.77024 30.6377 3.25971 35.5309C4.74919 40.4241 7.6562 44.7657 11.6131 48.0067C15.5701 51.2477 20.3993 53.2425 25.4899 53.739C30.5806 54.2354 35.7042 53.2112 40.2128 50.7957C44.7213 48.3802 48.4124 44.6821 50.8192 40.1689C53.2259 35.6557 54.2404 30.5301 53.7341 25.4404L55.8625 25.2287Z" fill="#7E7E7E" />
                </svg>


            </div>
        </div>

    </div>
}

export default Loved