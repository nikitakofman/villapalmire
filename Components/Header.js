"use client";

import Image from "next/image";
import LanguageChanger from "./LanguageChanger";
import LanguageChangerMobile from "./LanguageChangerMobile";
import { useEffect, useState } from "react";
import Burger from "./Burger";
import Slider from "./Slider";

function Header() {
  const [isNotMobile, setIsNotMobile] = useState(true);
  useEffect(() => {
    const checkIsNotMobile = () => {
      setIsNotMobile(window.innerWidth > 950);
    };

    checkIsNotMobile();
    window.addEventListener("resize", checkIsNotMobile);

    return () => window.removeEventListener("resize", checkIsNotMobile);
  }, []);

  return (
    <div className="fixed bg-white z-50 flex  h-12 justify-around items-center w-full">
      <div className="flex w-full items-center  pl-5 md:pl-10">
        {/* <Image
          width={100}
          height={100}
          alt="Villa Palmire Logo"
          src="/logo.png"
        /> */}
        <div
          className="bg-white whitespace-nowrap tracking-widest  text-[#BB9B66] -mr-2    text-xl"
          style={{ fontFamily: "Nanum Myeongjo" }}
        >
          VILLA PALMIRE
        </div>
        {/* <div class=" pl-5 h-[30px]">
          <button class=" h-[30px] shadow-2xl bg-gray-800 outline px-2 outline-offset-2 outline-1 outline-gray-600 hover:scale-[1.03] hover:outline-none duration-300 active:scale-[0.99]">
            <a class="font-light text-[14px] text-white" href="#">
              {/* {isNotMobile ? "Book a room" : "Book"} 
              Book
            </a>
          </button>
        </div> */}
         
      </div>
      <div className=" text-[14px] hidden min-w-[370px] md:flex underline-animation [&>p]:cursor-pointer [&>p]:font-light justify-between w-full">
        {/* <p className="">nav1</p> */}
        <p className="tracking-[0.5rem]">Rooms</p>
        <p className="tracking-[0.5rem]">Events</p>
        <p className="tracking-[0.5rem]">Region</p>
      </div>
      <div className="w-full flex gap-3 justify-end pr-5 md:pr-10">
        {isNotMobile ? (
          <LanguageChanger />
        ) : (
          <>
            <LanguageChangerMobile /> <Slider />
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
