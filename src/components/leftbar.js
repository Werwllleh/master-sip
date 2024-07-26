"use client";
import {usePathname} from 'next/navigation';
import {menu} from "@/utils/consts";
import {useEffect, useState} from "react";
import Link from "next/link";


const Leftbar = () => {
  const pathname = usePathname();

  const [currentMenu, setCurrentMenu] = useState(null);

  useEffect(() => {
    const foundMenu = Object.values(menu).find(item => pathname.startsWith(item.baseUrl.url));
    setCurrentMenu(foundMenu || null);

  }, [pathname]);


  return (
    <div className="leftbar">
      <div className="leftbar__body">
        {currentMenu && (
          <>
            <nav className="leftbar__menu">
              <ul className="leftbar__menu-list">
                <li className="leftbar__menu-item">
                  <Link className={`leftbar__menu-link ${pathname === currentMenu?.baseUrl.url ? 'active' : ''}`}
                        key={currentMenu.baseUrl.url} href={currentMenu.baseUrl.url}><span>{currentMenu.baseUrl.text}</span></Link>
                </li>
                {currentMenu.childLinks && currentMenu.childLinks.map((link, index) => (
                  <li className="leftbar__menu-item" key={currentMenu.baseUrl.url + link.url}>
                    <Link
                      className={`leftbar__menu-link ${pathname === currentMenu?.baseUrl.url + link.url ? 'active' : ''}`}
                      href={currentMenu.baseUrl.url + link.url}><span>{link.text}</span></Link>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}
      </div>
    </div>
  );
};

export default Leftbar;
