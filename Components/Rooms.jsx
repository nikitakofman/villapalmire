"use client";

import React from "react";
import Main from "./Main";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Rooms() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <div id="rooms" />
      <div
        ref={ref}
        className={`h-full transition-opacity duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="p-5 md:p-10 gap-2  flex-col md:flex-row flex items-center justify-center">
          <div className="w-full  flex  items-left justify-start">
            <video autoPlay muted loop className="w-full  object-cover">
              <source src="/room1vp.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
              className=" m-3 tracking-[0.6em] absolute text-xl font-extrabold text-center border-2 border-[#BB9B66] p-3 bg-black/60 text-white"
              style={{ fontFamily: "Nanum Myeongjo" }}
            >
              SUNLIGHT
            </div>
          </div>
          <div className="w-full  flex flex-col items-left justify-start">
            <video autoPlay muted loop className="w-full  object-cover">
              <source src="/room2vp.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
              className=" m-3 tracking-[0.6em] absolute text-xl font-extrabold text-center border-2 border-[#BB9B66] p-3 bg-black/60 text-white"
              style={{ fontFamily: "Nanum Myeongjo" }}
            >
              SUNRISE
            </div>
          </div>
          <div className=" w-full  flex flex-col items-left justify-start">
            <video autoPlay muted loop className="w-full  object-cover">
              <source src="/room3vp.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
              className=" m-3 tracking-[0.6em] absolute text-xl font-extrabold text-center border-2 border-[#BB9B66] p-3 bg-black/60 text-white"
              style={{ fontFamily: "Nanum Myeongjo" }}
            >
              SUNSET
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
