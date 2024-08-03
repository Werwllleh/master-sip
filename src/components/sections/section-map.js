'use client';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {YMaps, Map, Placemark, ZoomControl, GeolocationControl} from "@pbe/react-yandex-maps";
import {objectPlaces} from "@/utils/consts";
import {CloseOutlined} from "@ant-design/icons";

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

  const setMapRef = useCallback((instance) => {
    map.current = instance;
    map.current?.behaviors?.disable('scrollZoom')
  }, []);

  const [baloonInfo, setBaloonInfo] = useState(null);

  const handleClickPlacemark = (place) => {
    setBaloonInfo(place)
    const placemarkCoords = place.coordinates;
    if (map.current) {
      map.current.setCenter(placemarkCoords);
      map.current.options.set('maxAnimationZoomDifference', Infinity);
      map.current.setZoom(15, {duration: 500});
    }
  }

  const defaultState = {
    center: [56.139923, 47.247725],
    zoom: 10,
    controls: [],
  };

  const hideBaloonInfo = () => {
    setBaloonInfo(null);

    if (map.current) {
      map.current.setCenter(defaultState.center);
      map.current.setZoom(defaultState.zoom, {duration: 500});
    }
  }

  return (
    <div className="section-map">
      <div className="container">
        <h2 className="section-map__title section-title">Карта объектов</h2>
      </div>
      <YMaps query={{
        apikey: process.env.YANDEX_VERIFICATION,
        ns: "use-load-option",
        load: "package.full"
      }}>
        <div className="section-map__map">
          <Map
            defaultState={defaultState}
            height={'30rem'}
            width={'100%'}
            instanceRef={setMapRef}
          >
            <ZoomControl/>
            {objectPlaces.map((place) => {
              return (
                <Placemark
                  key={place.id}
                  onClick={() => handleClickPlacemark(place)}
                  // onClick={() => setBaloonInfo(place)}
                  geometry={place.coordinates}
                  options={{
                    iconImageSize: [10, 10],
                    preset: "islands#redHomeIcon",
                  }}
                />
              )
            })}
          </Map>
          <div className={`section-map__modal map-modal ${baloonInfo ? 'show' : ''}`}>
            <span onClick={hideBaloonInfo} className="map-modal__close"><CloseOutlined/></span>
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
