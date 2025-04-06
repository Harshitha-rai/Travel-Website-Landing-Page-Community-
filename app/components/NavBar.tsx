import Image from 'next/image';

import LogoImage from '../../public/Jadoo.png';

import '../globals.css'

const navLinks =[
  {title: "Destination", link: '#'},
  {title: "Hotels", link: '#'},
  {title: "Flights", link: '#'},
  {title: "Bookings", link: '#'},
  {title: "Login", link: '#'},
  {title: "Sign up", link: '#'},
]

export const NavBar = () => {
  return (
    <div className="bg-transparent w-full absolute top-0 py-4 md:px-8 ">
      <div className="mx-auto flex justify-between items-center">
      
        <Image src={LogoImage} height={33} width={114} alt="Logo image" className='h-[15px] w-[40px] md:h-[33px] md:w-[114px]'/>
       
        <nav className="text-xs md:space-x-8 font-sans md:text-sm space-x-2">
          {navLinks.map((item, index) => (
            <a href={item.link} key={index} className="navButtonBorder">{item.title}</a>
          ))} 
          <select>
            <option>EN</option>
          </select>
        </nav>
      </div>
    </div>
  );
}