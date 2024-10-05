import { NavLink } from "react-router-dom";
import { TbLayoutCollage } from "react-icons/tb";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
  const navItems = (
    <>
      <NavLink className="hover:text-blue-500 duration-300" to="/">
        Home
      </NavLink>
      <hr className="md:hidden" />
      <NavLink className="hover:text-blue-500 duration-300" to="/colleges">
        Colleges
      </NavLink>
      <hr className="md:hidden" />
      <NavLink className="hover:text-blue-500 duration-300" to="/">
        Admission
      </NavLink>
      <hr className="md:hidden" />
      <NavLink className="hover:text-blue-500 duration-300" to="/">
        My College
      </NavLink>
    </>
  );

  return (
    <nav className="navbar fitting bg-base-100 flex items-center justify-between">
      <NavLink to="/" className="text-2xl md:text-3xl font-semibold flex items-center">
        <TbLayoutCollage className="text-3xl md:text-4xl text-blue-500" />
        Collegium<span className="text-blue-500">.</span>
      </NavLink>
      <div className="dropdown dropdown-end md:hidden">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-circle btn-sm sm:btn-md text-xl bg-blue-500 text-white border-0"
        >
          <HiOutlineBars3BottomRight />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-white rounded-box z-[10] w-[150px] px-3 shadow text-center text-lg space-y-1 after:horizontal"
        >
          {navItems}
        </ul>
      </div>
      <div className="space-x-6 text-lg hidden md:block">{navItems}</div>
    </nav>
  );
};

export default Navbar;
