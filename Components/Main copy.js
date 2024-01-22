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
      <div className=" h-svh flex p-28 box-border">
        <div className="w-4/12  h-full">
          <p className="relative pt-20 whitespace-nowrap text-7xl">
            Welcome to Villa Palmire
          </p>
          <p className="pt-10">
            loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum
            loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum
            loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum
            loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum
          </p>
        </div>
        <div className="h-full villabg1 w-full ">
          {/* <div className=" flex flex-col justify-end h-full">
            <div className="bg-white h-20"></div>
          </div> */}
        </div>
      </div>
      <div className="h-svh villabg1 w-full"></div>
    </>
  );
}

export default Main;
