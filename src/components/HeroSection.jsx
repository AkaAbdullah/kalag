import { Button } from "./Button";
import { TypeAnimation } from "react-type-animation";
import { ScrollButton } from "./ScrollButton";

export const HeroSection = () => {
  return (
    <div className=" flex  items-start flex-col justify-center  ">
      <div className="  space-y-3  w-full lg:w-1/2">
        <h1 className=" text-5xl font-extrabold">
          Results Driven Ecommerce Website with
        </h1>
        <TypeAnimation
          className=" text-blue-600  font-extrabold"
          sequence={[
            1000,
            "Marketing Solutions",
            1000,
            "Software Solutions",
            1000,
            "LLC Creation",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
        {/* <p className=" text-slate-400">
            Get your company registered in the United States hassle-free and
            swiftly, starting at just $179 + state fees, all online.
          </p> */}
        <div className=" flex flex-col lg:flex-row gap-5">
          {/* <Button title="Get Started" variant="primary" /> */}
          <a
            className="bg-white text-blue-600  p-3 rounded-lg font-semibold  hover:bg-blue-600 hover:text-white hover:scale-105 duration-100  outline outline-1"
            href="https://wa.link/22xwoh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className=" mt-5 w-full flex items-center justify-center">
        <ScrollButton />
      </div>
    </div>
  );
};
