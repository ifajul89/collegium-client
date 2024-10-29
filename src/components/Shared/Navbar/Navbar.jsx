import { NavLink } from "react-router-dom";
import { TbLayoutCollage } from "react-icons/tb";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import DefaultProfilePicture from "../../../assets/defaultProfilePic.jpg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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
      <NavLink className="hover:text-blue-500 duration-300" to="/admission">
        Admission
      </NavLink>
      <hr className="md:hidden" />
      <NavLink className="hover:text-blue-500 duration-300" to="/my-college">
        My College
      </NavLink>
    </>
  );

  const authNavItem = (
    <>
      <NavLink className="hover:text-blue-500 duration-300" to="/login">
        Login
      </NavLink>
      <hr />
      <NavLink className="hover:text-blue-500 duration-300" to="/register">
        Register
      </NavLink>
    </>
  );

  const signedNavItem = (
    <>
      <NavLink className="hover:text-blue-500 duration-300" to="/profile">
        Profile
      </NavLink>
      <hr />
      <button onClick={logOut} className="hover:text-blue-500 duration-300">
        Log Out
      </button>
    </>
  );

  return (
    <nav className="navbar fitting bg-base-100 flex gap-2 items-center justify-between">
      <NavLink
        to="/"
        className="text-2xl md:text-3xl font-semibold flex items-center flex-1 lg:flex-none"
      >
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
          className="dropdown-content menu bg-white rounded-box z-[10] w-[150px] px-3 shadow text-center text-lg space-y-1"
        >
          {navItems}
        </ul>
      </div>
      <div className="space-x-6 text-lg hidden md:block">{navItems}</div>
      <div className="dropdown dropdown-end">
        <img
          className="w-10 rounded-full border-2 border-blue-500 cursor-pointer"
          src={user ? user?.photoURL : DefaultProfilePicture}
          tabIndex={0}
          alt="Profile"
        ></img>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-white rounded-box z-[10] w-[150px] px-3 shadow text-center text-lg space-y-1"
        >
          {user ? signedNavItem : authNavItem}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
