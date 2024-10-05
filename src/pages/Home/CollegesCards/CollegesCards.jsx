import { useEffect, useState } from "react";
import SectionTitle from "../../../components/Shared/SectonTitle/SectionTitle";
import CollegeCard from "../../../components/Shared/CollegeCard/CollegeCard";

const CollegesCards = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("colleges.json")
      .then((res) => res.json())
      .then((data) => {
        const limitedColleges = data.slice(0, 3);
        setColleges(limitedColleges);
      });
  }, []);

  console.log(colleges);

  return (
    <section className="fitting space-top-bottom">
      <SectionTitle
        heading="Explore Top"
        headingEnd="College"
        subHeading="Discover the perfect institution for your future where learning, innovation, and experiences come"
      />
      <div className="grid grid-cols-3 gap-5">
        {colleges.map((college) => (
          <CollegeCard college={college} key={college._id}></CollegeCard>
        ))}
      </div>
    </section>
  );
};

export default CollegesCards;
