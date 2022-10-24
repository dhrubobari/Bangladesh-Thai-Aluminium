import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import product1 from "../../assets/products/product1.jpeg"
import product2 from "../../assets/products/product2.jpeg"
import product3 from "../../assets/products/product3.jpeg"
import product4 from "../../assets/products/product4.jpeg"

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

function Slider() {
  return (
    <Swiper
      slidesPerView={4}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination, Navigation]}
    >
      <SwiperSlide><img src={product1} alt="" /><h3>MILL FINISHED PROFILES</h3></SwiperSlide>
      <SwiperSlide><img src={product2} alt="" /><h3>ANODISED PROFILE</h3></SwiperSlide>
      <SwiperSlide><img src={product3} alt="" /><h3>POWDER COATED</h3></SwiperSlide>
      <SwiperSlide><img src={product4} alt="" /><h3>FABRICATED ITEMS</h3></SwiperSlide>
    </Swiper>
  );
}

export default Slider;