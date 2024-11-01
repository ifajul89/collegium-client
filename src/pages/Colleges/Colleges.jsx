import { useEffect, useState } from "react";
import CollegeCard from "../../components/Shared/CollegeCard/CollegeCard";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return (
    <div className="fitting space-top-bottom">
      <div className="space-y-1 md:space-y-3 text-center md:text-left mb-5 md:mb-10">
        <h4 className="text-2xl md:text-5xl font-semibold">
          Colleges You Can <span className="text-blue-500">Trust</span>.
        </h4>
        <h5 className="text-xl md:text-4xl">
          Find your perfect college match
        </h5>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {colleges.map((college) => (
          <CollegeCard college={college} key={college._id}></CollegeCard>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
