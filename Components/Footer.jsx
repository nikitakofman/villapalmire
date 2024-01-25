"use client";

import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

function Footer() {
  const openNK = () => {
    window.open("https://www.nikitakofman.com", "_blank");
  };

  const { t } = useTranslation();

  return (
    <div className="h-full py-2 bg-[#BB9B66]">
      <div className="flex flex-col md:flex-row h-full text-white ">
        <div className="flex flex-wrap  justify-between w-full items-center px-5 md:px-10">
          {/* <div className="flex">
            <FontAwesomeIcon icon={faPhone} className="size-6" />
            <p className="px-2">+33 (0) 7 61 68 44 84</p>
          </div>
          <div className="flex">
            <FontAwesomeIcon icon={faEnvelope} className="size-6" />
            <p className="px-2">palmirenews.3000@gmail.com</p>
          </div>
          <div className="flex">
            <FontAwesomeIcon icon={faLocationPin} className="size-6" />
            <p className="px-2">La Turbie, France</p>
          </div> */}
          <p className="text-[14px]">© Villa Palmire 2024</p>

          <div
            className="flex hover:cursor-pointer hover:text-gray-200"
            onClick={openNK}
          >
            {" "}
            <p className="text-[14px] hidden sm:flex mr-1">{t("created1")}</p>
            <p className="text-[14px]">nikitakofman.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
