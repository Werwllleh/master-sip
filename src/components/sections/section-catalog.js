import React from 'react';
import SectionHeader from "@/components/section-header";
import {menu} from "@/utils/consts";
import Link from "next/link";

const SectionCatalog = () => {

  return (
    <section className="section-catalog">
      <div className="container">
        <div className="section-catalog__body">
          <div className="section-catalog__header">
            <SectionHeader title={"Каталог проектов"} linkTitle={"Все проекты"} url={menu.projects.baseUrl.url}/>
          </div>
          <div className="section-catalog__content">
            {Object.values(menu.projects.childLinks).map((link) => {
              return (
                <div key={link.url} className="section-catalog__item">
                  <h4 className="section-catalog__item-title">{link.text}</h4>
                  <Link className="section-catalog__item-link" href={menu.projects.baseUrl.url + link.url} >
                    <img src={`./assets/images/projects/${link.photo}`} alt={link.text}/>
                  </Link>
                </div>)
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCatalog;
