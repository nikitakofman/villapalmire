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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const { t } = useTranslation();

  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const handleTest = () => {
    toast.success(`${t("messagetoast")}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        toast.success(`${t("messagetoast")}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(result);
      });

    e.target.reset();
  };

  const openNK = () => {
    window.open("https://www.nikitakofman.com", "_blank");
  };

  return (
    <>
      {/* CONTACT FORM START */}
      <div className="relative z-10 md:h-[380px] m-5 md:m-10 bg-white shadow-xl md:mb-[-180px] mb-[-320px] text-black">
        <div id="contact" />
        <ToastContainer
          toastStyle={{
            backgroundColor: "white",
            color: "black",
            border: "red",
          }}
          progressStyle={{ backgroundColor: "#BB9B66" }}
        />
        <div className="flex flex-col border border-[#BB9B66] p-5 md:p-5 md:shadow-xl md:flex-row h-full  ">
          <div className="w-full h-full flex  items-center ">
            <div className="w-full  md:p-5  border-r-[#BB9B66]/30   flex flex-col gap-4 items-left  justify-center">
              <h1
                className="text-2xl text-gray-700"
                style={{ fontFamily: "Open Sans" }}
              >
                {t("contact")}
              </h1>
              {/* <button onClick={handleTest}>bruh</button> */}
              <form
                onSubmit={handleOnSubmit}
                className=" text-slate-300 gap-3  py flex flex-col "
              >
                <Input
                  required
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder={t("name")}
                  className="bg-white text-black w-6/12"
                />
                <Input
                  required
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder={t("email")}
                  className="bg-white text-black w-6/12"
                />
                <Textarea
                  required
                  id="user_message"
                  name="user_message"
                  className="w-full bg-white  max-h-28 text-black"
                  placeholder={t("message")}
                />
                <div className="h-[30px]">
                  <button
                    type="submit"
                    className=" h-[30px] shadow-2xl text-white bg-gray-800 outline px-2 outline-offset-2 outline-1 outline-gray-600 hover:scale-[1.03] hover:outline-none duration-300 active:scale-[0.99]"
                  >
                    {t("sendmessage")}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full  md:pt-8 md:pb-8 pt-8 pb-4 h-full flex-col  flex items-center justify-center">
            <div className="flex text-[16px] text-gray-700  gap-10 md:gap-14 flex-col">
              <div className="flex flex-col items-center md:gap-0 gap-2 md:flex-row">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="size-6 text-[#BB9B66]"
                />
                <p className="px-2">
                  <a href="tel:+33761684484">+33 (0) 7 61 68 44 84</a>
                </p>
              </div>
              <div className="flex flex-col items-center md:gap-0 gap-2 md:flex-row">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="size-6 text-[#BB9B66]"
                />
                <p className="px-2">
                  <a href="mailto:palmire.news3000@gmail.com">
                    palmire.news3000@gmail.com
                  </a>
                </p>
              </div>
              <div className="flex flex-col items-center md:gap-0 gap-2 md:flex-row">
                <FontAwesomeIcon
                  icon={faLocationPin}
                  className="size-6 text-[#BB9B66]"
                />
                <p className="px-2">La Turbie, France</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CONTACT FORM END */}
      {/* FOOTER  START */}
      <div className="w-full  h-96  md:h-60 bg-[#BB9B66] py-2">
        <div className="flex h-full text-white ">
          <div className="flex flex-wrap justify-end  flex-col  w-full items-center px-5 md:px-10">
            <div className="flex w-full pb-[10px] justify-between">
              <p className="text-[14px]">© Villa Palmire 2024</p>

              <div
                className="flex hover:cursor-pointer hover:text-gray-200"
                onClick={openNK}
              >
                {" "}
                <p className="text-[14px] hidden sm:flex mr-1">
                  {t("created1")}
                </p>
                <p className="text-[14px]">nikitakofman.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER  END */}
    </>
  );
}

export default Contact;
