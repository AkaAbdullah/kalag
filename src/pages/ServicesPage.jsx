import React from "react";
import { ServicesSection } from "../components/ServicesSection";
import { serviceCardData } from "../utils/cardData";
import { mediaData } from "../utils/mediaData";

export const ServicesPage = () => {
  return (
    <section>
      <div className=" -z-10 w-full top-16 left-0  absolute">
        <img src={mediaData.heroBg} />
      </div>
      <ServicesSection cardData={serviceCardData} />
    </section>
  );
};
