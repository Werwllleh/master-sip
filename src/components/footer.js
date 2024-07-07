import Link from "next/link";
import {businessInfo, contactInfo, menu} from "@/utils/consts";
import Logo from "@/components/logo/logo";
import {phoneNumber} from "@/utils/functions";
import SocialButton from "@/components/social-button";
import BubbleButton from "@/components/bubble-button";


const Footer = () => {

  const date = new Date()


  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-top__body">
            <div className="footer-top__logo">
              <Logo hex={"#ffffff"}/>
            </div>
            <div className="footer-top__menu">
              {Object.values(menu).map((link) => {
                return (
                  <Link className="footer-top__menu-item" key={link.baseUrl.url}
                        href={link.baseUrl.url}>{link.baseUrl.text}</Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-center">
        <div className="container">
          <div className="footer-center__body">
            <div className="footer-center__col">
              <Link target="_blank" className="footer-center__address" href={contactInfo.address.url}>{contactInfo.address.text}</Link>
              <ul className="footer-center__info">
                {Object.values(menu.info.childLinks).map((link) => {
                  return (
                    <li key={link.url} className="footer-center__info-item"><Link
                      href={menu.info.baseUrl.url + link.url}>{link.text}</Link></li>
                  )
                })}
              </ul>
            </div>
            <div className="footer-center__col">
              <div className="footer-center__phones">
                <h5>Всегда на связи:</h5>
                <div className="footer-center__phones-items">
                  {contactInfo.phones.map((phone) => {
                    return <Link key={phoneNumber(phone)} className="footer-center__phones-item" href={`tel:${phoneNumber(phone)}`}>{phone}</Link>
                  })}
                </div>
              </div>
              <div className="footer-center__socials">
                <h5>Напишите нам:</h5>
                <ul className="footer-center__socials-list">
                  {Object.values(contactInfo.socials).map((social) => {
                    return (
                      <li className="footer-center__socials-item" key={social.url} >
                        <SocialButton icon={social.icon} link={social.url} classLink={social.classLink}/>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="footer-center__col">
              <div className="footer-center__mail">
                <h5>Ждем ваших писем по адресу:</h5>
                <Link className="footer-center__mail-link" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</Link>
              </div>
              <div className="footer-center__ordercall">
                <BubbleButton size="medium">Заказать звонок</BubbleButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom__body">
            <div className="footer-bottom__left">
              <Link href={'/agreement'}>Политика конфиденциальности</Link>
            </div>
            <div className="footer-bottom__center">
              <h6>MASTER SIP</h6>
              <span>{date.getFullYear()}</span>
            </div>
            <div className="footer-bottom__right">
              {Object.values(contactInfo.businessInfo).map((info, index) => {
                return <p key={info}
                          className="footer-bottom__right-item">{info}&nbsp;{index !== Object.values(contactInfo.businessInfo).length - 1 &&
                  <span>/</span>}</p>
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
