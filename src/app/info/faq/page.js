import React from 'react';
import LeftBarLayout from "@/components/layouts/leftbar-layout";
import {faq, MEDIUM, QUESTION} from "@/utils/consts";
import Accordion from "@/components/accordion";
import BubbleButton from "@/components/bubble-button";

const Page = () => {
  return (
    <LeftBarLayout>
      <div className="page-faq">
        <div className="page-faq__body">
          <h1>Вопросы-ответы</h1>
          <p className="page-faq__description">
            Добро пожаловать на страницу часто задаваемых вопросов по строительству домов из SIP-панелей! Здесь вы
            найдете исчерпывающую информацию, которая поможет вам лучше понять процесс строительства, особенности
            использования SIP-панелей, их преимущества и тонкости эксплуатации.
          </p>
          <Accordion items={faq}/>
          <div className="page-faq__question">
            <p className="page-faq__question-text">
              Мы понимаем, что строительство дома – это важный шаг, и у вас могут возникнуть дополнительные вопросы.
              Наша команда всегда готова помочь вам разобраться в любых деталях! Свяжитесь с нами, и мы с радостью
              предоставим всю необходимую информацию, поделимся экспертными советами и поможем вам сделать правильный
              выбор.
              <span>Ваше спокойствие и уверенность – наш приоритет!</span>
            </p>
            <div className="page-faq__question-button">
              <BubbleButton type={QUESTION} size={MEDIUM}>Задать вопрос</BubbleButton>
            </div>
          </div>
        </div>
      </div>
    </LeftBarLayout>
  );
};

export default Page;
