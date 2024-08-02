'use client';
import React, {useEffect, useState} from 'react';
import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps";
import {objectPlaces} from "@/utils/consts";
import {CloseOutlined} from "@ant-design/icons";

const SectionMap = () => {

  const [activeBaloon, setActiveBaloon] = useState(null);
  const [baloonInfo, setBaloonInfo] = useState(null);

  const showMapBaloon = (placeId) => {
    setActiveBaloon(placeId)
  }

  const hideBaloonInfo = () => {
    setActiveBaloon(null);
  }

  useEffect(() => {
    if (activeBaloon) {
      setBaloonInfo(objectPlaces.filter(baloon => baloon.id === activeBaloon)[0])
    }
  }, [activeBaloon]);

  const defaultState = {
    center: [56.139923, 47.247725],
    zoom: 9,
  };

  return (
    <div className="section-map">
      <div className="container">
        <h2 className="section-map__title section-title">Карта объектов</h2>
      </div>
      <YMaps>
        <div className="section-map__map">
          <Map defaultState={defaultState} height={'30rem'} width={'100%'}>
            {objectPlaces.map((place) => {
              return (
                <Placemark
                  onClick={() => showMapBaloon(place.id)}
                  geometry={place.coordinates}
                />
              )
            })}
          </Map>
          <div className={`section-map__modal map-modal ${activeBaloon ? 'show' : ''}`}>
            <span onClick={hideBaloonInfo} className="map-modal__close"><CloseOutlined /></span>
            <div className="map-modal__body">
              {baloonInfo && (
                <h5 className="map-modal__title">{baloonInfo.title}</h5>
              )}
            </div>
          </div>
        </div>
      </YMaps>
    </div>
  );
};

export default SectionMap;
