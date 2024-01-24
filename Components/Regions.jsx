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
        <div className="flex flex-col md:flex-row h-full">
          <div className="w-full h-full turbie"></div>
          <div className="w-full h-full flex items-center justify-center bg-white">
            <div className="p-5">
              <MaskText />
            </div>
          </div>
        </div>
        <div className="flex h-full">
          <div className="w-full h-full flex items-center justify-center bg-white">
            <div className="p-5">
              <MaskText2 />
            </div>
          </div>
          <div className="w-full h-full monaco"></div>
        </div>
        <div className="flex h-full">
          <div className="w-full h-full cote"></div>
          <div className="w-full h-full flex items-center justify-center bg-white">
            <div className="p-5">
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
