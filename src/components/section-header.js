import React from 'react';
import Link from "next/link";
import {RightOutlined} from "@ant-design/icons";

const SectionHeader = ({title, linkTitle, url}) => {
  return (
    <div className="section-header">
      <div className="section-header__body">
        <h2 className="section-header__title section-title">{title}</h2>
        <Link className="section-header__link" href={url}>
          <p>{linkTitle}</p>
          <RightOutlined />
        </Link>
      </div>
    </div>
  );
};

export default SectionHeader;
