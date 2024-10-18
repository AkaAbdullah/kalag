import { Button } from "../components/Button";
import { mediaData } from "../utils/mediaData";
import { TypeAnimation } from "react-type-animation";

export const HomePage = () => {
  return (
    <section className="flex  items-center mt-10 lg:justify-between gap-10  justify-center lg:gap-20  flex-col lg:flex-row">
      <div className="  space-y-3">
        <h1 className="  font-extralight">FASTEST COMPANY FORMATION</h1>
        <h1 className=" text-4xl font-extrabold">
          Launch your US Company
          <br className=" hidden lg:block" /> with
        </h1>
        <TypeAnimation
          className=" text-blue-600  font-extrabold"
          sequence={[
            1000,
            "Operating Agreement",
            1000,
            "Registered Agent",
            1000,
            "Mailing Address",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
        <p className=" text-slate-400">
          Get your company registered in the United States hassle-free and
          swiftly, starting at just $179 + state fees, all online.
        </p>
        <div className=" flex flex-col lg:flex-row gap-5">
          <Button title="Get Started" variant="primary" />
          <Button title="Get Started" variant="secondary" />
        </div>
      </div>
      <div>
        <img src={mediaData.landigpageImage} className=" w-[682px] h-[450px]" />
      </div>
    </section>
  );
};
