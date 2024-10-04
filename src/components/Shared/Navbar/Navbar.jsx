import { NavLink } from "react-router-dom";
import { TbLayoutCollage } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="navbar fitting bg-base-100 flex items-center justify-between">
      <NavLink target="/" className="text-3xl font-semibold flex items-center">
        <TbLayoutCollage className="text-4xl text-blue-500" />
        Collegium<span className="text-blue-500">.</span>
      </NavLink>
      <div className="space-x-6 text-lg">
        <NavLink className="hover:text-blue-500 duration-300" target="/">
          Home
        </NavLink>
        <NavLink className="hover:text-blue-500 duration-300" target="/">
          Colleges
        </NavLink>
        <NavLink className="hover:text-blue-500 duration-300" target="/">
          Admission
        </NavLink>
        <NavLink className="hover:text-blue-500 duration-300" target="/">
          My College
        </NavLink>
      </div>
    </nav>
  );
};

// Home’, ‘Colleges’, Admission, and ‘My College’

export default Navbar;
