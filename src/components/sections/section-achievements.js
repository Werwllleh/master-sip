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
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 1.3,
              },
              // Дополнительные брейкпоинты можно добавить здесь
              550: {
                slidesPerView: 2.1,
              },
              768: {
                slidesPerView: 3.1,
              },
              1150: {
                slidesPerView: 4,
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
