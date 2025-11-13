import React from "react";
import logo from "../assets/images/Vector.svg";
import banner from "../assets/images/Section.svg";
import {
  FaFacebook,
  FaLinkedin,
  FaSquareInstagram,
  FaTwitter,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <div
      className=" bg-cover bg-no-repeat bg-center mt-20 h-auto sm:py-16 py-30 px-4 sm:px-6 md:px-10"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="bg-yellow-400 sm:px-10 px-7 rounded-[10px] sm:mt-[-100px] mt-[-200px] sm:py-15 py-8 flex sm:items- gap-10 items-start justify-between sm:flex-row flex-col">
        <div>
          <img src={logo} className="w-30" alt="" />
          <p className="mt-3 text-[12px] text-[#787878]">Buy, Sell, Connect</p>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <FaSquareInstagram color="green" />
          </div>
          <div>
            <FaTwitter color="green" />
          </div>
          <div>
            <FaFacebook color="green" />
          </div>
          <div>
            <FaLinkedin color="green" />
          </div>
        </div>
      </div>
      <p className="text-white text-[12px] text-center opacity-75 mt-10">
        {" "}
        @2025 Shopa.All rights reserved
      </p>
    </div>
  );
};

export default Footer;
