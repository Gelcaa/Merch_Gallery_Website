import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import React from "react";

const Carousel = ({ images }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={20}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          // Use integer values for slidesPerView in loop mode
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="transition-all duration-300 rounded-xl bg-gray-300 flex items-center justify-center h-[450px] opacity-80 scale-90 swiper-slide-active:scale-105 swiper-slide-active:h-[400px] swiper-slide-active:opacity-100">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
