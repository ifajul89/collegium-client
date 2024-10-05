import SectionTitle from "../../../components/Shared/SectonTitle/SectionTitle";
import ReviewsImg1 from "../../../assets/reviews1.jpeg"
import ReviewsImg2 from "../../../assets/reviews2.jpeg"
import ReviewsImg3 from "../../../assets/reviews3.jpeg"
import ReviewsCard from "../../../components/Shared/ReviewsCard/ReviewsCard";

const Reviews = () => {
  return (
    <div className="fitting space-top-bottom">
      <SectionTitle
        heading="Voices from Our "
        headingEnd="Community"
        subHeading="Discover how Collegium has helped students explore, apply, and connect with the right colleges"
      />
      <div className="grid grid-cols-3 gap-5">
        <ReviewsCard image={ReviewsImg1} reviewerName="" review='Collegium made the college search process so much easier! The interface is intuitive, and I was able to explore a wide range of colleges without hassle. The detailed insights on admission dates, research opportunities, and sports programs really helped me make an informed decision. Highly recommend this platform for anyone looking to apply to colleges.' />
      </div>
    </div>
  );
};

export default Reviews;
