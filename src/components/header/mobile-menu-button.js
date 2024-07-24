'use client';
import React, {useState} from 'react';
import {menu} from "@/utils/consts";
import Link from 'next/link';
import {Drawer, SwipeableDrawer} from '@mui/material';
import Logo from "@/components/logo/logo";
import {CaretDownFilled} from "@ant-design/icons";


const MobileMenuButton = () => {

  const [state, setState] = useState(false)

  const clickMenu = () => {
    setState(!state)
  }

  const toggleDrawer =
    (open) =>
      (event) => {
        if (event && event.type === 'keydown' &&
          ((event).key === 'Tab' ||
            (event).key === 'Shift')
        ) {
          return;
        }

        setState({...state, open});
      };

  const iOS =
    typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <>
      <div onClick={clickMenu} className={`hamburger ${state ? 'open' : ''}`}>
        <div className={'hamburger__line'}></div>
      </div>
      {/*<div className="mobile-menu">
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
      </div>*/}
      <SwipeableDrawer
        className={"mobile-menu-drawer"}
        anchor={'right'}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={state}
        onClose={() => setState(false)}
      >
        <div className="mobile-menu">
          <div className="mobile-menu__body">
            <div className="mobile-menu__logo">
              <Logo />
            </div>
            <nav className="mobile-menu__nav">
              <ul className="mobile-menu__list">
                {Object.values(menu).map((link) => (
                  <li key={link.baseUrl.url} className="mobile-menu__item">
                    <div className="mobile-menu__main-link">
                      <Link onClick={() => setState(false)} href={link.baseUrl.url} className="mobile-menu__link">
                        {link.baseUrl.text}
                      </Link>
                      {link.childLinks && <span><CaretDownFilled/></span>}
                    </div>
                    {link.childLinks && (
                      <div className="mobile-menu__sublinks">
                        {link.childLinks.map((subLink) => (
                          <Link key={subLink.url} onClick={() => setState(false)} href={link.baseUrl.url + subLink.url} className="mobile-menu__link">
                            {subLink.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>))}
              </ul>
            </nav>
          </div>
        </div>
      </SwipeableDrawer>
    </>
  )
};

export default MobileMenuButton;
