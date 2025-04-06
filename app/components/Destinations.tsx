import Image from "next/image";
import { IoIosSend } from "react-icons/io";

import Decore from '../../public/Decore2.png';

export const Destinations = () => {
    const cardItems = [
        {place: "Rome, Italy", trip: "10 Days Trip", price: "$5,42k"},
        {place: "London, UK", trip: "12 Days Trip", price: "$4.2k"},
        {place: "Full Europe", trip: "28 Days Trip", price: "$15k"},
    ]
    return (
        <div className="top-160 md:top-250 absolute w-full">
            <div className="flex justify-center items-center flex-col gap-2">
                <span className="text-base md:text-lg font-semibold text-[#5E6282]">Top Selling</span>
                <span className="text-xl md:text-5xl font-bold font-serif">Top Destinations</span>
            </div>
        
            <div className='flex justify-center items-center mt-2'>
                {cardItems.map((cardItems, index) => (
                <div key={index} className='w-[130px] flex-wrap h-[200px] md:w-[267px] md:h-[200px] rounded-3xl hover:shadow-2xl flex-col md:flex-row flex items-center justify-center gap-3 md:gap-5 p-2'>
                    <div>
                        <span className='text-wrap text-sm md:text-base text-center text-[#5E6282]'>{cardItems.place}</span>
                        <p className='text-wrap text-center md:text-base text-xs text-[#5E6282] flex items-center'>{<IoIosSend />}{cardItems.trip}</p>
                    </div>
                    <p className='text-wrap text-center md:text-base text-xs text-[#5E6282]'>{cardItems.price}</p>   
                </div>
                ))}
                <Image src={Decore} alt="Decore" width={96} height={250} className="h-[130px] w-[45px] md:h-[250px] md:w-[96px]"/>
            </div>
        </div>
    )
}