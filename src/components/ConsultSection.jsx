import { Button } from "./Button";

export const ConsultSection = () => {
  return (
    <section className=" ">
      <h1 className=" text-4xl font-bold  leading-[60px] text-center">
        Looking For A Solution To All Your
        <span className="  text-yellow-400"> Marketing Problems</span> At One
        Place? Let’s Connect
      </h1>
      <p className=" text-center mt-5 font-semibold">
        Schedule a FREE Consultation Today! We are Here to help!
      </p>
      <div className=" flex items-center justify-center mt-10">
        <a
          className="bg-blue-600 text-white  w-40 text-center p-3 rounded-full font-semibold  hover:bg-white hover:text-black hover:scale-105 duration-100  outline outline-1"
          href="https://wa.link/22xwoh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};
