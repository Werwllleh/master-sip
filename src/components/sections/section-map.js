'use client';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {YMaps, Map, Placemark, ZoomControl} from "@pbe/react-yandex-maps";
import {objects, SMALL} from "@/utils/consts";
import {CloseOutlined} from "@ant-design/icons";
import {Image} from 'antd';
//swiper
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import {getObjectImages} from "@/utils/api/getObjectImages";
import Link from "next/link";
import BubbleButton from "@/components/bubble-button";
import LoaderCircle from "@/components/loader-circle";
import {addSuffixToFilename} from "@/utils/functions";


const SectionMap = () => {


  useEffect(() => {
    const originalConsoleError = console.error;

    console.error = (...args) => {
      if (typeof args[0] === "string" && /defaultProps/.test(args[0])) {
        return;
      }

      originalConsoleError(...args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  const map = useRef(null);
  const mapWrapper = useRef(null);
  const mapInfo = useRef(null);

  const setMapRef = useCallback((instance) => {
    map.current = instance;
    map.current?.behaviors?.disable('scrollZoom')
  }, []);

  const [baloonInfo, setBaloonInfo] = useState(null);
  const [objectImages, setObjectImages] = useState([]);

  const handleClickPlacemark = (object) => {
    getObjectImages(object.id).then(res => setObjectImages(res))
    setBaloonInfo(object)
    const placemarkCoords = object.coordinates;
    if (map.current) {
      map.current.setCenter(placemarkCoords);
      map.current.options.set('maxAnimationZoomDifference', Infinity);
      map.current.setZoom(15, {duration: 500});
    }
  }

  const defaultState = {
    center: [57.626579, 39.893691],
    zoom: window.innerWidth < 576 ? 4.5 : 6,
    controls: [],
  };

  const hideBaloonInfo = () => {
    setBaloonInfo(null);
    setObjectImages([]);

    if (map.current) {
      map.current.setCenter(defaultState.center);
      map.current.setZoom(defaultState.zoom);
    }
  }

  useEffect(() => {
    if (mapWrapper.current && mapInfo.current) {
      if (baloonInfo) {
        mapInfo.current.style.maxHeight = `${window.innerWidth < 576 ? mapInfo.current.scrollHeight : mapWrapper.current.scrollHeight }px`;
      } else {
        mapInfo.current.style.maxHeight = '0px';
      }
    }

  }, [baloonInfo]);

  return (
    <div className="section-map">
      <div className="container">
        <h2 className="section-map__title section-title">Карта объектов</h2>
      </div>
      <YMaps query={{
        apikey: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
        ns: "use-load-option",
        load: "package.full"
      }}>
        <div ref={mapWrapper} className="section-map__map">
          <Map
            defaultState={defaultState}
            height={window.innerWidth < 576 ? '15rem' : '30rem'}
            width={'100%'}
            instanceRef={setMapRef}
          >
            <ZoomControl/>
            {objects.map((object) => {
              return (
                <Placemark
                  key={object.id}
                  onClick={() => handleClickPlacemark(object)}
                  geometry={object.coordinates}
                  options={{
                    iconImageSize: [10, 10],
                    preset: "islands#redHomeIcon",
                  }}
                />
              )
            })}
          </Map>
          <div ref={mapInfo} className={`section-map__modal map-modal ${baloonInfo ? 'show' : ''}`}>
            <div className="map-modal__body">
              {baloonInfo && (
                <>
                  <div className="map-modal__header">
                    <h5 className="map-modal__title">{baloonInfo.title}</h5>
                    <span onClick={hideBaloonInfo} className="map-modal__close"><CloseOutlined/></span>
                  </div>
                  {objectImages.length ? (
                    <div className="map-modal__images">
                      <Image.PreviewGroup
                        /*preview={{
                          onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}*/
                      >
                        <Swiper
                          navigation
                          modules={[Navigation]}
                          spaceBetween={10}
                          slidesPerView={"auto"}
                        >
                          {objectImages.map((objectImage, index) => {
                            return (
                              <SwiperSlide key={index}>
                                <Image
                                  preview={{
                                    mask: 'Просмотр',
                                    src: `/assets/images/objects/${baloonInfo.id}/${objectImage}`,
                                  }}
                                  className="map-modal__image"
                                  src={`/assets/images/objects/min/${baloonInfo.id}/${addSuffixToFilename(objectImage, '_p')}`}
                                  alt={`Объект ${baloonInfo.title} ${index + 1}`}/>
                              </SwiperSlide>
                            )
                          })}
                        </Swiper>
                      </Image.PreviewGroup>
                    </div>
                  ) : <div className="map-modal__loader"><LoaderCircle/></div>}
                  <div className="map-modal__info">
                    <ul className="map-modal__list">
                      <li><span>Место:</span> {baloonInfo.address}</li>
                      <li><span>Площадь:</span> {baloonInfo.square} м<sup>2</sup></li>
                      <li><span>Дата сдачи:</span> {baloonInfo.date}</li>
                      <li><span>Стоимость:</span> {baloonInfo.price.toLocaleString('ru-RU')} ₽</li>
                    </ul>
                    {baloonInfo.note && <p className="map-modal__note">{baloonInfo.note}</p>}
                  </div>
                  <div className="map-modal__link">
                    <BubbleButton
                      target={"_blank"}
                      size={SMALL}
                      link={`https://yandex.ru/maps/?pt=${baloonInfo.coordinates[1]},${baloonInfo.coordinates[0]}&z=12&l=map`}>
                      Показать на карте
                    </BubbleButton>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </YMaps>
    </div>
  );
};

export default SectionMap;
