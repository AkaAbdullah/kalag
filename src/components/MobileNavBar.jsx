import { Link, NavLink } from "react-router-dom";
import logo from "../assets/m.png";
import { ImMenu } from "react-icons/im";
import { useNav } from "../hooks/useNav";
import { menuITems } from "../utils/data";

export const MobileNavBar = () => {
  const { onMEnuClick, navOpen } = useNav();
  return (
    <>
      <nav className=" flex lg:hidden h-16 w-full justify-between flex-row bg-white shadow-lg p-5 items-center ">
        <Link to="/">
          <img src={logo} className=" size-10" />
        </Link>
        <ImMenu size={30} onClick={onMEnuClick} />
      </nav>
      {navOpen && <MobileMenuITems onClick={onMEnuClick} />}
    </>
  );
};

const MobileMenuITems = ({ onClick }) => {
  return (
    <div className=" bg-white h-screen w-full">
      <div className=" flex flex-col gap-5 mt-20  items-center justify-center">
        {menuITems.map((item) => (
          <NavLink
            onClick={onClick}
            key={item.id}
            to={item.url}
            className={({ isActive }) =>
              isActive
                ? " font-semibold  bg-black bg-opacity-15 w-full  text-center h-10 flex items-center justify-center text-2xl "
                : " text-2xl"
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
