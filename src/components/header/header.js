"use client";
import Logo from "@/components/logo/logo";
import PhoneDropdown from "@/components/phone-dropdown";
import BubbleButton from "@/components/bubble-button";
import {CALL, menu, SMALL} from "@/utils/consts";

import HeaderBottomLink from "@/components/header/header-bottom-link";
import MobileMenuButton from "@/components/header/mobile-menu-button";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";

const Header = () => {

  const [scroll, setScroll] = useState(0);
  const [headerScroll, setHeaderScroll] = useState(false);


  const pathname = usePathname()


  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scroll > 15) {
      setHeaderScroll(true)
    } else {
      setHeaderScroll(false)
    }
  }, [scroll]);

  useEffect(() => {
    handleScroll();
  }, []);


  return (
    <>
      <header className={`header ${pathname !== '/' ? 'header--color' : ''} ${headerScroll && pathname === '/' ? 'header--scroll' : ''}`}>
        <div className="header__body">
          <div className="header__top">
            <div className="container">
              <div className="header__top-body">
                <div className="header__logo">
                  <Logo width={130} hex={'#e0e0e0'}/>
                  <h3 className="header__logo-text">Надёжный подрядчик в строительстве Вашего дома</h3>
                </div>
                <div className="header__contacts">
                  <div className="header__contacts-order">
                    <BubbleButton type={CALL} size={SMALL}>Заказать звонок</BubbleButton>
                  </div>
                  <div className="header__phone">
                    <PhoneDropdown/>
                  </div>
                  <div className="header__burger">
                    <MobileMenuButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header__bottom">
            <div className="container">
              <div className="header__bottom-body">
                <ul className="header__bottom-links">
                  {
                    Object.values(menu).map((link, index) => {
                      return <HeaderBottomLink key={index} link={link}/>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
