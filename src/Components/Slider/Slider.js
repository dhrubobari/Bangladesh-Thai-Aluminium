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

function Slider({ forwardedRef }) {
  return (
    <Swiper
      ref={forwardedRef}
      slidesPerView={4}
      // loop={true} 
      grabCursor={true}
      centeredSlides={true}
      direction={"horizontal"}
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
          slidesPerView: 4
        },
      }}
      modules={[Mousewheel, Pagination, Navigation]}
    >
      <SwiperSlide><img src={product1} alt="" />
      
      </SwiperSlide>
      <SwiperSlide><img src={product2} alt="" />
      
      </SwiperSlide>
      <SwiperSlide><img src={product3} alt="" />
      
      </SwiperSlide>
      <SwiperSlide><img src={product4} alt="" />
      
      </SwiperSlide>  
    </Swiper>
  );
}

export default Slider;