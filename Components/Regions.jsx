"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import styles from "./text.module.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Regions() {
  const [isNotMobile, setIsNotMobile] = useState(true);
  useEffect(() => {
    const checkIsNotMobile = () => {
      setIsNotMobile(window.innerWidth > 900);
    };

    checkIsNotMobile();
    window.addEventListener("resize", checkIsNotMobile);

    return () => window.removeEventListener("resize", checkIsNotMobile);
  }, []);

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 1 });

  const { t } = useTranslation();

  return (
    <>
      {" "}
      <span id="region" className="anchor-offset" />
      <div className="flex items-center p-5 md:m-10 md:border border-[#BC9D68] justify-center">
        <div className="h-full  w-full">
          <div className="flex h-full flex-col ">
            <div className="flex flex-col  md:flex-row">
              <div className="w-full hidden md:flex   md:min-h-[300px]  turbie" />
              <div className="w-full  flex md:hidden flex-col justify-end  h-[200px] turbie">
                <h1
                  ref={ref2}
                  className={`text-left flex bg-black/50 p-5 md:hidden tracking-widest text-white w-full   my-0  text-3xl ${
                    inView2 ? "" : ""
                  }`}
                  style={{ fontFamily: "Nanum Myeongjo" }}
                >
                  {t("turbietitle")}
                </h1>
              </div>
              <div className="w-full flex flex-col items-center justify-center bg-white">
                <div className="py-3 p-0 md:p-5 flex flex-col justify-between h-full w-full">
                  <h1
                    ref={ref1}
                    className={`text-left hidden md:flex flex-col tracking-widest text-[#BC9D68] w-full pl-0  my-3 -mt-0 md:-mt-5 text-3xl ${
                      inView1 ? "underline-animate" : ""
                    }`}
                    style={{ fontFamily: "Nanum Myeongjo" }}
                  >
                    {t("turbietitle")}
                  </h1>
                  <div className="pl-0.5  md:pl-0">
                    {" "}
                    <MaskText />
                  </div>
                  <div className="w-full flex justify-end pt-5 md:pt-0">
                    <button
                      className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#BC9D68] group px-8 py-2"
                      onClick={() =>
                        window.open(
                          "https://www.menton-riviera-merveilles.co.uk/menton-and-its-coastline/the-riviera-and-its-hilltop-villages/la-turbie/"
                        )
                      }
                    >
                      <span className="relative z-10 text-[#BC9D68] group-hover:text-white text-[15px] duration-500">
                        {t("laturbieevents")}
                      </span>
                      <span className="absolute w-full h-full bg-[#BC9D68] -left-44 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                      <span className="absolute w-full h-full bg-[#BC9D68] -right-44 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  h-full">
              <div className="w-full  monaco h-[200px] flex flex-col justify-end  md:hidden">
                <h1
                  ref={ref2}
                  className={`text-left flex bg-black/50 p-5 md:hidden tracking-widest text-white w-full   my-0  text-3xl ${
                    inView2 ? "" : ""
                  }`}
                  style={{ fontFamily: "Nanum Myeongjo" }}
                >
                  {t("monacotitle")}
                </h1>
              </div>
              <div className="w-full flex items-center justify-center bg-white">
                <div className="py-3 md:pb-5 flex flex-col h-full justify-between  w-full md:pr-4 ">
                  <h1
                    ref={ref2}
                    className={`text-left hidden md:flex flex-col tracking-widest text-[#BC9D68] w-full pl-0  my-0  text-3xl ${
                      inView2 ? "underline-animate" : ""
                    }`}
                    style={{ fontFamily: "Nanum Myeongjo" }}
                  >
                    {t("monacotitle")}
                  </h1>
                  <div className="py-0 pl-0.5 md:pl-0 md:py-3 ">
                    <MaskText2 />
                  </div>
                  <div className="w-full  flex justify-end pt-5 md:pt-0">
                    <button
                      className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#BC9D68] group px-8 py-2"
                      onClick={() =>
                        window.open(
                          "https://www.visitmonaco.com/en/22107/tout-ce-qu-il-se-passe-a-monaco"
                        )
                      }
                    >
                      <span className="relative z-10 text-[#BC9D68] group-hover:text-white text-[15px] duration-500">
                        {t("monacoevents")}
                      </span>
                      <span className="absolute w-full h-full bg-[#BC9D68] -left-44 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                      <span className="absolute w-full h-full bg-[#BC9D68] -right-44 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full monaco  md:min-h-[300px] hidden md:flex"></div>
            </div>
            <div className="flex flex-col md:flex-row  h-full">
              <div className="w-full hidden md:flex  md:min-h-[300px] cote" />
              <div className="w-full flex md:hidden flex-col justify-end h-[200px] cote">
                <h1
                  ref={ref3}
                  className={`text-left flex bg-black/50 p-5 md:hidden tracking-widest text-white w-full   my-0  text-3xl ${
                    inView3 ? "" : ""
                  }`}
                  style={{ fontFamily: "Nanum Myeongjo" }}
                >
                  {t("rivieratitle")}
                </h1>
              </div>

              <div className="w-full  flex items-center flex-col justify-center bg-white">
                <div className="py-3 p-0 md:p-5 flex flex-col justify-between h-full w-full">
                  <h1
                    ref={ref3}
                    className={`text-left tracking-widest flex-col hidden md:flex text-[#BC9D68] w-full pl-0  my-3 -mt-0  text-3xl ${
                      inView3 ? "underline-animate" : ""
                    }`}
                    style={{ fontFamily: "Nanum Myeongjo" }}
                  >
                    {t("rivieratitle")}
                  </h1>
                  <div className="pl-0.5  md:pl-0">
                    {" "}
                    <MaskText3 />
                  </div>
                  <div className="w-full flex justify-end pt-5 md:pt-0 mt-3 -mb-3 ">
                    <button
                      className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-[#BC9D68] group px-8 py-2 "
                      onClick={() =>
                        window.open(
                          "https://cotedazurfrance.fr/decouvrir/grands-evenements/"
                        )
                      }
                    >
                      <span className="relative z-10 text-[#BC9D68] group-hover:text-white text-[15px] duration-500">
                        {t("rivieraevents")}
                      </span>
                      <span className="absolute w-full h-full bg-[#BC9D68] -left-44 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                      <span className="absolute w-full h-full bg-[#BC9D68] -right-44 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function MaskText() {
  const { t } = useTranslation();
  const phrases = [t("turbie2"), t("turbie3")];

  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={styles.body}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={`${styles.lineMask}`}>
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}

export function MaskText2() {
  const { t } = useTranslation();
  const phrases = [t("monaco1"), t("monaco2")];

  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={styles.body}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={`${styles.lineMask}`}>
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}

export function MaskText3() {
  const { t } = useTranslation();
  const phrases = [t("riviera1"), t("riviera2")];

  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={styles.body}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={`${styles.lineMask}`}>
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
