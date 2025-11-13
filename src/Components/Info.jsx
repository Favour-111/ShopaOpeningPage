import React from "react";
import image from "../assets/images/Paper-Texture.svg.svg";
import { CiBank } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { LuBuilding2 } from "react-icons/lu";
import image1 from "../assets/images/OBJECTS.svg";
import image2 from "../assets/images/OBJECTS (1).svg";
import image3 from "../assets/images/Group.svg";
const Info = () => {
  const infoArray = [
    {
      icon: CiBank,
      iconColor: "black",
      Header: "Student Vendors",
      content:
        "upload and sell your items, manage orders,and grow your business",
      image: image1,
      background: "#51d158",
    },
    {
      icon: IoCartOutline,
      iconColor: "#f3ce42",
      Header: "Student Buyers",
      content: "Find trusted sellers, compare prices, and buy with ease",
      image: image2,
      background: "#ffefd6",
    },
    {
      icon: LuBuilding2,
      iconColor: "green",
      Header: "Universities",
      content: "Support campus entrepreneurship",
      image: image3,
      background: "#d9ffda",
    },
  ];
  return (
    <div
      className="sm:bg-contain bg-cover bg-center sm:mt-10 mt-0 h-auto sm:py-16 py-30 px-4 sm:px-6 md:px-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="px-2 sm:px-6 md:px-10">
        <h1 className="text-center text-green-700 text-2xl sm:text-3xl font-bold tracking-wide">
          Who it's For
        </h1>
        <p className="text-[#787878] text-sm sm:text-base mt-3 w-full sm:w-[90%] md:w-[83%] text-center mx-auto">
          Whether you're a buyer or seller in a university environment, then
          Shopa is for you
        </p>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {infoArray.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-[10px] h-auto py-8 px-6 flex flex-col "
                style={{ backgroundColor: item.background }}
              >
                <div className="mb-3">
                  <Icon size={30} color={item.iconColor} />
                </div>

                <h1 className="text-2xl sm:text-2xl mt-5 font-bold">
                  {item.Header}
                </h1>
                <p className="opacity-80 text-[13px] mt-2">{item.content}</p>
                <img
                  src={item.image}
                  alt={item.Header}
                  className="w-fit h-auto mt-5 mb-3 "
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Info;
