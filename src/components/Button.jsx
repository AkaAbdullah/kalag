import { twMerge } from "tailwind-merge";

export const Button = ({ title, onClick, type, variant, className }) => {
  let buttonClasses = `rounded-lg h-12 w-full lg:w-40 shadow-md text-white font-semibold text-lg`;

  switch (variant) {
    case "primary":
      buttonClasses = twMerge(
        buttonClasses,
        "bg-blue-600 text-white  hover:bg-white  hover:text-text-blue-600 hover:scale-105 duration-100"
      );
      break;
    case "secondary":
      buttonClasses = twMerge(
        buttonClasses,
        "bg-white text-blue-600   hover:bg-blue-600 hover:text-white hover:scale-105 duration-100  outline outline-1"
      );
      break;
    default:
      buttonClasses = twMerge(buttonClasses, "bg-red-600");
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={twMerge(buttonClasses, className)}
    >
      {title}
    </button>
  );
};
