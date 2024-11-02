import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Reviews = () => {
  return (
    <section className=" space-y-10">
      <h1 className="text-4xl font-bold text-center mb-6">
        What Our Clients Say.
      </h1>
      <hr />
      <div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          emulateTouch={true}
          interval={5000}
        >
          {/* <div className=" w-3/4 lg:w-full">
            <h1 className=" text-sm lg:text-lg text-slate-500">
              Bohat maaza aya kam kar k bhenchod maa chod di kaam ki bhsodiwalo
              ne
            </h1>
            <p className=" font-semibold text-xl">Kala Tata</p>
          </div> */}
          <div className="w-3/4 lg:w-full">
            <h1 className=" text-sm lg:text-lg text-slate-500 text-wrap">
              I cannot express how pleased I am with the service I received from
              this company. From the moment I made my initial inquiry, their
              team was incredibly responsive and attentive. They took the time
              to understand my needs and provided tailored solutions that
              exceeded my expectations. The final product was delivered on time
              and was of exceptional quality. It's rare to find such a dedicated
              and professional team. I would highly recommend them to anyone
              looking for reliable service!
            </h1>
            <p className=" font-semibold text-xl mt-6">Markus Ling</p>
          </div>
          <div className="w-3/4 lg:w-full">
            <h1 className=" text-sm lg:text-lg text-slate-500">
              Working with this company has been a game-changer for my business.
              Their expertise and innovative approach helped us achieve our
              goals faster than we anticipated. The team's communication was
              outstanding throughout the entire process. They kept me informed
              at every stage and were always open to feedback. The results have
              been remarkable, and I have already seen a significant return on
              my investment. I truly appreciate their hard work and commitment
              to excellence!
            </h1>
            <p className=" font-semibold text-xl mt-6">John Smith</p>
          </div>
        </Carousel>
      </div>
    </section>
  );
};
