import Image from "next/image";
import { AboutUs, Banner, BookingSteps, Category, ContactUs, Destinations, Footer, NavBar } from "./components";
import Decore from "../public/Decore.png";


export default function Home() {
  return (
    <div>
      <div className="relative">
      <Image
          src={Decore}
          alt="Travel Image"
          width={766}
          height={872}
          className="w-[300px] h-[500px] md:w-[766px] bg-transparent md:h-[872px] object-cover rotate-x-736 rotate-y-[-149] absolute right-0 top-[-200]"
        />
      </div>
      <div>
        <NavBar />
        <Banner />
        <Category />
        <Destinations />
        <BookingSteps />
        <AboutUs/>
        <ContactUs />
        <Footer/>
      </div>
    </div>
  )
}
