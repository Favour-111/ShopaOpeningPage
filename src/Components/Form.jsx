import React from "react";
import banner from "../assets/images/Paper-Texture.svg.svg";
const Form = () => {
  return (
    <div
      className="sm:bg-contain bg-cover bg-center mt-10 h-auto sm:py-16 py-30 px-4 sm:px-6 md:px-10"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="px-2 sm:px-6 md:px-10 flex items-center flex-col">
        <h1 className="text-center text-green-700 text-2xl font-bold tracking-wide">
          Join the Waitlist
        </h1>

        <p className="text-[#787878] capitalize text-sm mt-2 w-full sm:w-[90%] md:w-[80%] text-center mx-auto">
          Be part of the first 1,000 students to experience Shopa
        </p>

        <div className="w-full sm:w-[450px] md:w-[500px] flex flex-col items-center justify-center mt-6">
          <input
            type="text"
            placeholder="Name"
            className="outline-none border border-[#d3d3d3] w-full p-2 mt-3 placeholder:text-sm "
          />
          <input
            type="text"
            placeholder="Email Address"
            className="outline-none border border-[#d3d3d3] w-full p-2 mt-3 placeholder:text-sm "
          />
          <input
            type="text"
            placeholder="Enter your University"
            className="outline-none border border-[#d3d3d3] w-full p-2 mt-3 placeholder:text-sm "
          />
          <textarea
            placeholder="Additional Message"
            className="outline-none border border-[#d3d3d3] w-full h-32 sm:h-36 resize-none p-2 mt-3 placeholder:text-sm "
          />
          <button className="tracking-wide text-[13px] sm:text-[14px] md:text-[15px] font-[300] bg-amber-300 px-6 w-full py-3 mt-4 rounded-[8px]">
            Join The Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
