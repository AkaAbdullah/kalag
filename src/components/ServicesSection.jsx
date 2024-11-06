import React from "react";
import { serviceCardData } from "../utils/cardData";

export const ServicesSection = ({ cardData, id }) => {
  return (
    <section id={id} className=" space-y-10 ">
      <h1 className=" text-2xl font-semibold text-center">What We Offer?</h1>
      <p className=" text-center">
        Your digital success is just a click away - let us help you thrive
        online - where creativity meets innovation.
      </p>
      <hr />
      <div className=" flex flex-wrap gap-10 items-center justify-between flex-col lg:flex-row">
        {cardData?.map((item) => (
          <div
            key={item.id}
            className=" space-y-5 hover:bg-blue-200 duration-500 hover:text-black cursor-pointer hover:scale-105 duration-400 text-white p-5 bg-blue-600 rounded-lg shadow-md w-full  min-h-[400px]  md:w-[300px]"
          >
            <div>{item.icon}</div>
            <div className=" space-y-8">
              <h1 className=" font-semibold text-lg">{item.title}</h1>
              <p className="">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
