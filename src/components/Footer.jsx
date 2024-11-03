import React from "react";
import { mediaData } from "../utils/mediaData";
import { menuITems } from "../utils/data";
import { Link } from "react-router-dom";
import { CustomInput } from "./CustomInput";
import { Button } from "./Button";

export const Footer = () => {
  return (
    <footer className=" bg-white text-black flex items-center w-full h-auto  py-10  gradient">
      <div className="  grid lg:grid-cols-3 gap-5  lg:gap-10 grid-cols-1 items-start justify-items-center container mx-auto px-5 md:px-20 lg:px-40">
        <div className="  flex  items-center lg:items-start flex-col">
          <img src={mediaData.logo2} className=" w-[250px] mb-2" />
          <p className=" font-semibold text-center lg:text-start">
            Elevate your online presence with our specialized WordPress
            development solutions.
          </p>
        </div>
        <div className=" col-span-1 space-y-5">
          <p className=" font-semibold text-lg">Quick Links</p>
          <div className=" flex items-center gap-5 font-semibold text-lg flex-wrap">
            {menuITems.map((item) => (
              <Link to={item.url} key={item.id}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className=" w-full">
            <p className=" font-semibold text-lg">Newsletter</p>
            <div className=" flex lg:items-end items-start gap-5 lg:gap-0 flex-col lg:flex-row">
              <CustomInput placeholder="Email" className="bg- w-full" />
              <Button
                className="bg-blue-800 h-10 w-40  rounded-none"
                title="Send"
              />
            </div>
          </div>
          <div className="  col-span-1 space-y-5 block md:hidden">
            <p className=" font-semibold text-lg">Contact Info</p>
            <p className=" font-semibold text-lg">+14092327588</p>
            <p className=" font-semibold text-lg">
              <span className=" text-xl">&#9993; </span>
              info@blueittechnology.com
            </p>
          </div>
        </div>
        <div className="  col-span-1 space-y-5 hidden md:block ">
          <p className=" font-semibold text-lg">Contact Info</p>
          <p className=" font-semibold text-lg">+14092327588</p>
          <p className=" font-semibold text-lg">
            <span className=" text-xl">&#9993; </span>
            info@blueittechnology.com
          </p>
        </div>
      </div>
    </footer>
  );
};
