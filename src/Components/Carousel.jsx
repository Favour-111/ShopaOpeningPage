import React from "react";
import banner from "../assets/images/Section.svg";
const Carousel = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat rounded-[10px] sm:mt-10 mt-0 py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-10"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-green-400 text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
          Why Join the Waitlist
        </h1>

        <h1 className="text-white uppercase mt-4 text-[20px] sm:text-[25px] md:text-[30px] lg:text-[36px] w-full sm:w-[90%] md:w-[70%] lg:w-[50%]">
          <span className="text-amber-300">be the first</span> to test the Shopa
          app before it's launched to the public
        </h1>

        <button className="tracking-wide text-[12px] sm:text-[13px] md:text-[14px] font-[300] bg-amber-300 px-5 sm:px-6 md:px-8 py-2 sm:py-3 mt-4 rounded-[8px]">
          Join The Waitlist
        </button>
      </div>
    </div>
  );
};

export default Carousel;
