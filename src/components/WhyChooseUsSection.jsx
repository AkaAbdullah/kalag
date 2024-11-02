import React from "react";
import { awards } from "../utils/cardData";

export const WhyChooseUsSection = () => {
  return (
    <section className=" grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-10">
      <div className=" flex gap-20 flex-wrap">
        {awards.map((item) => (
          <div
            className=" bg-blue-600 w-[150px] h-[150px]  text-white flex items-center flex-col  p-5 rounded-xl shadow-lg"
            key={item.id}
          >
            <h1 className=" font-semibold text-4xl">{item.no}</h1>
            <h1 className=" font-semibold text-lg text-center">{item.title}</h1>
          </div>
        ))}
      </div>
      <div className=" space-y-5">
        <h1 className=" text-4xl font-bold">Why Choose us.</h1>
        <p className=" text-gray-600 text-lg">
          We are the award winning professionals delivering successful projects
          every while. We are your best ally in the ever changing digital world.
        </p>
        <h1 className=" font-semibold text-xl underline">
          Modern Technologies
        </h1>
        <p className=" text-gray-600 text-lg">
          We keep ourselves ahead of what is yet to come in the modern
          digital-verse. We make it possible by adapting to the latest upgraded
          technologies.
        </p>
        <h1 className=" font-semibold text-xl underline">Digital Experience</h1>
        <p className=" text-gray-600 text-lg">
          We share our digital experience with brands that are standing proudly
          tall today. With our passion and hard work we nurtured them from
          scratch and meanwhile we thrived as well.
        </p>
      </div>
    </section>
  );
};
