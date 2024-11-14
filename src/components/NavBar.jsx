import { menuITems } from "../utils/data";
import { Link, NavLink } from "react-router-dom";
import { mediaData } from "../utils/mediaData";
import { Button } from "./Button";

export const NavBar = () => {
  return (
    <nav className=" hidden  fixed bg-white z-40 shadow-lg w-full h-16 text-black  md:flex items-center ">
      <div className=" flex items-center justify-between container mx-auto px-5 md:px-20 lg:px-40 ">
        <Link to="/">
          <img src={mediaData.logo1} className=" w-[100px]" />
        </Link>
        <MenuItems />
        <ContactITems />
      </div>
    </nav>
  );
};

export const MenuItems = () => {
  return (
    <div className=" flex  items-center gap-10">
      {menuITems.map((items) => (
        <NavLink
          key={items.id}
          to={items.url}
          className={({ isActive }) =>
            isActive
              ? " text-blue-700  text-lg font-semibold   underline"
              : "  text-lg text-black font-semibold"
          }
        >
          {items.title}
        </NavLink>
      ))}
    </div>
  );
};

export const ContactITems = () => {
  return (
    <div className=" flex items-center gap-5">
      <a
        className="bg-white text-blue-600  p-3 rounded-lg font-semibold  hover:bg-blue-600 hover:text-white hover:scale-105 duration-100  outline outline-1"
        href="https://wa.link/22xwoh"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Started
      </a>
    </div>
  );
};
