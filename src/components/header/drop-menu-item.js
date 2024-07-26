import {usePathname} from 'next/navigation';
import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {menu} from "@/utils/consts";

const DropMenuItem = ({link, icon, closeClick}) => {

  const pathname = usePathname();

  const [active, setActive] = useState(false);
  const sublinksRef = useRef(null);

  const [currentMenu, setCurrentMenu] = useState(null);

  useEffect(() => {
    const foundMenu = Object.values(menu).find(item => pathname.startsWith(item.baseUrl.url));
    setCurrentMenu(foundMenu || null);

  }, [pathname]);

  const showChildLinks = () => {
    setActive(!active)
  }

  useEffect(() => {
    if (sublinksRef.current) {
      if (active) {
        sublinksRef.current.style.maxHeight = `${sublinksRef.current.scrollHeight}px`;
      } else {
        sublinksRef.current.style.maxHeight = '0px';
      }
    }
  }, [active]);

  useEffect(() => {
    if (pathname.startsWith(link.baseUrl.url)) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [pathname, link.baseUrl.url]);

  const onMenuLinkCLick = () => {
    setActive(false)
    closeClick();
  }

  return (
    <li key={link.baseUrl.url} className="drop-menu-item">
      <div className="drop-menu-item__main">
        <Link onClick={onMenuLinkCLick} href={link.baseUrl.url} className={`drop-menu-item__link ${pathname === link.baseUrl.url ? 'active' : ''}`}>
          {link.baseUrl.text}
        </Link>
        {link.childLinks && <span onClick={showChildLinks} className={`drop-menu-item__icon ${active ? 'active' : ''}`}>{icon}</span>}
      </div>
      {link.childLinks && (
        <div ref={sublinksRef} className={`drop-menu-item__sublinks ${active ? 'shown' : ''}`}>
          {link.childLinks.map((subLink) => (
            <Link onClick={onMenuLinkCLick} key={subLink.url} href={link.baseUrl.url + subLink.url} className={`drop-menu-item__sublink  ${pathname === link.baseUrl.url + subLink.url ? 'active' : ''}`}>
              {subLink.text}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};

export default DropMenuItem;