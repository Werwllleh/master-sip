'use client'

import {useEffect, useState} from "react";
import {useQuizStore} from "@/store/store-quiz";
import BubbleButton from "@/components/bubble-button";
import {SIMPLE} from "@/utils/consts";
import {Progress} from "antd";
import QuizCard from "@/components/quiz/quiz-cards";
import QuizList from "@/components/quiz/quiz-list";

const Quiz = ({data}) => {

  const [currentType, setCurrentType] = useState('');
  const [currentData, setCurrentData] = useState('');
  const currentStep = useQuizStore((state) => state.quizStep);

  const updateUsers = useQuizStore((state) => state.updateMaxStep);
  const updateStepNext = useQuizStore((state) => state.updateStepNext);
  const updateStepBack = useQuizStore((state) => state.updateStepBack);

  useEffect(() => {
    setCurrentType(data.filter((step, index) => index === currentStep)[0].type);
  }, [data, currentStep]);

  useEffect(() => {
    if (currentType !== 'phone' && currentType !== 'thanks') {
      setCurrentData(data.filter((step, index) => index === currentStep)[0])
    }

  }, [currentType]);

  useEffect(() => {
    updateUsers(data.length - 1)
  }, [data, currentStep]);


  return (
    <div className="quiz">
      <div className="quiz__body">
        <div className="quiz__progress">
          <Progress strokeLinecap="butt" percent={Math.round((currentStep / (data.length - 1)) * 100)}/>
        </div>
        <h3 className="quiz__title">
          {data.filter((step, index) => index === currentStep)[0]?.title}
        </h3>
        <div className="quiz__content">
          {currentType === 'cards' && (
            <div className="quiz__cards">
              {currentData.items?.map(card => {
                return <QuizCard card={card}/>
              })}
            </div>
          )}
          {currentType === 'list' && <QuizList data={currentData}/>}
        </div>
        <div className="quiz__navigate">
          <div className={`quiz__navigate-button ${currentStep !== 0 ? 'show' : ''}`}>
            <BubbleButton type={SIMPLE} onClick={updateStepBack}>Назад</BubbleButton>
          </div>
          <div className={`quiz__navigate-button ${currentStep !== data.length - 1 ? 'show' : ''}`}>
            <BubbleButton type={SIMPLE} onClick={updateStepNext}>Дальше</BubbleButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
