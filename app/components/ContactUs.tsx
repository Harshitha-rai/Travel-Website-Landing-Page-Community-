import { MdOutlineEmail } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";

export const ContactUs = () => {
    return (
        <div className="top-510 md:top-560 absolute w-full flex items-center justify-center flex-wrap flex-row">
            <div className="w-[95%] md:w-[80%] gap-14 h-[400px] bg-[#eeebf5] rounded-tl-4xl rounded-2xl flex-col flex items-center justify-center">
                <span className="font-semibold text-center text-2xl text-wrap text-[#5E6282] w-[60%]">Subscribe to get information, latest news and other
                interesting offers about Jadoo</span>
                <div className="flex md:gap-3">
                    <div className="flex flex-row">
                        <div className="bg-white p-3 rounded-l-2xl flex items-center justify-center text-center"><MdOutlineEmail /></div>
                        <input type='email' placeholder="Your email" className="bg-white w-[70%] md:w-[420px] p-3 rounded-r-2xl"/>
                    </div>
                    <button className="text-white bg-orange-600 p-3 rounded-md">Subscribe</button>
                </div>
                <div className="w-14 h-14 md:w-18 md:h-18 bg-indigo-600 text-white flex items-center justify-center text-lg rounded-full absolute right-2 md:right-28 top-0"><BsFillSendFill /></div>
            </div>
        </div>
    )
}