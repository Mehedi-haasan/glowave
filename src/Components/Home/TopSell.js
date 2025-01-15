import Card from "./Card"

const TopSell = () => {
    const products =[
        {
            id:1,
            image_url:'https://s3-alpha-sig.figma.com/img/4a33/64f5/93d56a32e0e4b199884cf8e47b2b0b74?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YTVEO5ApcUxhTOHf87rQ4vdffsfxkj92VlIek7NLfMdYz3g-56Qk56WO4DPE-w1rC7KQBCPeYP42BidZX16B3cFNZt4rfrTavzRCyQXbcZpVr73IVzy9Dy328aB19NPcwekqpA2GITGuao13Z3dNPJWKRGh3ToD7zVEpORhwwefgqInkAivsSnygi17U2UOJghpV3EZDikjCEk5WmPt5KPMBP-V-8hcckB2aD49zmzTZOppQ2UoRs1t-UqgMWTguI4TLfz33lo0tP5IW28C66zVCfDm-EEd5JaXUEte9C8AH1NNRtIf5xWjzdxRbh9n2Cs9zVnvQ2qJkgm51yrCdjA__',
            name:"Moisturizers",
            uses:"Detox Charcoal Mask",
            price:'32'
        },
        {
            id:2,
            image_url:'https://s3-alpha-sig.figma.com/img/7051/c2e9/733506e25f96bebb813d67638c305519?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VkPW8IXiJdQOZvs~unhSlR7zz4n7MKxysa7XOu7PJcwPUAwioumPU~DjwUHjegE8sVa3u00S3CdMDeqa1dB9T4VzE98ZafR5cIlX-N~mp3ooDu-c9GDEW0l0ytjFSb4cw3Z6GijGekIu93POkbwManRovFobOkGqwLg2U6eD6sEI12E-KcuTNVe~9keNJmqTUpxNdl2qCkt7g0RmYPRzhkX7YMrighdMO0jZ9US5bWAAO4fxoBY43fXxbEGhSed2YF2DYLhbIQ-3~hSuvsG7-lwwUkFFtmTv8Ac-Drb2S1HCFbgmS-yDDp6Tw4LyVfuJlIlmlgZnsePOeAX5SVPCCQ__',
            name:"Moisturizers",
            uses:"Detox Charcoal Mask",
            price:'32'
        },
        {
            id:3,
            image_url:'https://s3-alpha-sig.figma.com/img/f96b/ba5e/2a3463492cdd2ba95f29ab88a278dc33?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nX2TQXr3Bm3Mhg8azz0Qx27bK7Cy9TJSHqXuM21X0~NXbcVYXW~umieVPOvbwWB6tPFURASkCDHBDmfi3pnhItOTKMKPEvvlqw8zIx~HiM2oWa2hA4WPdd5DZ9iH0NFGVIMzaEVotzuIRvYm0CIA98Zqfdyn-HXwvSywBB3Y2NQB8kGLPNIL87-lLl7ftDEi9tE3OSmoVPtY6LVs5E1jlHAet5RQVc~JWgqDtuArWx2wlJHjUUvehLoGpym0eDfp8SQELu6hYfbMd7Rj83JHrqSMhAfE~ziuYV0GEVO~IspN7FGXirDUGgLM~NLbGkaYEh-N-lSzifELSMcfLEp6MQ__',
            name:"Moisturizers",
            uses:"Detox Charcoal Mask",
            price:'32'
        }
        ,
        {
            id:4,
            image_url:'https://s3-alpha-sig.figma.com/img/7ba1/076a/e7f9bf3565137c77d9ffcd8f710f987d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LlvBk4ZIVY5FuTVFoudSjJV-zdJIY-CueK5njWnU8zDdvOLdiL4ygxhE9lT72ZZb-Ul165zqBYgwsNVpQDicBt-33xMCKJsSHzzX98whCggSfTquxxio5F0yJJFb4M4dFxgPmTaVevh2CC8~ubeSmtmRIN7BY7M9QCHdipvwiQ65zBM~88IoPtU781qve4ou3Fq7K~0MX9ne2q6y-xVz8ykK3OFgMhMqWiQtTDWVZ3UWxtVrP6N6i1v344kiyTP35p-gYO5VyybSmcW5oDWmLoEszeojrz~rtHouQbW3anGKPpx~Ao3Nso~C8vLEwvOADV9zjRRXZ8qOYVobMAu6Lw__',
            name:"Moisturizers",
            uses:"Detox Charcoal Mask",
            price:'32'
        },
        {
            id:5,
            image_url:'https://s3-alpha-sig.figma.com/img/4a33/64f5/93d56a32e0e4b199884cf8e47b2b0b74?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YTVEO5ApcUxhTOHf87rQ4vdffsfxkj92VlIek7NLfMdYz3g-56Qk56WO4DPE-w1rC7KQBCPeYP42BidZX16B3cFNZt4rfrTavzRCyQXbcZpVr73IVzy9Dy328aB19NPcwekqpA2GITGuao13Z3dNPJWKRGh3ToD7zVEpORhwwefgqInkAivsSnygi17U2UOJghpV3EZDikjCEk5WmPt5KPMBP-V-8hcckB2aD49zmzTZOppQ2UoRs1t-UqgMWTguI4TLfz33lo0tP5IW28C66zVCfDm-EEd5JaXUEte9C8AH1NNRtIf5xWjzdxRbh9n2Cs9zVnvQ2qJkgm51yrCdjA__',
            name:"Moisturizers",
            uses:"Detox Charcoal Mask",
            price:'32'
        },
        {
            id:6,
            image_url:'https://s3-alpha-sig.figma.com/img/7051/c2e9/733506e25f96bebb813d67638c305519?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VkPW8IXiJdQOZvs~unhSlR7zz4n7MKxysa7XOu7PJcwPUAwioumPU~DjwUHjegE8sVa3u00S3CdMDeqa1dB9T4VzE98ZafR5cIlX-N~mp3ooDu-c9GDEW0l0ytjFSb4cw3Z6GijGekIu93POkbwManRovFobOkGqwLg2U6eD6sEI12E-KcuTNVe~9keNJmqTUpxNdl2qCkt7g0RmYPRzhkX7YMrighdMO0jZ9US5bWAAO4fxoBY43fXxbEGhSed2YF2DYLhbIQ-3~hSuvsG7-lwwUkFFtmTv8Ac-Drb2S1HCFbgmS-yDDp6Tw4LyVfuJlIlmlgZnsePOeAX5SVPCCQ__',
            name:"Moisturizers",
            uses:"Detox Charcoal Mask",
            price:'32'
        },
        {
            id:7,
            image_url:'https://s3-alpha-sig.figma.com/img/f96b/ba5e/2a3463492cdd2ba95f29ab88a278dc33?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nX2TQXr3Bm3Mhg8azz0Qx27bK7Cy9TJSHqXuM21X0~NXbcVYXW~umieVPOvbwWB6tPFURASkCDHBDmfi3pnhItOTKMKPEvvlqw8zIx~HiM2oWa2hA4WPdd5DZ9iH0NFGVIMzaEVotzuIRvYm0CIA98Zqfdyn-HXwvSywBB3Y2NQB8kGLPNIL87-lLl7ftDEi9tE3OSmoVPtY6LVs5E1jlHAet5RQVc~JWgqDtuArWx2wlJHjUUvehLoGpym0eDfp8SQELu6hYfbMd7Rj83JHrqSMhAfE~ziuYV0GEVO~IspN7FGXirDUGgLM~NLbGkaYEh-N-lSzifELSMcfLEp6MQ__',
            name:"Moisturizers",
            uses:"Detox Charcoal Mask",
            price:'32'
        }
        ,
        {
            id:8,
            image_url:'https://s3-alpha-sig.figma.com/img/7ba1/076a/e7f9bf3565137c77d9ffcd8f710f987d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LlvBk4ZIVY5FuTVFoudSjJV-zdJIY-CueK5njWnU8zDdvOLdiL4ygxhE9lT72ZZb-Ul165zqBYgwsNVpQDicBt-33xMCKJsSHzzX98whCggSfTquxxio5F0yJJFb4M4dFxgPmTaVevh2CC8~ubeSmtmRIN7BY7M9QCHdipvwiQ65zBM~88IoPtU781qve4ou3Fq7K~0MX9ne2q6y-xVz8ykK3OFgMhMqWiQtTDWVZ3UWxtVrP6N6i1v344kiyTP35p-gYO5VyybSmcW5oDWmLoEszeojrz~rtHouQbW3anGKPpx~Ao3Nso~C8vLEwvOADV9zjRRXZ8qOYVobMAu6Lw__',
            name:"Moisturizers",
            uses:"Detox Charcoal Mask",
            price:'32'
        }
    ]
    return <div className="px-5 md:px-10 lg:px-28 xl:px-44 2xl:px-[300px]">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[72px] leading-[108px] text-[#262626] text-center py-12 font-mollie">Top Selling Product</h1>
            <button className="bg-[#45726C] leading-[23px] px-6 py-4 rounded-full text-[#FFFFFF]">Learn More</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {
                products?.map((product)=>{
                    return <Card product={product}/>
                })
            }
        </div>
    </div>
}

export default TopSell