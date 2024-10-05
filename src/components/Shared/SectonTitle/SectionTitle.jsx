/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, headingEnd, subHeading}) => {
  return (
    <div className="mb-5">
      <h3 className="text-2xl md:text-4xl font-semibold">{heading} <span className="text-blue-500">{headingEnd}</span></h3>
      <h4 className="text-xs md:text-xl">{subHeading}</h4>
    </div>
  );
};

export default SectionTitle;
