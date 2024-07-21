import React from 'react';
import {menu} from "@/utils/consts";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="page page-not-found">
      <div className="container">
        <div className="page-not-found__body">
          <div className="page-not-found__image">
            <img src={`/assets/images/404/404.png`} alt="Not found"/>
            <span className="page-not-found__code">404</span>
          </div>
          <div className="page-not-found__info">
            <h1 className="page-not-found__title">
              Такой страницы нет
            </h1>
            <h3 className="page-not-found__subtitle">
              Но есть много других полезных страниц
            </h3>
            <ul className="page-not-found__pages-list">
              {
                Object.values(menu).map((link, index) => {
                  return (
                    <li key={index} className="page-not-found__page">
                      <Link className="page-not-found__page-link" href={link.baseUrl.url}>
                        {link.baseUrl.text}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
