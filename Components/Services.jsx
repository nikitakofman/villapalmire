"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faJugDetergent } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

function Services() {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      {/* <h1 className="px-10 text-3xl -mb-8 w-full">Our services</h1> */}
      <div
        ref={ref}
        className={`h-full ml-5 mr-5 md:ml-10 md:mr-10 flex flex-col md:flex-row text-black transition-opacity duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ fontFamily: "Open Sans" }}
      >
        <div className="h-full w-full mr-3 ">
          <div className="flex w-full h-full flex-col border-[0px] pt-3   border-[#BB9B66]">
            <div className="w-full h-[100px] md:min-h-[200px] rounded-xl shadow-xl  eventsbg"></div>
            <div className="w-full h-full gap-3  border-[#BB9B66] mt-3 flex flex-col items-left text-left px-0 pb-3 md:pb-0 md:px-3 justify-start ">
              <div className="flex items-center pt-5 justify-between">
                {" "}
                <h1
                  style={{ fontFamily: "Nanum Myeongjo" }}
                  className="text-[#BB9B66]  text-3xl"
                >
                  {t("events")}
                </h1>
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="text-[#BB9B66]  text-xl"
                />
              </div>
              <p>{t("eventsdesc")}</p>
            </div>
          </div>
        </div>
        <div className="h-full w-full mr-3 ">
          <div className="flex w-full h-full flex-col border-[0px] pt-3   border-[#BB9B66]">
            <div className="w-full  h-[100px] md:min-h-[200px] rounded-xl shadow-xl breakfastbg"></div>
            <div className="w-full h-full gap-3  border-[#BB9B66] mt-3 flex flex-col items-left text-left px-0 pb-3 md:pb-0 md:px-3 justify-start ">
              <div className="flex items-center pt-5 justify-between">
                {" "}
                <h1
                  style={{ fontFamily: "Nanum Myeongjo" }}
                  className="text-[#BB9B66] text-3xl"
                >
                  {t("breakfast")}
                </h1>
                <FontAwesomeIcon
                  icon={faMugSaucer}
                  className="text-[#BB9B66]  text-xl"
                />
              </div>

              <p>{t("breakfastdesc")}</p>

              <p className="text-[13px] italic">{t("breakfastdescmini")}</p>
            </div>
          </div>
        </div>
        <div className="h-full w-full mr-3  ">
          <div className="flex w-full h-full flex-col border-[0px] pt-3   border-[#BB9B66]">
            <div className="w-full  h-[100px] md:min-h-[200px] rounded-xl shadow-xl chauffeurbg"></div>
            <div className="w-full h-full gap-3  border-[#BB9B66] mt-3 flex flex-col items-left text-left px-0 pb-3 md:pb-0 md:px-3 justify-start ">
              <div className="flex items-center pt-5 justify-between">
                {" "}
                <h1
                  style={{ fontFamily: "Nanum Myeongjo" }}
                  className="text-[#BB9B66] text-3xl"
                >
                  {t("taxi")}
                </h1>
                <FontAwesomeIcon
                  icon={faCar}
                  className="text-[#BB9B66]  text-xl"
                />
              </div>

              <p> {t("chauffeurdesc")}</p>
              <p className="text-[13px] italic">{t("chauffeurdescmini")}</p>
            </div>
          </div>
        </div>
        <div className="h-full w-full  ">
          <div className="flex w-full h-full flex-col border-[0px] pt-3   border-[#BB9B66]">
            <div className="w-full h-[100px] md:min-h-[200px] rounded-xl shadow-xl dogsbg"></div>
            <div className="w-full h-full gap-3  border-[#BB9B66] mt-3 flex flex-col items-left text-left px-0 pb-3 md:pb-0 md:px-3 justify-start ">
              <div className="flex items-center pt-5 justify-between">
                {" "}
                <h1
                  style={{ fontFamily: "Nanum Myeongjo" }}
                  className="text-[#BB9B66]  text-3xl"
                >
                  {t("dogs")}
                </h1>
                <FontAwesomeIcon
                  icon={faJugDetergent}
                  className="text-[#BB9B66]  text-xl"
                />
              </div>

              <p> {t("dogsdesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
