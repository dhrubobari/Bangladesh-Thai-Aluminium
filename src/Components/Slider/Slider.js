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
import { Pagination, Navigation } from "swiper";

function Slider() {
  return (
    <Swiper
      slidesPerView={4}
      loop={true}
      loopFillGroupWithBlank={true}
      grabCursor={true}
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
      <SwiperSlide><img src={product1} alt="" class="product-img1" /><h3>MILL FINISHED PROFILES</h3>
      <div class="overlay-bottom-slide"><div class="info">MILL FINISHED PROFILES</div>
      </div>
      </SwiperSlide>
      <SwiperSlide><img src={product2} alt="" /><h3>ANODISED PROFILE</h3>
      <div class="overlay-bottom-slide"><div class="info">ANODISED PROFILE</div>
      </div>
      </SwiperSlide>
      <SwiperSlide><img src={product3} alt="" /><h3>POWDER COATED</h3>
      <div class="overlay-bottom-slide"><div class="info">POWDER COATED</div>
      </div>
      </SwiperSlide>
      <SwiperSlide><img src={product4} alt="" /><h3>FABRICATED ITEMS</h3>
      <div class="overlay-bottom-slide"><div class="info">FABRICATED ITEMS</div>
      </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;