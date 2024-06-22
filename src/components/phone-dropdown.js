'use client'
import {CaretDownOutlined, PhoneFilled} from '@ant-design/icons';
import {Dropdown} from 'antd';
import {email, phones} from "@/utils/consts";
import BubbleButton from "@/components/bubble-button";

const PhoneDropdown = () => {
  return (
    <Dropdown
      placement="bottom"
      className={"phone-dropdown"}
      dropdownRender={() => (
        <div className={'phone-dropdown__info'}>
          <div className="phone-dropdown__info-body">
            <div className="phone-dropdown__phones">
              {phones.map((phone, index) => (
                <a className="phone-dropdown__phones-tel" href={`tel:${phone.tel}`} key={index}>{phone.telView}</a>
              ))}
            </div>
            <div className="phone-dropdown__order-button">
              <BubbleButton size={'small'}>Заказать звонок</BubbleButton>
            </div>
            <div className="phone-dropdown__category">
              <h4 className="phone-dropdown__category-title">E-mail</h4>
              <a href={`mailto:${email}`} className="phone-dropdown__category-text">{email}</a>
            </div>
            <div className="phone-dropdown__category">
              <h4 className="phone-dropdown__category-title">Адрес</h4>
              <a target={"_blank"} href={'https://yandex.ru/maps/-/CDvkYR8Z'} className="phone-dropdown__category-text">Респ. Чувашия, г. Чебоксары, улица Беззубова, 9</a>
            </div>
            <div className="phone-dropdown__category">
              <h4 className="phone-dropdown__category-title">Режим работы</h4>
              <p className="phone-dropdown__category-text">Пн - Вс: 9:00 - 18:00</p>
            </div>
          </div>
        </div>
      )}
    >
      <div onClick={(e) => e.preventDefault()}>
        <div className="phone-dropdown__row">
          {phones.map((phone, index) => (
            index === 0 && <span className="phone-dropdown__row-tel" key={index}>{phone.telView}</span>
          ))}
          <CaretDownOutlined />
        </div>
        <div className="phone-dropdown__mobile-icon">
          <PhoneFilled />
        </div>
      </div>
    </Dropdown>
  );
};

export default PhoneDropdown;
