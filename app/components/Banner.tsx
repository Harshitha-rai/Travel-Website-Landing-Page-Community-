import Image from "next/image";

import PlayButton from "../../public/Play button.png";
import Plane from "../../public/plane.png";

export const Banner = () => {
    return (
        <div className="p-1 mt-20 flex absolute items-center justify-center w-full">
          <div className="w-[300px] md:w-[545px] flex flex-col gap-3 text-wrap">
            <span className="text-[#DF6951] font-bold font-sans text-sm md:text-base">BEST DESTINATIONS AROUND THE WORLD </span>
            <p className="font-serif  text-2xl md:text-7xl font-bold  text-wrap">Travel, enjoy and live a new and full life</p>
            <p className="text-[#5E6282] font-sans text-sm md:text-base">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
            <div className="flex gap-2 items-center ">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded md:text-base text-xs">Find out more</button>
              <div className="text-[#5E6282] text-xs md:text-sm flex items-center justify-center"><Image src={PlayButton} width={55} height={55} alt="play button" className="mt-3"/> Play Demo</div>
            </div>
          </div>
          <div >
            <Image src={Plane} width={137} height={95} alt="Plane Image" className="md:w-[137px] md:h-[95px] w-[70px] h-[45px]"/>
            <div className="md:ml-80 ml-10">
            <Image src={Plane} width={137} height={95} alt="Plane Image" className="md:w-[137px] md:h-[95px] w-[70px] h-[45px]"/>
            </div>
          </div>
        </div>
    )
}