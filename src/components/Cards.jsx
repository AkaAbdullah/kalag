export const Cards = ({ cardData }) => {
  return (
    <div className=" flex flex-wrap gap-5 mt-20 flex-col items-center  lg:flex-row justify-between">
      {cardData?.map((item) => (
        <div
          key={item.id}
          className=" rounded-xl hover:scale-105 duration-300 cursor-pointer shadow-lg w-full md:w-[250px] min-h-[340px]  bg-gradient-to-t  from-blue-900 to-blue-500 p-5"
        >
          {item.icon}
          <div>
            <h1 className=" font-semibold text-white mt-5">{item.title}</h1>
            <h1 className=" font-semibold text-white mt-8">
              {item.description}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};
