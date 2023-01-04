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
        { src: "https://www.kfckorea.com/nas/banner/2022/12/07/GYcIAbkdZN68.png", 
          href: "https://www.kfckorea.com/promotion/newMenu/detail/873"},
        { src: "https://www.kfckorea.com/nas/banner/2022/12/29/xOCIRCalViYY.png",
          href: "https://www.kfckorea.com/promotion/newMenu/detail/882"},
        { src: "https://www.kfckorea.com/nas/banner/2022/12/27/baFX7LsyAzNb.png", 
          href: "https://www.kfckorea.com/promotion/newMenu/detail/881"},
        { src: "https://www.kfckorea.com/nas/banner/2022/11/22/m0Wq9kKizPOl.png",
          href: "https://www.kfckorea.com/promotion/newMenu/detail/866"},
        
      ];
  return (
    <>
      <Swiper
        effect={"slide"}
        autoplay={{
          delay: 1000,
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