"use client";

import Image from "next/image";
import LanguageChanger from "./LanguageChanger";
import LanguageChangerMobile from "./LanguageChangerMobile";
import { useEffect, useState } from "react";
import Burger from "./Burger";
import Slider from "./Slider";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  const [isNotMobile, setIsNotMobile] = useState(true);
  useEffect(() => {
    const checkIsNotMobile = () => {
      setIsNotMobile(window.innerWidth > 899);
    };

    checkIsNotMobile();
    window.addEventListener("resize", checkIsNotMobile);

    return () => window.removeEventListener("resize", checkIsNotMobile);
  }, []);

  return (
    <div className="fixed bg-white z-20 flex  h-16  justify-around items-center w-full">
      <div id="#top" />
      <div className="flex w-full items-center justify-between   pl-5 md:pl-10">
        <div
          className="bg-white whitespace-nowrap tracking-widest   text-[#BB9B66] -mr-2    text-xl"
          style={{ fontFamily: "Nanum Myeongjo" }}
        >
          <a href="#top">
            <Image
              alt="Villa Palmire Logo"
              width={35}
              height={35}
              src="/logovp.webp"
              className="size-7"
            />
          </a>
        </div>
        <div className=" flex w-full -mr-28 h-[30px]">
          <button className=" h-[30px] shadow-2xl  bg-gray-800 outline px-2 outline-offset-2 outline-1 outline-gray-600 hover:scale-[1.03] hover:outline-none duration-300 active:scale-[0.99]">
            <a
              className="font-light text-[14px] text-white"
              href="https://www.booking.com/hotel/fr/villa-palmire.fr.html"
              target="_blank"
            >
              {t("book")}
            </a>
          </button>
        </div>
         
      </div>
      <div className=" text-[14px] hidden min-w-[400px] md:flex underline-animation [&>p]:cursor-pointer [&>p]:font-light justify-around w-full">
        {/* <p className="">nav1</p> */}
        <p className="tracking-[0.5rem]">
          <a href="#region">{t("region")}</a>
        </p>
        <p className="tracking-[0.5rem]">
          <a href="#rooms">{t("rooms")}</a>
        </p>
        <p className="tracking-[0.5rem]">
          <a href="#contact">{t("contactmenu")}</a>
        </p>
      </div>
      <div className=" w-0 md:w-full flex gap-3 justify-end pr-5 md:pr-10">
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
