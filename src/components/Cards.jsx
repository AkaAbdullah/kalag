export const Cards = ({ cardData }) => {
  return (
    <div className=" flex flex-wrap gap-5 flex-col  lg:flex-row justify-between">
      {cardData?.map((item) => (
        <div
          key={item.id}
          className=" rounded-xl shadow-lg w-[250px] h-auto  bg-gradient-to-t  from-blue-900 to-blue-500 p-5"
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
