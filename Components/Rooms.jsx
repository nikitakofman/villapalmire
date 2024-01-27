"use client";

import React from "react";
import Main from "./Main";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Rooms() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <div id="rooms" />
      <div
        ref={ref}
        className={`h-svh transition-opacity duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="p-5 md:p-10 gap-2 h-full flex-col md:flex-row flex items-center justify-center">
          <div className="chambre1bg w-full h-full flex flex-col items-left justify-end">
            {/* <div className=" m-3 border-2 border-[#BB9B66] top-[300px] p-3 bg-black/40 text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, aut! Consequatur, laborum commodi nam pariatur
              voluptate
            </div> */}
            <div
              className=" m-3 tracking-[0.6em] text-xl font-extrabold text-center border-2 border-[#BB9B66] p-3 bg-black/60 text-white"
              style={{ fontFamily: "Nanum Myeongjo" }}
            >
              SUNLIGHT
            </div>
          </div>
          <div className="chambre2bg w-full h-full flex flex-col items-left justify-end">
            {/* <div className=" m-3 border-2 border-[#BB9B66] p-3 bg-black/40 text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, aut! Consequatur, laborum commodi nam pariatur
              voluptate
            </div> */}
            <div
              className=" m-3 tracking-[0.6em] text-xl font-extrabold text-center border-2 border-[#BB9B66] p-3 bg-black/60 text-white"
              style={{ fontFamily: "Nanum Myeongjo" }}
            >
              SUNRISE
            </div>
          </div>
          <div className="chambre3bg w-full h-full flex flex-col items-left justify-end">
            {/* <div className=" m-3 border-2 border-[#BB9B66] p-3 bg-black/40 text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, aut! Consequatur, laborum commodi nam pariatur
              voluptate
            </div> */}
            <div
              className=" m-3 tracking-[0.6em] text-xl font-extrabold text-center border-2 border-[#BB9B66] p-3 bg-black/60 text-white"
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
