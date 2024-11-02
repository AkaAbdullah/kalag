import { Cards } from "../components/Cards";
import { AboutUsSection } from "../components/AboutUsSection";
import { cardData, serviceCardData } from "../utils/cardData";
import { ServicesSection } from "../components/ServicesSection";
import { HeroSection } from "../components/HeroSection";
import { ClientsSection } from "../components/ClientsSection";

export const HomePage = () => {
  return (
    <section className=" space-y-20  h-full">
      <HeroSection />
      <Cards cardData={cardData} />
      <AboutUsSection />
      <ServicesSection cardData={serviceCardData} />
      <ClientsSection />
    </section>
  );
};
