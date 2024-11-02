import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { clientsLogos } from "../utils/cardData";

export const ClientsSection = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 0,
    },
  };

  return (
    <section className=" space-y-10">
      <h1 className=" text-3xl font-semibold text-center">Our Clients</h1>
      <hr />
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={2000}
        centerMode={true}
        className=" cursor-pointer"
        // containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        // itemClass="flex justify-center items-center"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
      >
        {clientsLogos.map((item) => (
          <img
            src={item.logo}
            key={item.id}
            className=" size-[100px] object-cover rounded-full"
          />
        ))}
      </Carousel>
    </section>
  );
};
