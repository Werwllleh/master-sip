import React from 'react';
import SectionHeader from "@/components/section-header";
import {menu} from "@/utils/consts";

const SectionCatalog = () => {
  return (
    <section className="section-catalog">
      <div className="container">
        <div className="section-catalog__body">
          <div className="section-catalog__header">
            <SectionHeader title={"Каталог проектов"} linkTitle={"Все проекты"} url={menu.projects.baseUrl.url} />
          </div>
          <div className="section-catalog__content">

          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCatalog;
