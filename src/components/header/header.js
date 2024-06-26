import Logo from "@/components/logo/logo";
import PhoneDropdown from "@/components/phone-dropdown";
import BubbleButton from "@/components/bubble-button";
import {menu} from "@/utils/consts";
import React from "react";
import HeaderBottomLink from "@/components/header/header-bottom-link";


const Header = () => {

  return (
    <header className="header">
      <div className="header__body">
        <div className="header__top">
          <div className="container">
            <div className="header__top-body">
              <div className="header__logo">
                <Logo width={130} hex={'#e0e0e0'}/>
                <h3 className="header__logo-text">Надёжный подрядчик в строительстве Вашего дома</h3>
              </div>
              <div className="header__contacts">
                <div className="header__phone">
                  <PhoneDropdown/>
                </div>
                <div className="header__contacts-order">
                  <BubbleButton size={'small'}>Заказать звонок</BubbleButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__bottom">
          <div className="container">
            <div className="header__bottom-body">
              <ul className="header__bottom-links">
                {menu.map((link, index) => <HeaderBottomLink key={index} link={link} />)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
