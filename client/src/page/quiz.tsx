import React, { useState } from 'react';
import { ReducerType } from '../redux/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { nextIndex, QuizIndexStatus } from '../redux/quiz/quiz';
import { resultArr, resultStatus, OptionArr } from '../redux/quiz/result';
import { questions } from '../quizData/quizData';

function Quiz() {
  const dispatch = useDispatch();
  const quizState = useSelector(QuizIndexStatus);
  const resultArrState = useSelector(resultStatus);

  const [arr, setArr] = useState([0, 0, 0, 0, 0]);

  const [isEnd, setIsEnd] = useState(false);

  interface QuizProperty {
    [key: string]: any;
  }

  const questionArr = questions.map((el: QuizProperty) => el);
  // console.log(questionArr);

  const handlePlusIndex = (quizStaeIdx: number, idx: number) => {
    if (quizStaeIdx > 4) {
      setIsEnd(true);
    }
    console.log(idx);
    dispatch(resultArr({ idx }));
    dispatch(nextIndex());
  };

  console.log(resultArrState.resultOption.selectOptionArr);

  return (
    <div>
      {isEnd ? null : (
        <>
          <h1>
            {quizState.index + 1}/{questions.length}
          </h1>
          <h2>{questionArr[quizState.index].questionText}</h2>
          {questionArr[quizState.index].answerOptions.map(
            (el: QuizProperty, idx: number) => (
              <button
                key={idx}
                onClick={() => handlePlusIndex(quizState.index, idx)}
              >
                {el.answerText}
              </button>
            )
          )}
        </>
      )}
    </div>
  );
}

export default Quiz;
