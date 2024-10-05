import { useEffect, useState } from "react";
import SectionTitle from "../../../components/Shared/SectonTitle/SectionTitle";

const CollegesCards = () => {
  const [colleses, setColleges] = useState([]);

  useEffect(() => {
    fetch("colleges.json")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  console.log(colleses);

  return (
    <div className="fitting">
      <SectionTitle
        heading="Explore Top Colleges"
        subHeading="Discover the perfect institution for your future"
        subHeading2="where learning, innovation, and experiences come"
      />
    </div>
  );
};

export default CollegesCards;
