import React from 'react';
import SectionHeader from "@/components/section-header";

const SectionCatalog = () => {
  return (
    <section className="section-catalog">
      <div className="container">
        <div className="section-catalog__body">
          <div className="section-catalog__header">
            <SectionHeader title={"Каталог проектов"} linkTitle={"Все проекты"} url={"/catalog"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCatalog;
