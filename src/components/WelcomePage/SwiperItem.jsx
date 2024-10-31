import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules"



const SwiperItem = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="/assets/slide-1.jpg"
            alt=""
            className="w-full lg:h-[100vh] h-[50vh] object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="/assets/slide-3.jpg"
            alt=""
            className="w-full lg:h-[100vh] h-[50vh] object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="/assets/slide-2.jpg"
            alt=""
            className="w-full lg:h-[100vh] h-[50vh] object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="/assets/slide-4.jpg"
            alt=""
            className="w-full lg:h-[100vh] h-[50vh] object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="/assets/slide-5.jpg"
            alt=""
            className="w-full lg:h-[100vh] h-[50vh] object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperItem;
