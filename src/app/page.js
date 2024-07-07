import SwiperMain from "@/components/swiper-main";
import SectionAchievements from "@/components/sections/section-achievements";
import SectionCatalog from "@/components/sections/section-catalog";
import Accordion from "@/components/accordion";
import {faq, QUESTION, SMALL} from "@/utils/consts";
import BubbleButton from "@/components/bubble-button";

const Home = () => {

  return (
    <div className="page-main">
      <section className="section-swiper-main">
        <SwiperMain/>
      </section>
      <SectionAchievements/>
      <SectionCatalog/>
      <section className="section-accordion">
        <div className="container">
          <div className="section-accordion__body">
            <div className="section-accordion__info">
              <h2 className="section-accordion__title section-title">Вопросы-ответы</h2>
              <div className="section-accordion__accordion-mobile">
                <Accordion items={faq.slice(0, 4)}/>
              </div>
              <p className="section-accordion__text">Для получения допольнительной консультации свяжитесь с нами по электронной почте или телефону для получения. Мы поделимся подробностями и предложим индивидуальные условия сотрудничества.</p>
              <div className="section-accordion__button">
                <BubbleButton type={QUESTION} size={SMALL}>Задать вопрос</BubbleButton>
              </div>
            </div>
            <div className="section-accordion__accordion">
              <Accordion items={faq.slice(0, 4)}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
