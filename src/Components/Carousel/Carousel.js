import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import care from '../Assets/Image/Frame 1948755915.png'
import Image from "next/image";
import React, { useState, useRef } from "react";

const Carousel = () => {

    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
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

    return (
        <div className="slider-container">
            <Slider {...settings} ref={sliderRef}>
                <div className="mx-2">
                    <Image src={care} alt="gkdhf" height={1000} width={1000} className="h-[200px] w-full px-2" />
                </div>
                <div className="mx-2">
                    <Image src={care} alt="gkdhf" height={1000} width={1000} className="h-[200px] w-full px-2" />
                </div>
                <div className="mx-2">
                    <Image src={care} alt="gkdhf" height={1000} width={1000} className="h-[200px] w-full px-2" />
                </div>
                <div className="mx-2">
                    <Image src={care} alt="gkdhf" height={1000} width={1000} className="h-[200px] w-full px-2" />
                </div>
                <div className="mx-2">
                    <Image src={care} alt="gkdhf" height={1000} width={1000} className="h-[200px] w-full px-2" />
                </div>
                <div className="mx-2">
                    <Image src={care} alt="gkdhf" height={1000} width={1000} className="h-[200px] w-full px-2" />
                </div>
            </Slider>

        </div>
    );
};

export default Carousel;
