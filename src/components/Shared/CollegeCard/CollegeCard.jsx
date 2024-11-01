/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
  const { _id, image, name, admission_date, events, research_history, sports } =
    college;

  return (
    <div className="p-2 md:p-5 border-4 border-gray-200 rounded-2xl md:rounded-3xl space-y-1">
      <img className="rounded-[10px]" src={image} alt="College Image" />
      <h4 className="text-xl lg:text-3xl font-semibold">{name}</h4>
      <h5 className="text-gray-500 font-semibold">
        Admission: {admission_date}
      </h5>
      <div className="flex gap-1">
        <h5 className="bg-blue-200 border rounded-full border-blue-500 px-2 text-blue-500 md:text-lg">
          {events.length} Events
        </h5>
        <h5 className="bg-blue-200 border rounded-full border-blue-500 px-2 text-blue-500 md:text-lg">
          {research_history.length} Research
        </h5>
      </div>
      <h5 className="text-gray-500">
        Sports: <span>{sports.join(", ")}</span>
      </h5>
      <Link
        to={`/colleges/${_id}`}
        className="btn btn-sm md:btn-md w-full text-lg hover:bg-blue-600 duration-300 text-white bg-blue-500"
      >
        See Details
      </Link>
    </div>
  );
};

export default CollegeCard;
