import Image from 'next/image';

import instagramIcon  from '../../public/Social (1).png';
import twitterIcon from '../../public/Social (2).png';
import facebookIcon from '../../public/Social.png';
import playstoreIcon from '../../public/Play Store.png';
import googlePlayIcon from '../../public/Google Play.png';

export const Footer = () => {
    const footerContent = [
        {title: "Company", linkOne: "About", linkTwo:"Careers", linkThree: "Mobile" },
        {title: "Contact", linkOne: "Help/FAQ", linkTwo:"Press", linkThree: "Affilates" },
        {title: "More", linkOne: "Airlinefees", linkTwo:"Airline", linkThree: "Low fare tips" },
    ]
    const icons = [
        {image: facebookIcon},
        {image: instagramIcon},
        {image: twitterIcon},
    ]
    return (
        <div className="top-620 md:top-680 absolute w-full flex items-center justify-center flex-wrap flex-col">
            <div className='flex md:flex-row gap-6 md:gap-22 flex-col flex-wrap '>
                <div>
                    <span className='text-2xl md:text-4xl font-medium'>Jadoo.</span>
                    <p className="text-xs text-wrap text-[#5E6282] w-48 md:w-40">Book your trip in minute, get full
                    Control for much longer.</p>
                </div>
                <div className="flex gap-3 md:gap-10">
                    {footerContent.map((item, index) => (
                        <div key={index}>
                        <span className="text-lg font-bold mb-6">{item.title}</span>
                        <div className="text-sm flex flex-col gap-1">
                            <a>{item.linkOne}</a>
                            <a>{item.linkTwo}</a>
                            <a>{item.linkThree}</a>
                        </div>
                        </div>
                    ))}    
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <div className='flex gap-2'>
                        {icons.map((item, index) => (
                            <Image key={index} src={item.image} alt="icons" width={45} height={45}/>
                        ))}        
                    </div>
                    <span className='text-[#5E6282] font-medium'>Discover our app</span>
                    <div className='flex gap-2'>
                        <Image src={googlePlayIcon} width={107} height={35} alt='icons'/>
                        <Image src={playstoreIcon} width={107} height={35} alt='icons'/>
                    </div>
                </div>
            </div>
            <span className='text-[#5E6282]'>All rights reserved@jadoo.co</span>
        </div>
    
    )
}