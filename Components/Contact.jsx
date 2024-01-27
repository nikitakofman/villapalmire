"use client";

import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

function Contact() {
  const { t } = useTranslation();

  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const handleOnSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        // toast.success(
        //   `${language.en ? "Message sent successfully" : "Message envoyé"}`,
        //   {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //   }
        // );
        console.log(result);
      });

    e.target.reset();
  };

  return (
    <div className="h-full md:h-[380px] py-5 m-0 md:m-10  border-[0px] md:border border-[#BB9B66] text-black">
      <div className="flex flex-col md:flex-row h-full  ">
        <div className="w-full h-full flex items-center  justify-center">
          <div className="w-full px-5 md:px-0 md:w-9/12 flex flex-col gap-4 items-left  justify-center">
            <h1
              className="text-2xl text-gray-700"
              style={{ fontFamily: "Open Sans" }}
            >
              {t("contact")}
            </h1>
            <form
              onSubmit={handleOnSubmit}
              className=" text-slate-300 flex flex-col "
            >
              <Input
                type="text"
                id="user_name"
                name="user_name"
                placeholder={t("name")}
                className="bg-white text-black w-6/12"
              />
              <Input
                type="email"
                id="user_email"
                name="user_email"
                placeholder={t("email")}
                className="bg-white text-black w-6/12"
              />
              <Textarea
                id="user_message"
                name="user_message"
                className="w-full bg-white text-black"
                placeholder={t("message")}
              />
              <div class="h-[30px]">
                <button
                  type="submit"
                  class=" h-[30px] shadow-2xl text-white bg-gray-800 outline px-2 outline-offset-2 outline-1 outline-gray-600 hover:scale-[1.03] hover:outline-none duration-300 active:scale-[0.99]"
                >
                  {t("sendmessage")}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full py-10 h-full flex-col  flex items-center justify-center">
          <div className="flex text-[16px] text-gray-700  gap-10 md:gap-14 flex-col">
            <div className="flex">
              <FontAwesomeIcon
                icon={faPhone}
                className="size-6 text-[#BB9B66]"
              />
              <p className="px-2">
                <a href="tel:+33761684484">+33 (0) 7 61 68 44 84</a>
              </p>
            </div>
            <div className="flex">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="size-6 text-[#BB9B66]"
              />
              <p className="px-2">palmire.news3000@gmail.com</p>
            </div>
            <div className="flex w-full">
              <FontAwesomeIcon
                icon={faLocationPin}
                className="size-6 text-[#BB9B66]"
              />
              <p className="px-2">La Turbie, 06320, France</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
