import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const ResearchPaperCard = ({ image, name, institute, description }) => {
  return (
    <div className="p-2 md:p-4 border-4 border-gray-200 rounded-2xl md:rounded-3xl space-y-1">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "",
        }}
        className="h-52 rounded-[10px]"
      ></div>
      <h4 className="text-lg lg:text-xl font-semibold">{name}</h4>
      <h5>
        <b>Institute:</b> {institute}
      </h5>
      <p className="text-sm text-gray-500">{description}</p>
      <hr />
      <div className="text-center pt-2">
        <NavLink
          className="hover:text-blue-500 duration-300 hover:underline"
          to="/"
          href=""
        >
          Learn More
        </NavLink>
      </div>
    </div>
  );
};

export default ResearchPaperCard;
