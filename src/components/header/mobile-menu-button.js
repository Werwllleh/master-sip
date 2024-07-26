'use client';
import React, {useEffect, useState} from 'react';
import {contactInfo, menu} from "@/utils/consts";
import {SwipeableDrawer} from '@mui/material';
import Logo from "@/components/logo/logo";
import {CaretDownFilled} from "@ant-design/icons";
import DropMenuItem from "@/components/header/drop-menu-item";
import SocialButton from "@/components/social-button";
import {getWindowSize} from "@/utils/functions";


const MobileMenuButton = () => {

  const [state, setState] = useState(false);

  const [windowSize, setWindowSize] = useState(getWindowSize());



  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize.outerWidth > 768) {
      setState(false)
    }

  }, [windowSize]);

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
      <SwipeableDrawer
        className={"mobile-menu-drawer"}
        anchor={'right'}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={state}
        onOpen={() => setState(true)}
        onClose={() => setState(false)}
      >
        <div className="mobile-menu">
          <div className="mobile-menu__body">
            <div className="mobile-menu__logo">
              <Logo/>
            </div>
            <nav className="mobile-menu__nav">
              <ul className="mobile-menu__list">
                {Object.values(menu).map((link) => (
                  <DropMenuItem key={link.baseUrl.url} link={link} icon={<CaretDownFilled/>} closeClick={() => setState(false)}/>
                ))}
              </ul>
            </nav>
            <div className="mobile-menu__footer">
              <ul className="mobile-menu__socials-list">
                {Object.values(contactInfo.socials).map((social) => {
                  return (
                    <li className="mobile-menu__social" key={social.url} >
                      <SocialButton colored={true} icon={social.icon} link={social.url} classLink={social.classLink}/>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </SwipeableDrawer>
    </>
  )
};

export default MobileMenuButton;
