import React from "react";

function Services() {
  return (
    <div className="h-full  m-0 md:m-10  border-[0px] md:border border-[#BB9B66] text-black">
      <div className="flex flex-col h-[400px] m-5 md:m-2   ">
        <div className="flex h-full">
          <div className="flex border  breakfastbg  overflow-hidden items-center justify-center  h-full w-full">
            <h1 className="text-white tracking-widest text-md md:text-2xl  flex items-center justify-center  font-extralight bg-black/50 h-[50px] w-full ">
              Petit déjeuner
            </h1>
          </div>
          <div className="flex border chauffeurbg  overflow-hidden items-center justify-center  h-full w-full">
            <h1 className="text-white tracking-widest text-md md:text-2xl  flex items-center justify-center  font-extralight bg-black/50 h-[50px] w-full ">
              Chauffeur
            </h1>
          </div>
          <div className="flex border laundrybg  overflow-hidden items-center justify-center  h-full w-full">
            <h1 className="text-white tracking-widest text-md md:text-2xl  flex items-center justify-center  font-extralight bg-black/50 h-[50px] w-full ">
              Laundry
            </h1>
          </div>
          <div className="flex border eventsbg overflow-hidden items-center justify-center  h-full w-full">
            <h1 className="text-white tracking-widest text-md md:text-2xl  flex items-center justify-center  font-extralight bg-black/50 h-[50px] w-full ">
              Événementiel
            </h1>
          </div>
        </div>
        {/* <div className="flex h-full"></div> */}
        {/* <div className="flex border dogsbg  overflow-hidden items-center justify-center rounded-xl h-full w-full">
          Doggs
        </div> */}
      </div>
    </div>
  );
}

export default Services;
