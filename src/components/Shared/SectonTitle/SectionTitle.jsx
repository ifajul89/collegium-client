/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading, subHeading2 }) => {
  return (
    <div>
      <h3>{heading}</h3>
      {subHeading2 ? (
        <>
          <h4>{subHeading}</h4>
          <h4>{subHeading2}</h4>
        </>
      ) : (
        <h4>{subHeading}</h4>
      )}
    </div>
  );
};

export default SectionTitle;
