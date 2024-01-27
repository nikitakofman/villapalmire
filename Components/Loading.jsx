"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

function Loading() {
  const [isLoading, setIsLoading] = useState(true); // State to control loading screen

  useEffect(() => {
    // Hide the loading screen after a delay or when the content is ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {" "}
      {isLoading && (
        <div class="fixed top-0  left-0 w-full h-full bg-white  flex justify-center items-center z-50">
          {/* Your loading screen content, e.g., a spinner */}
          <div className="container  flex items-center justify-center gap-5 flex-col">
            <Image
              alt="Villa Palmire Logo"
              width={35}
              height={35}
              src="/logovp.webp"
              className="size-20 "
            />
            <div
              className="bg-white  whitespace-nowrap tracking-widest   text-[#BB9B66] -mr-2    text-xl"
              style={{ fontFamily: "Nanum Myeongjo" }}
            >
              VILLA PALMIRE
            </div>
            <div className="Loading"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Loading;
