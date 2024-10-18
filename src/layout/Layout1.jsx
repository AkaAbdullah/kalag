import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";
import { MobileNavBar } from "../components/MobileNavBar";

export const Layout1 = () => {
  return (
    <main className=" grid min-h-[100dvh]  grid-rows-[auto_1fr_auto]">
      <NavBar />
      <MobileNavBar />
      <section className="  container mx-auto px-5 md:px-20 lg:px-40  ">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};
