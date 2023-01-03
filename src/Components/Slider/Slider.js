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
    <Swiper
      slidesPerView={4}
      // loop={true}
      spaceBetween={10}
      grabCursor={true}
      centeredSlides={true}
      direction={"horizontal"}
      mousewheel={{
        forceToAxis: false,
        sensitivity: 1,
        releaseOnEdges: true,
      }}
        breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10
        },
      }}
      modules={[Mousewheel, Pagination, Navigation]}
    >
      <SwiperSlide><img src={product1} alt="" />
      <div class="overlay-bottom-slide">
      <div class="info">MILL FINISHED PROFILES</div>
      </div>
      </SwiperSlide>
      <SwiperSlide><img src={product2} alt="" />
      <div class="overlay-bottom-slide"><div class="info">ANODISED PROFILE</div>
      </div>
      </SwiperSlide>
      <SwiperSlide><img src={product3} alt="" />
      <div class="overlay-bottom-slide"><div class="info">POWDER COATED</div>
      </div>
      </SwiperSlide>
      <SwiperSlide><img src={product4} alt="" />
      <div class="overlay-bottom-slide"><div class="info">FABRICATED ITEMS</div>
      </div>
      </SwiperSlide>  
    </Swiper>
  );
}

export default Slider;