import { Cards } from "../components/Cards";
import { AboutUsSection } from "../components/AboutUsSection";
import { cardData, serviceCardData } from "../utils/cardData";
import { ServicesSection } from "../components/ServicesSection";
import { HeroSection } from "../components/HeroSection";
import { ClientsSection } from "../components/ClientsSection";
import { ConsultSection } from "../components/ConsultSection";
import { WhyChooseUsSection } from "../components/WhyChooseUsSection";
import { Reviews } from "../components/Reviews";

export const HomePage = () => {
  return (
    <section className=" space-y-20  h-full">
      <HeroSection />
      <Cards cardData={cardData} />
      <AboutUsSection />
      <ServicesSection cardData={serviceCardData} />
      <ClientsSection />
      <div className="  py-40">
        <ConsultSection />
      </div>
      <WhyChooseUsSection />
      <div className=" py-40">
        <Reviews />
      </div>
    </section>
  );
};
