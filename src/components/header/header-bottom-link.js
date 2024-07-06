'use client'
import {Dropdown} from "antd";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {usePathname} from "next/navigation";


const HeaderBottomLink = ({link}) => {

  const pathname = usePathname()

  const linkRef = useRef();

  const [active, setActive] = useState(false);

  const onOpenChange = (open) => {
    setActive(open);
  };

  return (
    <li className="header__link">
      {link?.childLinks?.length ? (
        <Dropdown
          open={active}
          onOpenChange={onOpenChange}
          placement="bottom"
          dropdownRender={() => (
            <ul className={`header__dropdown-list ${pathname !== '/' ? 'header__dropdown-list--light' : ''}`} style={{width: linkRef?.current?.offsetWidth}}>
              {link.childLinks.map((dropdownLink, index) => (
                <li key={index} className="header__dropdown-list-item">
                  <Link className="header__dropdown-list-link" href={link.baseUrl.url + dropdownLink.url}>{dropdownLink.text}</Link>
                </li>
              ))}
            </ul>
          )}
        >
          <Link ref={linkRef} className={`header__link-item ${active ? 'active' : ''}`} href={link.baseUrl.url}>
            {link.baseUrl.text}
          </Link>
        </Dropdown>
      ) : (
        <Link className="header__link-item" href={link.baseUrl.url}>
          {link.baseUrl.text}
        </Link>
      )}
    </li>
  );
};

export default HeaderBottomLink;
