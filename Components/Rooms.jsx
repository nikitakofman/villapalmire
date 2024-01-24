import React from "react";
import Main from "./Main";
import Image from "next/image";

export default function Rooms() {
  return (
    <>
      <div id="rooms" />
      <div className="h-svh">
        <div className="p-5 md:p-10 gap-2 h-full flex-col md:flex-row flex items-center justify-center">
          {/* <Image src="/ch1.jpg" alt="Chambre 1" width={300} height={300} />
          <Image src="/ch2.jpg" alt="Chambre 2" width={300} height={300} />
          <Image src="/ch3.jpeg" alt="Chambre 2" width={300} height={300} /> */}

          <div className="chambre1bg w-full h-full flex flex-col items-left justify-end">
            {/* <div className=" m-3 border-2 border-[#BB9B66] p-3 bg-black/40 text-white">
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
