const imgPath = '/assets/images/quiz';
const CARDS = 'cards';
const LIST = 'list';

export const quizCalc = [
  {
    index: 1,
    key: 'floor',
    type: CARDS,
    selection: 'single',
    title: 'Сколько этажей будет в доме?',
    items: [
      {
        value: 'Один этаж',
        image: `${imgPath}/calc/q0/1.jpg`
      },
      {
        value: 'Один этаж с мансардой',
        image: `${imgPath}/calc/q0/2.jpg`
      },
      {
        value: 'Два этажа',
        image: `${imgPath}/calc/q0/3.jpg`
      }
    ]
  },
  {
    index: 2,
    key: 'square',
    type: LIST,
    selection: 'single',
    title: 'Какую общую площадь Вы рассматриваете?',
    items: [
      {
        value: <>60 - 80 м<sup>2</sup></>
      },
      {
        value: <>80 - 100 м<sup>2</sup></>
      },
      {
        value: <>120 - 150 м<sup>2</sup></>
      },
      {
        value: <>150 - 200 м<sup>2</sup></>
      },
    ]
  },
  {
    index: 3,
    key: 'roof',
    type: CARDS,
    selection: 'single',
    title: 'Планируемый тип крыши?',
    items: [
      {
        value: 'Металлочерепица',
        image: `${imgPath}/calc/q2/1.jpg`
      },
      {
        value: 'Профнастил',
        image: `${imgPath}/calc/q2/2.jpg`
      },
      {
        value: 'Мягкая кровля',
        image: `${imgPath}/calc/q2/3.jpg`
      },
      {
        value: 'Нужна консультация',
        image: `${imgPath}/calc/consult.jpg`
      },
    ]
  },
  {
    index: 4,
    key: 'project',
    type: LIST,
    selection: 'single',
    title: 'Есть ли у Вас проект дома?',
    items: [
      {
        value: 'Есть готовый проект‍'
      },
      {
        value: 'Есть эскизы в карандаше‍'
      },
      {
        value: 'Есть примеры проектов, которые нравятся‍'
      },
      {
        value: 'Хочу индивидуальный проект (для вас бесплатно)'
      },
      {
        value: 'Выберу из ваших проектов‍'
      },
      {
        value: 'Нет (нужна консультация)'
      },
    ]
  },
  {
    index: 5,
    key: 'cash',
    type: LIST,
    selection: 'multiple',
    title: 'На какие средства будем строить?',
    items: [
      {
        value: 'Материнский капитал'
      },
      {
        value: 'Гос. программа "Молодая семья"'
      },
      {
        value: 'В ипотеку'
      },
      {
        value: 'Другой вариант'
      },
    ]
  },
  {
    index: 6,
    key: 'date',
    type: LIST,
    selection: 'single',
    title: 'Когда Вы планируете строительство?',
    items: [
      {
        value: 'В ближайшее время'
      },
      {
        value: 'Через 1-3 мес'
      },
      {
        value: 'Через 3-6 мес'
      },
      {
        value: 'Пока просто прицениваюсь'
      },
    ]
  },
  {
    index: 7,
    key: 'contact',
    type: LIST,
    selection: 'multiple',
    title: 'Куда вам удобно получить расчет?',
    items: [
      {
        value: 'Telegram'
      },
      {
        value: 'WhatsApp'
      },
      {
        value: 'Viber'
      },
      {
        value: 'Sms'
      },
      {
        value: 'Консультация по телефону'
      },
    ]
  },
  {
    index: 8,
    key: 'advantages',
    type: LIST,
    selection: 'multiple',
    title: 'Выберите преимущества, они будут закреплены за Вами',
    items: [
      {
        value: 'Старт работ без первоначального взноса'
      },
      {
        value: 'Подробная смета с учетом ваших ответов'
      },
      {
        value: 'Проект бесплатно'
      },
      {
        value: 'Скидка 25 000 руб'
      },
      {
        value: 'Гарантия 5 лет'
      },
    ]
  },
  {
    index: 9,
    type: 'phone',
    title: 'Введите номер телефона, на который вам отправить расчет',
  },
  {
    index: 10,
    type: 'thanks',
    title: 'Спасибо! Ваша заявка отправлена',
  },
]
