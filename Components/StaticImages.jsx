"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./pagestatic.module.scss";

import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
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
          <Image src={`/images/${src}`} alt="image" fill />
        </div>
      ))}
    </div>
  );
};
