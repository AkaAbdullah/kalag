import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      items: 1,
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
        <div className=" font-semibold text-2xl">Mia Khalifa</div>
        <div className=" font-semibold text-2xl">Eva Elfie</div>
        <div className=" font-semibold text-2xl">Lisa Ann</div>
        <div className=" font-semibold text-2xl">Jhonny Sins</div>
        <div className=" font-semibold text-2xl">Mia Malkova</div>
        <div className=" font-semibold text-2xl">Candy Love</div>
        <div className=" font-semibold text-2xl">Mira David</div>
        <div className=" font-semibold text-2xl">Mia Malkova</div>
        <div className=" font-semibold text-2xl">Charity Crawford</div>
        <div className=" font-semibold text-2xl">Jennice Griffith</div>
      </Carousel>
    </section>
  );
};
