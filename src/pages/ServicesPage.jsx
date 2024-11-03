import React from "react";
import { ServicesSection } from "../components/ServicesSection";
import { serviceCardData } from "../utils/cardData";

export const ServicesPage = () => {
  return (
    <section>
      <ServicesSection cardData={serviceCardData} />
    </section>
  );
};
