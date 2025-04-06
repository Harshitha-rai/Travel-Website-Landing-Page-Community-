import Image from 'next/image';

import satelliteDish from '../../public/satellite-dish.png';
import plane from '../../public/plane.png';
import powerSupply from '../../public/power-supply 1.png';
import Rectangle from '../../public/Rectangle 159.png';

export const Category = () => {
    const cardItems = [ 
        { image: satelliteDish, title: 'Calculated Weather', desc: "Built Wicket longer admire do barton vanity itself do in it"},
        { image: plane, title: 'Best Flights', desc: "Engrossed listening. Park gate sell they west hard for the."},
        { image: Rectangle, title: 'Local Events', desc: "Barton vanity itself do in it. Preferd to men it engrossed listening. "},
        { image: powerSupply, title: 'Customization', desc: "We deliver outsourced aviation services for military customers"},
    ]
    return (
        <div className="top-90 md:top-140 absolute w-full">
            <div className="flex justify-center items-center flex-col gap-2">
                <span className="text-base md:text-lg font-semibold text-[#5E6282]">CATEGORY</span>
                <span className="text-xl md:text-5xl font-bold font-serif">We Offer Best Services</span>
            </div>

            <div className='flex justify-center items-center mt-2'>
                {cardItems.map((cardItems, index) => (
                    <div key={index} className='w-[130px] flex-wrap h-[200px] md:w-[267px] md:h-[260px] rounded-3xl hover:shadow-2xl flex items-center justify-center flex-col gap-3 p-2'>
                        <Image src={cardItems.image} width={66} height={70} alt='image' className='md:w-[66px] md:h-[70px] w-10 h-10'/>
                        <span className='text-xs md:text-lg font-semibold text-center'>{cardItems.title}</span>
                        <p className='text-wrap text-center md:text-base text-xs text-[#5E6282]'>{cardItems.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}