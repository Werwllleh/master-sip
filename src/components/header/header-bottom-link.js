'use client'
import {Dropdown} from "antd";
import Link from "next/link";


const HeaderBottomLink = ({link}) => {
  return (
    <li className="header__link">
      {link?.childLinks?.length ? (
        <Dropdown
          placement="bottom"
          dropdownRender={() => (
            <ul className="header__dropdown-list">
              {link.childLinks.map((dropdownLink, index) => (
                <li key={index} className="header__dropdown-list-item">
                  <Link className="header__dropdown-list-link" href={dropdownLink.url}>{dropdownLink.text}</Link>
                </li>
              ))}
            </ul>
          )}
        >
          <Link className="header__link-item" href={link.baseUrl.url}>
            <span>{link.baseUrl.text}</span>
          </Link>
        </Dropdown>
      ) : (
        <Link className="header__link-item" href={link.baseUrl.url}>
          <span>{link.baseUrl.text}</span>
        </Link>
      )}
    </li>
  );
};

export default HeaderBottomLink;
