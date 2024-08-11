import React, {useEffect, useState} from 'react';

const QuizCard = ({card}) => {

  useEffect(() => {
    console.log(card)
  }, [card]);

  const [select, setSelect] = useState(false)

  const selectCard = () => {
    setSelect(!select)
  }

  return (
    <div key={card.key} onClick={selectCard} className={`quiz__card ${select ? 'selected' : ''}`}>
      <div className="quiz__card-image">
        <img src={card.image} alt={card.value}/>
      </div>
      <p className="quiz__card-title">{card.value}</p>
    </div>
  );
};

export default QuizCard;
