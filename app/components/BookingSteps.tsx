import Image from "next/image";
import { ImLeaf } from "react-icons/im";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { IoIosSend } from "react-icons/io";
import { BsBuildings } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

import StepOne from '../../public/Group 7.png';
import StepTwo from '../../public/Group 11.png';
import StepThree from '../../public/Group 12.png';

export const BookingSteps = () => {
    const steps = [
        {image: StepOne, title: "Choose Destination" },
        {image: StepTwo, title: "Make Payment" },
        {image: StepThree, title: "Reach Airport on Selected Date" },
    ]
    const icons = [
        {icon: <ImLeaf className="text-[#5E6282]"/>},
        {icon: <LiaVectorSquareSolid className="text-[#5E6282]"/>},
        {icon: <IoIosSend className="text-[#5E6282]"/>},
    ]
    return (
        <div className="top-230 md:top-350 absolute w-full flex items-center justify-center gap-5 flex-col md:flex-row">
            <div className="flex flex-col gap-6 max-w-130 p-1">
                <span className="text-lg font-semibold text-[#5E6282]">Easy and Fast</span>
                <span className="md:text-5xl text-2xl font-bold text-wrap font-serif">Book your next trip 
                in 3 easy steps</span>
                {steps.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                    <Image src={item.image} alt="image" width={47} height={48}/>
                    <div>
                        <span className="font-bold text-[#5E6282]">{item.title}</span>
                        <p className="text-[#5E6282] text-wrap">Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Urna, tortor tempus. </p>
                    </div>
                </div>
                ))}
            </div>
            <div>
                <div className="flex items-end justify-start w-[280px] h-[300px] md:w-[370px] md:h-[400px] bg-white rounded-3xl drop-shadow-2xl drop-shadow-blue-100">
                    <div className="flex flex-col p-4 gap-2">
                        <span className="font-medium text-lg">
                            Trip to Greece
                        </span>
                        <span className="text-[#5E6282] text-xs md:text-base">14-29 June | by Robbine J</span>
                        <div className="flex gap-3">
                            {icons.map((icon, index) => (
                                <div key={index} className="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center">
                                {icon.icon}
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-30 items-center">
                        <span className="text-[#5E6282] text-xs md:text-base flex items-center gap-2"><BsBuildings /> 24 people going</span>
                        <FaRegHeart className="text-[#8A79DF] text-end"/>
                        </div>
                        
                    </div>
                </div>
                <div className="absolute right-6 bottom-14 md:right-32 w-[200px] md:w-[263px] h-[129px] bg-white shadow-2xl flex items-center justify-center gap-3 rounded-3xl">
                    <div className="w-10 h-10 rounded-full shadow-md"></div>
                    <div className="flex flex-col gap-2">
                        <span className="text-[#5E6282]">Ongoing</span>
                        <span className="text-lg">Trip to Rome</span>
                        <p><span className="text-[#8A79DF]">40%</span> completed</p>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-200">
                            <div className="bg-[#8A79DF] h-2 rounded-full w-[45%]" ></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}