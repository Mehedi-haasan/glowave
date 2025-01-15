const Work = () => {
    let image = 'https://s3-alpha-sig.figma.com/img/dff8/8fc7/63111de24f9780c84f50ba64bd3a2b2f?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADrTYbo1n0z3HFkC5XjueykO-0t3TPVjicqWObg1E1bZ~BHIGFJQvtNfyei6WHABTpd04khHlDjALLXT14LsB~UKYv1nX0l3P10Pmk8ikk91-73y41HN5sAl8JcM3xmlh48fwxq-LYaQtGvcmOOdee56iuc6xOQOdhqKaMX85jq87QjEXTIGdeTEN5iqSlk3MgPO27kPfuv-FIZe2k~pbCBcbq7PrPqcyjT-Dqyla4vTJm61w7FlaYEnhKRlfpn3wzRw3SzKHMs1minKE0cMEm8aft-zju~xkTP9VQc3A~0KdOcEejzqPNLql5tbpTGlEetYEt~EM-iA~9BCZi24ag__'

    return (
        <div className="bg-white p-16 px-5 md:px-10 lg:px-28 xl:px-44 2xl:px-[300px]">
            <h1 className="text-center py-8 text-[24px] leading-[28px] font-lato">Product Category</h1>


            <div className="flex justify-evenly items-center">
                <div className="relative max-w-[329px]">
                    <p className="absolute -right-4 -top-3 text-3xl">10</p>
                    <h1 className="text-[#1C1C1C] text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[72px] font-mollie">Cleansers</h1>
                </div>

                <div className="relative max-w-[405px]">
                    <p className="absolute -right-4 -top-3 text-3xl">16</p>
                    <h1 className="text-[#1C1C1C] text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[72px] font-mollie">Moisturizers</h1>
                </div>

                <div className="relative max-w-[231px]">
                    <p className="absolute -right-4 -top-3 text-3xl">23</p>
                    <h1 className="text-[#1C1C1C] text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[72px] font-mollie">Masks</h1>
                </div>


            </div>


            <div className="flex justify-evenly items-center py-8 mt-8">

                <div className="relative max-w-[392px] bg-cover bg-center " >
                    <div className="mt-2"
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            transform: 'translate(-50%, -50%) rotate(40deg)',
                            height: '203px',
                            width: '392px',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                        }}
                    >
                        <p className="absolute right-[70px] -top-[68px] text-3xl z-40 -rotate-[40deg]">54</p>
                        <h1 className="pt-12 text-[#45726C] text-2xl md:text-3xl -rotate-[40deg] lg:text-4xl xl:text-5xl 2xl:text-[72px] font-mollie z-40">Sunscreens</h1>
                    </div>
                </div>



                <div className="relative max-w-[275px]">
                    <p className="absolute -right-4 -top-3 text-3xl">34</p>
                    <h1 className="text-[#1C1C1C] text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[72px] font-mollie">Serums</h1>
                </div>




            </div>

        </div>
    )
}
export default Work