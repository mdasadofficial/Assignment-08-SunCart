"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const BannerSlider = () => {
  return (
    
    <div className="w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[3/1] max-h-[500px] overflow-hidden">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="h-full w-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/assets/banner1.png"
              alt="Banner 1"
              fill
              
              className="object-fill" 
              priority
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/assets/banner2.png"
              alt="Banner 2"
              fill
              className="object-fill"
            />  
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/assets/banner3.png"
              alt="Banner 3"
              fill
              className="object-fill"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
