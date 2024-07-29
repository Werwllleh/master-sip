'use client';
import LeftBarLayout from "@/components/layouts/leftbar-layout";
import {partners} from "@/utils/consts";
import Link from "next/link";

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


const Page = () => {
  return (
    <LeftBarLayout>
      <div className="page-partners">
        <div className="page-partners__body">
          <h1>Партнеры компании</h1>
          <div className="page-partners__groups">
            {partners.map((item, index) => (
              <div key={index} className="page-partners__group">
                <h3 className="page-partners__title">{item.partnersGroup}</h3>
                <div className="page-partners__list">
                  <Swiper
                    modules={[Autoplay]}
                    autoplay={{delay: 4000, pauseOnMouseEnter: true}}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={4}
                    centeredSlides={true}
                  >
                    {item.partnersList.map((partner, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <Link className="page-partners__link" target={"_blank"} href={partner.link}>
                            {partner.icon}
                          </Link>
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LeftBarLayout>
  );
};

export default Page;
