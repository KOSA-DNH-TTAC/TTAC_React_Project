import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

export default function SliderContainer() {
    const items = [
        { src: "https://www.mcdonalds.co.kr/upload/main/banner/1671783212807.jpg", 
          href: "https://www.kfckorea.com/promotion/newMenu/detail/873"},
        { src: "https://www.mcdonalds.co.kr/upload/main/banner/1664353719990.jpg",
          href: "https://www.kfckorea.com/promotion/newMenu/detail/882"},
        { src: "https://www.mcdonalds.co.kr/upload/main/banner/1667283098823.jpg", 
          href: "https://www.kfckorea.com/promotion/newMenu/detail/881"},
        { src: "https://www.mcdonalds.co.kr/upload/main/banner/1672383107651.jpg",
          href: "https://www.kfckorea.com/promotion/newMenu/detail/866"},
        
      ];
  return (
    <>
      <Swiper
        effect={"slide"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, EffectFade, Pagination,Autoplay]}
        className="mySwiper"
        loop={true}
      >
        {items.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
               <a href={item.href}><img src={item.src} /></a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}