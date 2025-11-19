import React from "react";
import { CiBank } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { LuBuilding2 } from "react-icons/lu";

const AboutSection = () => {
  const sectionItem = [
    {
      icon: CiBank,
      header: "Every vendor gets a platform ",
      content:
        "Every student who sells product on campus can upload their products on Shopa, reach thousand of students within their school and sell seamlessly instead of relying on whatApp DMs ot story update ",
    },
    {
      icon: LuBuilding2,
      header: "Every university builds a thriving student economy",
      content:
        "By connecting students buyers and sellers with each school, Shopa helps create a structured marketplace that strengthens entrepreneurship and innovation on campus",
    },
    {
      icon: IoCartOutline,
      header: "Every buyer shops with confidence",
      content:
        "Students buying on Shopa can easily find verified,trusted vendor from their own university and make secure purchases with peace of mind",
    },
  ];
  return (
    <div className="p-6 bg-white rounded-[15px] mt-6">
      <h1 className="text-center text-green-700 text-2xl font-bold tracking-wide">
        What is Shopa?
      </h1>
      <p className="text-[#787878] text-sm mt-3 w-full sm:w-[90%] md:w-[83%] text-center m-auto">
        Born from the reality of students life, Shopa is the first
        campus-focused e-commerce platform exclusively for all Nigerian
        University students, designed to organize and empower student commerce.
        It connects student vendors and buyers within their own universities,
        bringing structure, trust, and visibility to campus marketplaces.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-7">
        {sectionItem.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="py-10 px-4 shadow-sm rounded-[10px] flex flex-col"
            >
              <div className="bg-green-100 p-3 rounded-[10px] w-fit mb-3">
                <Icon size={20} className="text-green-700" />
              </div>
              <h1 className="text-[18px] font-bold leading-6">{item.header}</h1>
              <p className="mt-2 text-[14px] font-[300] text-[#a3a3a3]">
                {item.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutSection;
