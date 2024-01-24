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
    <div className="h-svh">
      <div className="p-5 md:p-10 flex h-full flex-col ">
        <div className="flex flex-col h md:flex-row">
          <div className="w-full h-[200px] md:h-full turbie"></div>
          <div className="w-full h-full flex flex-col items-center justify-center bg-white">
            <div className="p-0 md:p-5">
              <h1
                ref={ref1}
                className={`text-left tracking-widest text-[#BC9D68] font-bold w-[164px] pl-2.5 my-0 md:my-3 text-3xl ${
                  inView1 ? "underline-animate" : ""
                }`}
                style={{ fontFamily: "Nanum Myeongjo" }}
              >
                La Turbie
              </h1>
              <MaskText />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row h-full">
          <div className="w-full  monaco h-[200px] md:h-full flex md:hidden"></div>
          <div className="w-full h-full flex items-center justify-center bg-white">
            <div className="p-0 md:p-5">
              <h1
                ref={ref2}
                className={`text-left tracking-widest my-0 md:my-3 text-[#BC9D68] font-bold w-[135px] pl-3 text-3xl ${
                  inView2 ? "underline-animate" : ""
                }`}
                style={{ fontFamily: "Nanum Myeongjo" }}
              >
                Monaco
              </h1>
              <MaskText2 />
            </div>
          </div>
          <div className="w-full h-full monaco  hidden md:flex"></div>
        </div>
        <div className="flex flex-col md:flex-row  h-full">
          <div className="w-full h-[200px] md:h-full cote"></div>
          <div className="w-full h-full flex items-center flex-col justify-center bg-white">
            <div className="p-0 md:p-5">
              <h1
                ref={ref3}
                className={`text-left tracking-widest my-0 md:my-3 text-[#BC9D68] font-bold w-[120px] pl-2 text-3xl ${
                  inView3 ? "underline-animate" : ""
                }`}
                style={{ fontFamily: "Nanum Myeongjo" }}
              >
                Riviera
              </h1>
              <MaskText />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MaskText() {
  const { t } = useTranslation();
  const phrases = [t("turbie1"), t("turbie3")];

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
          <div key={index} className={styles.lineMask}>
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
          <div key={index} className={styles.lineMask}>
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
