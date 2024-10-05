import SectionTitle from "../../../components/Shared/SectonTitle/SectionTitle";
import ReviewsImg1 from "../../../assets/reviews1.jpeg";
import ReviewsImg2 from "../../../assets/reviews2.jpeg";
import ReviewsImg3 from "../../../assets/reviews3.jpeg";
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
        <ReviewsCard
          image={ReviewsImg1}
          reviewerName="Emily Johnson"
          review="Collegium made the college search process so much easier! The interface is intuitive, and I was able to explore a wide range of colleges without hassle. The detailed insights on admission dates, research opportunities, and sports programs really helped me make an informed decision. Highly recommend this platform for anyone looking to apply to colleges."
        />
        <ReviewsCard
          image={ReviewsImg2}
          reviewerName="Michael Brown"
          review="I love the design and functionality of Collegium. The search feature works great, and the college cards provide all the necessary details in one place. I especially liked the section that showcases college research papers—it gives a real sense of the academic strengths of each institution. Only thing missing for me is a comparison tool, but overall, it's a fantastic resource!"
        />
        <ReviewsCard
          image={ReviewsImg3}
          reviewerName="Sarah Wilson"
          review="Collegium is a game-changer! I was able to book my college services effortlessly, and the detailed profiles of each institution, including events and sports, really stood out. The reviews section also helped me see what other students thought, which added a lot of value. Plus, the site is mobile-friendly, which made browsing on the go super convenient."
        />
      </div>
    </div>
  );
};

export default Reviews;
