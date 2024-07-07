'use client'
import {PhoneFilled} from '@ant-design/icons';
import {Dropdown} from 'antd';
import {CALL, contactInfo, SMALL} from "@/utils/consts";
import BubbleButton from "@/components/bubble-button";
import {phoneNumber} from "@/utils/functions";

const PhoneDropdown = () => {

  return (
    <Dropdown
      placement="bottom"
      className={"phone-dropdown"}
      dropdownRender={() => (
        <div className={'phone-dropdown__info'}>
          <div className="phone-dropdown__info-body">
            <div className="phone-dropdown__phones">
              {contactInfo.phones.map((phone) => {
                return <a className="phone-dropdown__phones-tel" href={`tel:${phoneNumber(phone)}`} key={phoneNumber(phone)}>{phone}</a>
              })}
            </div>
            <div className="phone-dropdown__order-button">
              <BubbleButton type={CALL} size={SMALL}>Заказать звонок</BubbleButton>
            </div>
            <div className="phone-dropdown__category">
              <h4 className="phone-dropdown__category-title">E-mail</h4>
              <a href={`mailto:${contactInfo.email}`} className="phone-dropdown__category-text">{contactInfo.email}</a>
            </div>
            <div className="phone-dropdown__category">
              <h4 className="phone-dropdown__category-title">Адрес</h4>
              <a target={"_blank"} href={contactInfo.address.url} className="phone-dropdown__category-text">{contactInfo.address.text}</a>
            </div>
            <div className="phone-dropdown__category">
              <h4 className="phone-dropdown__category-title">Режим работы</h4>
              <p className="phone-dropdown__category-text">{contactInfo.workTime}</p>
            </div>
          </div>
        </div>
      )}
    >
      <div onClick={(e) => e.preventDefault()}>
        <div className="phone-dropdown__row">
          <PhoneFilled />
        </div>
        <div className="phone-dropdown__mobile-icon">
          <PhoneFilled />
        </div>
      </div>
    </Dropdown>
  );
};

export default PhoneDropdown;
