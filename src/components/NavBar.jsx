import { menuITems } from "../utils/data";
import { Link, NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { mediaData } from "../utils/mediaData";

export const NavBar = () => {
  return (
    <nav className=" hidden gradient shadow-sm w-full h-16 text-black  md:flex items-center ">
      <div className=" flex items-center justify-between container mx-auto px-5 md:px-20 lg:px-40 ">
        <Link to="/">
          <img src={mediaData.logo} className=" w-[100px]" />
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
              : "  text-lg text-blue-700"
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
      <button className=" bg-blue-700  rounded-full p-2 flex items-center justify-center  text-white font-semibold">
        Get Started
      </button>
    </div>
  );
};
