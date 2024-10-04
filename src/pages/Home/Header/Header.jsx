import HeaderImage from "../../../assets/collegium-banner.jpg";
import { BiSearchAlt } from "react-icons/bi";
import { FaAnglesDown } from "react-icons/fa6";

const Header = () => {
  return (
    <header
      className="min-h-[91vh] relative"
      style={{
        backgroundImage: `url(${HeaderImage})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="absolute h-full w-full z-[1] bg-black bg-opacity-50"></div>
      <div className="w-[80%] absolute left-[10%] right-[10%] top-[15%] z-[2] text-white flex flex-col items-center text-center">
        <h2 className="text-2xl mb-3">
          Search Your Desired <span className="font-semibold">Campus</span>
        </h2>
        <form className="flex w-2/3 p-[2px] pl-5 items-center rounded-full bg-white mb-10">
          <input
            type="text"
            placeholder="Type here"
            className="w-full text-lg text-black outline-none"
          />
          <button className="btn btn-circle border-0 bg-blue-500 hover:bg-blue-600 duration-300  text-white text-2xl">
            <BiSearchAlt />
          </button>
        </form>
        <h1
          className="text-7xl font-semibold
        "
        >
          We are <span className="text-blue-500 font-bold">Collegium</span>.
        </h1>
        <h2 className="text-5xl">
          Your Gateway to Campus Excellence
          <br />
        </h2>
        <i className="text-lg text-gray-100 w-1/2 mt-14">
          &quot;Collegium simplifies the college search and booking process,
          connecting students with top institutions. Explore colleges, learn
          about admissions, and book your future—all in one place.&quot;
        </i>
      </div>
        <FaAnglesDown className="absolute text-white z-20 text-3xl bottom-4 right-1/2 left-1/2" />
    </header>
  );
};

export default Header;
