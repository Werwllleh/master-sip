'use client';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import {achievements} from "@/utils/consts";
import Achievement from "@/components/achievement";

const SectionAchievements = () => {

  return (
    <section className="section-achievements">
      <div className="container">
        <div className="section-achievements__body">
          <Swiper
            loop={true}
            spaceBetween={15}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                centeredSlides: true
              },
              480: {
                slidesPerView: 1.3,
                centeredSlides: false
              },
              550: {
                slidesPerView: 1.7,
                centeredSlides: false
              },
              650: {
                slidesPerView: 2.1,
                centeredSlides: false
              },
              768: {
                slidesPerView: 2.6,
                centeredSlides: false
              },
              950: {
                slidesPerView: 3.1,
                centeredSlides: false
              },
              1300: {
                slidesPerView: 4,
                centeredSlides: false
              },
            }}
          >
            {achievements.map((achievement) => {
              return (
                <SwiperSlide key={achievement.title}>
                  <div className="section-achievements__item">
                    <Achievement icon={achievement.icon} title={achievement.title} text={achievement.text}/>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
    ;
};

export default SectionAchievements;
