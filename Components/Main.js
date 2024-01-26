"use client";

import { useTranslation } from "react-i18next";
import LanguageChanger from "./LanguageChangerMobile";

function Main() {
  const { t } = useTranslation();

  return (
    <>
      {/* {" "}
      <h1 className="text-7xl text-red-200">{t("header")}</h1>
      <div>{t("subheader")}</div> */}
      <div className="  h-svh flex flex-col md:flex-row p-5  md:p-28 box-border">
        {/* <div className="w-4/12  h-full">
          <p className="relative pt-20 whitespace-nowrap text-7xl">
            Welcome to Villa Palmire
          </p>
          <p className="pt-10">
            loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum
            loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum
            loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum
            loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum
          </p>
        </div> */}
        <div className="h-full terracebg m-0.5 w-full md:w-full ">
          {/* <div className=" md:flex flex-col hidden justify-start text-right h-full">
            <div
              className="bg-white  tracking-[0.3em]  text-[#BB9B66] text-[14px] -mr-2    text-5xl"
              style={{ fontFamily: "Open Sans" }}
            >
              VILLA PALMIRE
            </div>
          </div>
          <div className=" flex flex-col md:hidden tracking-[0.3em] w-[280px]  bg-white ">
            <div className="  mt-12 ">
              {" "}
              <div
                className="text-right w-[280px] text-[#BB9B66] text-[14px] p-1  text-5xl"
                style={{ fontFamily: "Open Sans" }}
              >
                VILLA<br></br> PALMIRE
              </div>
            </div>
          </div> */}
          {/* <div className=" md:hidden flex-col flex justify-start  border-8 w-8/12  h-full">
            <div
              className="bg-white w-full  text-[#BB9B66] text-[14px]  p-3 -mt-3  text-7xl"
              style={{ fontFamily: "Open Sans" }}
            >
              VILLA
            </div>
          </div> */}

          {/* <p className="border h-full text-white flex flex-col items-right justify-end whitespace-nowrap text-9xl">
            VILLA
          </p> */}
          {/* <div className=" flex flex-col justify-end h-full">
            <div className="bg-white h-20"></div>
          </div> */}
        </div>
        <div className="h-full villabg1 m-0.5 flex justify-end w-full "></div>
        <div className="h-full  greenterracebg m-0.5 w-full flex md:flex-none justify-start md:justify-end items-end  flex-col md:w-4/12 ">
          <div className=" hidden md:flex flex-col justify-end items-end w-full  h-full">
            <div
              className="bg-white     justify-end  flex p-2 -mb-3.5 text-[#BB9B66] text-[14px]  "
              style={{ fontFamily: "Open Sans" }}
            >
              {t("maindesc")}
            </div>
          </div>
          <div className=" flex flex-col   md:hidden  w-full  bg-white ">
            {" "}
            <div
              className="w-full h-full py-2 text-justify  text-[#BB9B66] text-[14px]  "
              style={{ fontFamily: "Open Sans" }}
            >
              {t("maindesc")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
