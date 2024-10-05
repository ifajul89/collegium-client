import { useEffect, useState } from "react";
import CollegeCard from "../../components/Shared/CollegeCard/CollegeCard";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("colleges.json")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  console.log(colleges);

  return (
    <div className="fitting space-top-bottom grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {colleges.map((college) => (
        <CollegeCard college={college} key={college._id}></CollegeCard>
      ))}
    </div>
  );
};

export default Colleges;
