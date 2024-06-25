'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import {swiperMainSlides} from "@/utils/consts";
import BubbleButton from "@/components/bubble-button";


const SwiperMain = () => {
  return (
    <div className={"swiper-main"}>
      <Swiper
        modules={[EffectFade, Pagination, Autoplay]}
        autoplay={{delay: 7000, pauseOnMouseEnter: true}}
        loop={true}
        effect="fade"
        navigation
        pagination={{ clickable: true, enabled: true }}
        spaceBetween={0}
        slidesPerView={1}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {swiperMainSlides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={"swiper-main__slide"}>
                <div className="container">
                  <div className="swiper-main__info">
                    <h1 className="swiper-main__title">{slide.title}</h1>
                    <h2 className="swiper-main__subtitle">{slide.subtitle}</h2>
                    <div className="swiper-main__link">
                      <BubbleButton link={slide.link[0]} size={'medium'}>
                        {slide.link[1]}
                      </BubbleButton>
                    </div>
                  </div>
                </div>
                <div className="swiper-main__slide-bg">
                  <img src={`./assets/images/main-slider/main-slide${slide.photo}.webp`} alt=""/>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
};

export default SwiperMain;
