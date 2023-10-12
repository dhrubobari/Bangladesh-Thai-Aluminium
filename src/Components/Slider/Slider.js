import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import product1 from "../../assets/products/product1.jpeg";
import product2 from "../../assets/products/product2.jpeg";
import product3 from "../../assets/products/product3.jpeg";
import product4 from "../../assets/products/product4.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Mousewheel, Pagination, Navigation } from "swiper";

function Slider() {
  return (
    <div className="slider_container">
    <div className="our_products has-text-centered">
    <h1 className="is-size-3">Our products</h1>
    <h2>Thai Aluminum Products</h2>
    </div>
      <Swiper
      watchSlidesProgress={true}
      slidesPerView={3}
      spaceBetween={3}
      className="mySwiper"
      loop={false} 
      navigation={true}
      grabCursor={true}
      direction={"horizontal"}
      pagination={{
        clickable: true,
      }}
      mousewheel={{
        forceToAxis: false,
        sensitivity: 1,
        releaseOnEdges: true,
      }}
        breakpoints={{
        375: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3
        },
      }
      }
      modules={[Mousewheel, Pagination, Navigation]}
      >
        <SwiperSlide><img src={product1} alt=""/></SwiperSlide>
        <SwiperSlide><img src={product2} alt=""/></SwiperSlide>
        <SwiperSlide><img src={product3} alt=""/></SwiperSlide>
        <SwiperSlide><img src={product4} alt=""/></SwiperSlide>
        <SwiperSlide><img src={product2} alt=""/></SwiperSlide>
      </Swiper> 
      </div>
  );
}

export default Slider;