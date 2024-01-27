"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./pagestatic.module.scss";

import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";

const images = [
  "1.webp",
  "2.webp",
  "3.webp",
  "4.webp",
  "5.webp",
  "6.webp",
  "7.webp",
  "8.webp",
  "9.webp",
  "10.webp",
  "11.webp",
  "12.webp",
];

export default function StaticImages() {
  const gallery = useRef(null);

  return (
    <main className="">
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} />

        <Column images={[images[6], images[7], images[8]]} />
        <Column images={[images[9], images[10], images[11]]} />
      </div>
      <div className={styles.spacer}></div>
    </main>
  );
}

const Column = ({ images }) => {
  return (
    <div className={styles.column}>
      {images.map((src, i) => (
        <div key={i} className={styles.imageContainer}>
          <Image src={`/images/${src}`} alt="image" fill priority />
        </div>
      ))}
    </div>
  );
};
