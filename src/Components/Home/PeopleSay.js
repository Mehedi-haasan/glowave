import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Star from "../Assets/Icon/Star";

const PeopleSay = () => {

    const clients = [
        {
            name: "Abdul Halim",
            designation:"Dermatologist",
            image: "https://img.freepik.com/free-photo/pleased-hipster-male-adult-points-with-index-finger-upper-right-corner-dressed-stylish-clothes_273609-23572.jpg?w=1380&t=st=1688669735~exp=1688670335~hmac=0f2fc9eed3eeed19eb64b6edfaf3e2ea1d536bf2c6d1fcb8e2336b2de205e6fe",
            review: "After using this serum for just a week, I noticed a significant improvement in my skin’s texture and radiance. As a dermatologist, I highly recommend it.",
            rate: 5
        },
        {
            name: "John Abraham",
            designation:"Dermatologist",
            image: "https://img.freepik.com/free-photo/serious-pleasant-looking-hipster-with-afro-hairstyle_273609-17457.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=sph",
            review: "This moisturizer is a game changer! My skin feels soft and hydrated all day. I’ve incorporated it into my daily routine and can’t imagine living without it!",
            rate: 4
        },
        {
            name: "Necola Mandana",
            designation:"Dermatologist",
            image: "https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=sph",
            review: "I’ve tried countless products over the years, but nothing compares to this! My skin has never looked so clear and vibrant!",
            rate: 5
        },
        {
            name: "Sheikh Shakil",
            designation:"Dermatologist",
            image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.2.1402415944.1685737805&semt=sph",
            review: "Impressive work! They understand the market and provided excellent solutions.",
            rate: 4
        },
        {
            name: "Ashok Mredha",
            designation:"Dermatologist",
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
    return <div className="px-5 md:px-10 lg:px-28 xl:px-44 2xl:px-[300px] py-14">
        <h1 className="text-center py-5">Testimonials</h1>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[72px] leading-[108px] text-center text-[#262626] font-mollie">What People Saying</h1>


        <div className="py-5">
            <Slider {...settings}>
                {clients.map((client) => (
                    <div className="mx-5">
                        <div className=" p-5 w-[380px]">
                            <div className="h-[60px] w-[60px] rounded-full mx-auto">
                                <img
                                    src={client.image}
                                    alt="image3"
                                    className="h-[60px] w-[60px] rounded-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex justify-center items-center gap-1 mx-auto w-[116px] py-3">
                                    {[1, 2, 3, 4, 5].map((rat) => (

                                        <Star className={`${client.rate >= rat ? 'text-[#FFA329]' : 'text-black'}`} />
                                    ))}
                                </div>
                                <p className=" p-1 w-[330px] text-center mx-auto">{client.review}</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h1 className="text-[24px] font-semibold">{client?.name}</h1>
                                <p>{client?.designation}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
}

export default PeopleSay