import { NavLink } from "react-router-dom";
// import { TbLayoutCollage } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100">
      <NavLink target="/" className="btn btn-ghost text-xl">
        {/* <TbLayoutCollage /> */}
        Collegium
      </NavLink>
    </nav>
  );
};

export default Navbar;
