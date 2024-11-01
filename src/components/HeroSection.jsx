import { Button } from "./Button";
import { TypeAnimation } from "react-type-animation";

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
            "Prostitution",
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
          <Button title="Get Started" variant="secondary" />
        </div>
      </div>
    </div>
  );
};
