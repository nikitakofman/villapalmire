"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import SlideText from "./SlideText";
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

  return (
    <>
      <span id="region" class="anchor-offset" />
      <div className="h-svh">
        <div className="p-5 md:p-10 flex h-full flex-col ">
          <div className="flex flex-col  md:flex-row">
            <div className="w-full hidden md:flex  md:min-h-full  turbie" />
            <div className="w-full  flex md:hidden flex-col justify-end  h-[200px] turbie">
              <h1
                ref={ref2}
                className={`text-left flex bg-black/50 p-5 md:hidden tracking-widest text-white font-bold w-full   my-0  text-3xl ${
                  inView2 ? "" : ""
                }`}
                style={{ fontFamily: "Nanum Myeongjo" }}
              >
                La Turbie
              </h1>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center bg-white">
              <div className="py-3 p-0 md:p-5 w-full">
                <h1
                  ref={ref1}
                  className={`text-left hidden md:flex flex-col tracking-widest text-[#BC9D68] font-bold w-full pl-0  my-3 -mt-0 md:-mt-5 text-3xl ${
                    inView1 ? "underline-animate" : ""
                  }`}
                  style={{ fontFamily: "Nanum Myeongjo" }}
                >
                  La Turbie
                </h1>
                <div className="pl-0.5  md:pl-0">
                  {" "}
                  <MaskText />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  h-full">
            <div className="w-full  monaco h-[200px] flex flex-col justify-end  md:hidden">
              <h1
                ref={ref2}
                className={`text-left flex bg-black/50 p-5 md:hidden tracking-widest text-white font-bold w-full   my-0  text-3xl ${
                  inView2 ? "" : ""
                }`}
                style={{ fontFamily: "Nanum Myeongjo" }}
              >
                Monaco
              </h1>
            </div>
            <div className="w-full h-full flex items-center justify-center bg-white">
              <div className="py-3 flex flex-col w-full pr-4 ">
                <h1
                  ref={ref2}
                  className={`text-left hidden md:flex flex-col tracking-widest text-[#BC9D68] font-bold w-full pl-0  my-0  text-3xl ${
                    inView2 ? "underline-animate" : ""
                  }`}
                  style={{ fontFamily: "Nanum Myeongjo" }}
                >
                  Monaco
                </h1>
                <div className="py-0 pl-0.5 md:pl-0 md:py-3 ">
                  <MaskText2 />
                </div>
              </div>
            </div>
            <div className="w-full monaco md:min-h-full hidden md:flex"></div>
          </div>
          <div className="flex flex-col md:flex-row  h-full">
            <div className="w-full hidden md:flex cote" />
            <div className="w-full flex md:hidden flex-col justify-end h-[200px] cote">
              <h1
                ref={ref3}
                className={`text-left flex bg-black/50 p-5 md:hidden tracking-widest text-white font-bold w-full   my-0  text-3xl ${
                  inView3 ? "" : ""
                }`}
                style={{ fontFamily: "Nanum Myeongjo" }}
              >
                Riviera
              </h1>
            </div>

            <div className="w-full h-full flex items-center flex-col justify-center bg-white">
              <div className="py-3 p-0 md:p-5">
                <h1
                  ref={ref3}
                  className={`text-left tracking-widest flex-col hidden md:flex text-[#BC9D68] font-bold w-full pl-0  my-3 -mt-0  text-3xl ${
                    inView3 ? "underline-animate" : ""
                  }`}
                  style={{ fontFamily: "Nanum Myeongjo" }}
                >
                  Riviera
                </h1>
                <div className="pl-0.5  md:pl-0">
                  {" "}
                  <MaskText3 />
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
  const phrases = [t("turbie3")];

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
  const phrases = [t("monaco2")];

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
  const phrases = [t("riviera2")];

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
