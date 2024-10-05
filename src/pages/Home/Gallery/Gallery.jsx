// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

import GraduateImg1 from "../../../assets/graduate1.jpeg";
import GraduateImg2 from "../../../assets/graduate2.jpeg";
import GraduateImg3 from "../../../assets/graduate3.jpeg";
import GraduateImg4 from "../../../assets/graduate4.jpeg";
import GraduateImg5 from "../../../assets/graduate5.jpeg";
import GraduateImg6 from "../../../assets/graduate6.jpeg";
import GraduateImg7 from "../../../assets/graduate7.jpeg";

const Gallery = () => {
  return (
    <div className="fitting flex items-center justify-around gap-5 space-top-bottom">
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
        <p className="text-xl text-gray-600">
        &quot;Discover the inspiring stories of our exceptional graduates, where excellence meets ambition.&quot;
        </p>
      </div>
      <div className="w-1/3">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="w-full rounded-xl" src={GraduateImg1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full rounded-xl" src={GraduateImg2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full rounded-xl" src={GraduateImg3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full rounded-xl" src={GraduateImg4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full rounded-xl" src={GraduateImg5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full rounded-xl" src={GraduateImg6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full rounded-xl" src={GraduateImg7} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
