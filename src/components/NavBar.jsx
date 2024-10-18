import { menuITems } from "../utils/data";
import { Link, NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import logo from "../assets/m.png";

export const NavBar = () => {
  return (
    <nav className=" hidden bg-white shadow-sm w-full h-16 text-black  md:flex items-center ">
      <div className=" flex items-center justify-between container mx-auto px-5 md:px-20 lg:px-40 ">
        <Link to="/">
          <img src={logo} className=" size-12 rounded-full object-cover" />
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
            isActive ? " font-semibold underline" : ""
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
      <Link className=" font-semibold text-blue-700 flex items-center gap-2 text-lg">
        <FaPhone size={30} className=" text-blue-700" />
        +1 (737)283-1075
      </Link>
      <button className=" bg-blue-700  rounded-lg p-2 flex items-center justify-center  text-white font-semibold">
        Get Started
      </button>
    </div>
  );
};
