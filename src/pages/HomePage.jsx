import { Cards } from "../components/Cards";
import { AboutUsSection } from "../components/AboutUsSection";
import { cardData, serviceCardData } from "../utils/cardData";
import { ServicesSection } from "../components/ServicesSection";
import { HeroSection } from "../components/HeroSection";
import { ClientsSection } from "../components/ClientsSection";
import { ConsultSection } from "../components/ConsultSection";
import { WhyChooseUsSection } from "../components/WhyChooseUsSection";
import { Reviews } from "../components/Reviews";
// import { ReactSlider } from "../components/Slider";

export const HomePage = () => {
  return (
    <section className=" space-y-20  h-full">
      <div className=" py-20">
        <HeroSection />
        <Cards cardData={cardData} />
      </div>
      <div className=" lg:py-20">
        <AboutUsSection />
      </div>
      <ServicesSection cardData={serviceCardData} />
      <div className=" hidden lg:flex">{/* <ClientsSection /> */}</div>
      <div className="  lg:py-40">
        <ConsultSection />
      </div>
      <WhyChooseUsSection />
      <div className=" py-40 hidden lg:flex">
        <Reviews />
      </div>
    </section>
  );
};
