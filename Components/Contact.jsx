"use client";

import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="h-full md:h-[380px] py-5 border border-[#BB9B66] m-5 md:m-10 text-black">
      <div className="flex flex-col md:flex-row h-full  ">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full px-5 md:px-0 md:w-9/12 flex flex-col gap-4 items-left  justify-center">
            <h1
              className="text-2xl text-gray-700"
              style={{ fontFamily: "Open Sans" }}
            >
              {t("contact")}
            </h1>
            <Input
              type="text"
              placeholder={t("name")}
              className="bg-white text-black w-6/12"
            />
            <Input
              type="email"
              placeholder={t("email")}
              className="bg-white text-black w-6/12"
            />
            <Textarea
              className="w-full bg-white text-black"
              placeholder={t("message")}
            />
            <div class="h-[30px]">
              <button class=" h-[30px] shadow-2xl text-white bg-gray-800 outline px-2 outline-offset-2 outline-1 outline-gray-600 hover:scale-[1.03] hover:outline-none duration-300 active:scale-[0.99]">
                <a class="font-light text-[14px] " href="#">
                  {t("sendmessage")}
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full pt-5 h-full flex-col  flex items-center justify-center">
          <div className="flex text-[16px] text-gray-700  gap-6 md:gap-14 flex-col">
            <div className="flex">
              <FontAwesomeIcon
                icon={faPhone}
                className="size-6 text-[#BB9B66]"
              />
              <p className="px-2">+33 (0) 7 61 68 44 84</p>
            </div>
            <div className="flex">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="size-6 text-[#BB9B66]"
              />
              <p className="px-2">palmirenews.3000@gmail.com</p>
            </div>
            <div className="flex">
              <FontAwesomeIcon
                icon={faLocationPin}
                className="size-6 text-[#BB9B66]"
              />
              <p className="px-2">La Turbie, 06320</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
