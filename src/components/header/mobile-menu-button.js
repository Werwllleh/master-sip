'use client';
import React, {useState} from 'react';
import {menu} from "@/utils/consts";
import Link from 'next/link';

const MobileMenuButton = () => {

  const [open, setOpen] = useState(false)

  const clickMenu = () => {
    setOpen(!open)
  }

  return (
    <>
      <div onClick={clickMenu} className={`hamburger ${open ? 'open' : ''}`}>
        <div className={'hamburger__line'}></div>
      </div>
      <div className="mobile-menu">
        <div className="mobile-menu__wrap">
          <div className="mobile-menu__body">
            <ul className="mobile-menu__list">
              {Object.values(menu).map((link) => (
                <li key={link.baseUrl.url} className="mobile-menu__list-item">
                  <Link onClick={() => setOpen(false)} className="mobile-menu__list-link" href={link.baseUrl.url}>
                    {link.baseUrl.text}
                  </Link>
                </li>))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
};

export default MobileMenuButton;