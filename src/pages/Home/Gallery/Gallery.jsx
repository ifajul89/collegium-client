import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import GraduateImg1 from "../../../assets/graduate1.jpeg"
import GraduateImg2 from "../../../assets/graduate2.jpeg"
import GraduateImg3 from "../../../assets/graduate3.jpeg"
import GraduateImg4 from "../../../assets/graduate4.jpeg"
import GraduateImg5 from "../../../assets/graduate5.jpeg"
import GraduateImg6 from "../../../assets/graduate6.jpeg"
import GraduateImg7 from "../../../assets/graduate7.jpeg"

const Gallery = () => {
  return (
    <div className="fitting flex space-top-bottom">
      <div className="md:w-1/2 space-y-3">
        <h4 className="text-6xl font-semibold">
          Celebrating <span className="text-blue-500">Success</span>.
        </h4>
        <h5 className="text-5xl">A Legacy of Excellence</h5>
        <p className="text-xl text-gray-600">
          At Collegium, our students&apos; journey is marked by hard work,
          growth, and remarkable achievements. Each graduate carries forward the
          legacy of excellence and innovation that defines our institution. As
          they step into the future, they inspire the next generation of
          learners, ready to make a meaningful impact in the world. Browse
          through our gallery and meet the faces behind our success stories,
          where dreams became reality and potential was unleashed.
        </p>
      </div>
      <div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide></SwiperSlide>
        
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
