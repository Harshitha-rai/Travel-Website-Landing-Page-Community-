export const AboutUs = () => {
    return (
        <div className="top-430 md:top-480 absolute w-full flex items-center justify-center flex-wrap flex-row">
            <div className="flex flex-col gap-3 w-[100px] md:w-[400px]">
                <span className="text-[#5E6282] font-semibold text-xs md:text-base">TESTIMONIALS</span>
                <span className="font-bold text-lg md:text-5xl text-wrap">What people say
                about Us.</span>
                <div className="flex gap-6 mt-10">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                </div>
            </div>
            <div >
                <div className="w-[250px] md:w-[504px] h-[245px] bg-white shadow-md p-10 flex flex-col">
                    <p className="text-[#5E6282] font-medium text-sm md:text-base text-wrap">“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                    <span className="text-[#5E6282] font-semibold text-sm md:text-lg text-wrap">Mike taylor</span>
                    <span className="text-[#5E6282] font-medium text-xs md:text-sm text-wrap">Lahore, Pakistan</span>
                </div>
            </div>
        </div>
    )
}