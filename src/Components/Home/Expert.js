import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card'

const Expert = ({ text,ml }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const clients = [
        {
            id:1,
            image_url:'https://s3-alpha-sig.figma.com/img/3080/ca4e/199fef9943a1d0472161b6177eafb6fc?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hDYZvhrL7VH~uhv2igghrEXqJsaVi0SPgYaA8h2Ck9Ha~3~fxzo5dcS1nRsm4GHOUA75x6yfPXDhd~c~haf~yJiGYv4HXtNFl4driN7yjW0zwo3Gfl0ltORph3ldPTgmEEh3VsoIBzDSMZ8qt4iMe2e73aeJzoFihvVK4b4kqnon65h7CN7rJLkkUwbhyqcYc6vLhdaRv52OvFzcWheMViVQJw5-6J2QfiJ2TB~BYOuwUP744oABRE-GdEMKHEXWD9R5hcYlbNgJlFt2M3i8gGIkYc~4lPyVaOLwXLFhTtrm1g6aLaYvVn7-x-pXuYpr3tDUFrxq-YD8lILqxMyHqA__',
            name:"Moisturizers",
            uses:"Glow Guard Serum",
            price:'32'
        },
        {
            id:2,
            image_url:'https://s3-alpha-sig.figma.com/img/fe40/64fc/58d844b97afbca0f9353966de00fb425?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EquRCpU642bMIpF6haCH~d8Uq1hn1syTZTpHd2iad8eP5oUsuYjYfNZLMUcNQCNoa7Qrm5XuJ5umK9eZs7O2VvxCLdnb-HD4ajxurmEATAqLsrwfMyWpmE6sOmWZOY9~AzSxCquUusTttc4vg1xojvwNCCxiFqCw92UuTvpkKjA3K5f4R7yXzqXqmyS~8z4wJ7ScZ1hXZPSwuTPaLxUC6X87lPEkCXCgr6oh75xtIm3MuK6QCOgP2GuwUhiuvUt4RrVjVNz41Rqufq3iiWLBByzIQwYiQq85kF9CsYs~rU2XszRnoHuWeUoXBgtMvbKw~hQsTtdXJF3X1vuPk63axg__',
            name:"Cleansers",
            uses:"Glow Guard Serum",
            price:'32'
        },
        {
            id:3,
            image_url:'https://s3-alpha-sig.figma.com/img/6c59/d925/2ef1392e527decf1739ec8a37b5f794f?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NBVu2bO6dday7v3rARZRLe0lftnjkgvDPkQb6a3GVo7oPX0W~9bijg2ws224vtprAhww2xYxUPIZHgdCvEiT0rFsNldHu9dUqPw9b21V4iI1kWvQUfM8i5-RyWJs~vQZcKUIyILfZqRUHB2kl7y8d0znf6d33CMcGk1ZLYUDrMPpRegjY1ujl7Ek9Oko-HXgskrBHTn-xe8WP11MJy1mQI2KYZ-vJ5bUMG0w-Az-z~ycNvHjS-CvAvoFPq59pz0W7gWS2GUoOlw4xhXEHoGJtekX0OZqBkkdzviThv-X4vt47~S-5VywfFn4KNz7zMasu-WYUjQWEb1pqeDJkpdo-w__',
            name:"Masks",
            uses:"Glow Guard Serum",
            price:'32'
        }
        ,
        {
            id:4,
            image_url:'https://s3-alpha-sig.figma.com/img/bf2d/921d/9167f0f101e9f1b8e559cf47d774e460?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kxRFubvRaxN1L-yCWsF726TSfXUnqh4xH9yfPmib2qX~YtWT0rPq3ISfU7k9C2yMvGZb~BtKNnS7iIb-iz53Xp2FC2ESSjFbPkt4dhQrSD~Tas9zH8sGKkRV9KToKoApv9SplayWgRTQ29cqUg7bSQs7WixBdEXj71HDKE9TYIwLvTE23eTbWGVTzPMFL1zDYT9eAizSPVSnXWnxneZxgkcvBEcdIwL6mWhkIiYDws1XfeMy1vMJTzt-eMt84CYd~crSrab6WKraetQV5aXXKQYKqYOZlM2ruKA51aD-~bPCbNGfs6lM~sf0n1XsIUbh6UBTZDhdDpoaW70YWKv-iw__',
            name:"Serums",
            uses:"Glow Guard Serum",
            price:'32'
        },
    ];

    var settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 1500,
        slidesToShow: 4,
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
        <div className="bg-[#FCFAF0] py-12">
            <div className="flex justify-between items-center py-5 mb-6 px-5 md:px-10 lg:px-28 xl:px-44 2xl:px-[300px]">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[72px] leading-[108px] text-[#262626] font-mollie">{text}</h1>
                <div className="flex justify-end items-center gap-4">
                    <svg width="56" height="56" onClick={prevState} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7177 33.2806L23.7954 39.4679C24.2123 39.8913 24.8914 39.8978 25.3148 39.4808C25.7382 39.0639 25.7446 38.3848 25.3277 37.9593L19.2435 31.7655C18.8417 31.3636 18.2807 30.749 17.7069 30.1021C17.4254 29.784 17.2255 29.4229 17.0923 29.0426L39.4517 29.0426C40.0449 29.0426 40.5263 28.5612 40.5263 27.968C40.5263 27.3748 40.0449 26.8934 39.4517 26.8934L17.0923 26.8934C17.2277 26.513 17.4254 26.152 17.7091 25.8339C18.2807 25.187 18.8417 24.5724 19.25 24.164L25.3277 17.9767C25.7446 17.5533 25.7382 16.8721 25.3148 16.4551C25.1042 16.251 24.8334 16.1478 24.5605 16.1478C24.2832 16.1478 24.0039 16.2553 23.7954 16.468L17.7241 22.6489C17.2986 23.0744 16.7033 23.7235 16.0994 24.4069C14.3006 26.4357 14.3006 29.496 16.0994 31.5248C16.7054 32.2082 17.3007 32.8594 17.7177 33.2763L17.7177 33.2806Z" fill="#9E9E9E" />
                        <path d="M6.26253e-06 28C7.61444e-06 12.536 12.536 1.49563e-08 28 1.36686e-06C43.464 2.71876e-06 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 4.91063e-06 43.464 6.26253e-06 28ZM53.8636 28C53.8636 13.7159 42.2841 2.13637 28 2.13637C13.7159 2.13637 2.13638 13.7159 2.13638 28C2.13638 42.2841 13.7159 53.8636 28 53.8636C42.2841 53.8636 53.8636 42.2841 53.8636 28Z" fill="#D9D9D9" />
                    </svg>

                    <svg width="56" height="56" onClick={nextState} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.2823 22.7194L32.2046 16.5321C31.7877 16.1087 31.1086 16.1022 30.6852 16.5192C30.2618 16.9361 30.2554 17.6152 30.6723 18.0407L36.7565 24.2345C37.1583 24.6364 37.7193 25.251 38.2931 25.8979C38.5746 26.216 38.7745 26.5771 38.9077 26.9574H16.5483C15.9551 26.9574 15.4737 27.4389 15.4737 28.032C15.4737 28.6252 15.9551 29.1066 16.5483 29.1066H38.9077C38.7723 29.487 38.5746 29.848 38.2909 30.1661C37.7193 30.813 37.1583 31.4276 36.75 31.836L30.6723 38.0233C30.2554 38.4467 30.2618 39.1279 30.6852 39.5449C30.8958 39.749 31.1666 39.8522 31.4395 39.8522C31.7168 39.8522 31.9962 39.7447 32.2046 39.532L38.2759 33.3511C38.7014 32.9256 39.2967 32.2765 39.9006 31.5931C41.6994 29.5643 41.6994 26.504 39.9006 24.4752C39.2946 23.7918 38.6993 23.1406 38.2823 22.7237V22.7194Z" fill="#9E9E9E" />
                        <path d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28ZM2.13637 28C2.13637 42.2841 13.7159 53.8636 28 53.8636C42.2841 53.8636 53.8636 42.2841 53.8636 28C53.8636 13.7159 42.2841 2.13637 28 2.13637C13.7159 2.13637 2.13637 13.7159 2.13637 28Z" fill="#D9D9D9" />
                        <path d="M55.8625 25.2287C56.4106 30.7394 55.3123 36.2889 52.7065 41.1753C50.1007 46.0618 46.1043 50.0658 41.2229 52.6811C36.3414 55.2963 30.7941 56.4053 25.2823 55.8678C19.7706 55.3303 14.542 53.1705 10.2578 49.6614C5.97361 46.1523 2.82617 41.4516 1.21351 36.1538C-0.399154 30.8559 -0.4046 25.1988 1.19786 19.8978C2.80032 14.5969 5.93871 9.89013 10.2162 6.37282C14.4936 2.85551 19.718 0.685596 25.2287 0.137483L25.4404 2.26589C20.3507 2.77213 15.5254 4.77628 11.5747 8.02491C7.62396 11.2735 4.72531 15.6207 3.24526 20.5167C1.76521 25.4128 1.77024 30.6377 3.25971 35.5309C4.74919 40.4241 7.6562 44.7657 11.6131 48.0067C15.5701 51.2477 20.3993 53.2425 25.4899 53.739C30.5806 54.2354 35.7042 53.2112 40.2128 50.7957C44.7213 48.3802 48.4124 44.6821 50.8192 40.1689C53.2259 35.6557 54.2404 30.5301 53.7341 25.4404L55.8625 25.2287Z" fill="#7E7E7E" />
                    </svg>


                </div>
            </div>

            <div className={`${ml ? 'pl-5 md:pl-10 lg:pl-28 xl:pl-44 2xl:pl-[300px]': 'px-5 md:px-10 lg:px-28 xl:px-44 2xl:px-[300px]'}`}>

                <Slider {...settings} ref={sliderRef}>
                    {clients.map((client, index) => {
                        return (
                            <Card key={index} product={client} />
                        );
                    })}
                </Slider>
            </div>
        </div>
    )
}
export default Expert