import HeaderImage from "../../../assets/collegium-banner.jpg";

const Header = () => {
  return (
    <header
      className="hero min-h-[91vh]"
      style={{
        backgroundImage: `url(${HeaderImage})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-50"></div>
      <div className="fitting">
        <div className="text-white w-1/2">
          <h1 className="text-7xl">Your Gateway to Campus Excellence</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
