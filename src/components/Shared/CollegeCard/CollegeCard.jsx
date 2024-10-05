/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const CollegeCard = ({ college }) => {
  const { image, name, admission_date, events, research_history, sports } =
    college;

  return (
    <div>
      <img src={image} alt="College Image" />
      <h4>{name}</h4>
      <h5>Admission: {admission_date}</h5>
      <h5>Events: {events.length}</h5>
      <h5>Research: {research_history.length}</h5>
      <h5>
        Sports: <span>{sports.join(", ")}</span>
      </h5>
    </div>
  );
};

export default CollegeCard;