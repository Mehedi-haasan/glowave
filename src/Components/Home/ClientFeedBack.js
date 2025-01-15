import Image from "next/image"
import glov from '../Assets/Image/glov.png'

const ClientFeedBack = () => {
    return (
        <div className="px-5 md:px-10 lg:px-28 xl:px-44 2xl:px-[300px] ">
            <div className="py-10 bg-[#FFFFFF]  px-7">

                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[72px] leading-[108px] text-[#262626] text-center py-12 font-mollie">Our Story</h1>

                <div className="relative max-h-[766px] overflow-hidden">
                    <div className="h-[766px] -rotate-[29deg] absolute top-1/2 right-0 left-0 opacity-40 bg-white">

                    </div>
                    <Image src={glov} alt="ryt" height={1000} width={1000} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[425px] max-w-[458px] -rotate-[15deg]"/>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[128px] leading-[153px] text-center font-mollie">skincare should be<br/> kind, both to your<br/> skin and to the<br/> environment.</h1>
                </div>

                <div className="flex justify-center items-center">
                <div className="flex justify-start items-center gap-5 pt-6">
                    <button className="bg-[#45726C] leading-[23px] px-6 py-4 rounded-full text-[#FFFFFF]">Learn More</button>
                    <button className="leading-[23px] px-6 py-4 rounded-full border flex justify-start items-center gap-2">See All Product</button>
                </div>
                </div>
            </div>
        </div>

    )
}
export default ClientFeedBack