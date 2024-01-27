"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import LanguageChanger from "./LanguageChangerMobile";

function Main() {
  const { t } = useTranslation();

  return (
    <>
      <div className="h-svh flex flex-col md:flex-row p-5 md:p-28 box-border">
        {/* Terrace Background */}
        <div className="relative h-full m-0.5 w-full md:w-full">
          <Image
            src="/terrace.webp"
            fill
            style={{ objectFit: "cover" }}
            alt="Terrace"
            priority
          />
          {/* Add content over the image here if needed */}
        </div>

        {/* Villa Background */}
        <div className="relative h-full m-0.5 flex justify-end w-full">
          <Image
            src="/villamain.webp"
            fill
            style={{ objectFit: "cover" }}
            alt="Villa"
            priority
          />
          {/* Add content over the image here if needed */}
        </div>

        {/* Green Terrace Background */}
        <div className="relative h-full m-0.5 w-full flex md:flex-none justify-start md:justify-end items-end flex-col md:w-4/12">
          <Image
            src="/greenterrace.webp"
            fill
            style={{ objectFit: "cover" }}
            alt="Green Terrace"
            priority
          />
          <div className="absolute bottom-0 right-0 p-2 bg-white text-[#BB9B66] text-[15px]">
            {t("maindesc")}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
