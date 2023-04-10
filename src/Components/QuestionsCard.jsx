import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { QUESTIONS_WITH_OPTIONS, OPTIONS_COMPONENT } from "../Constants/Consultation";
import { Context } from "./Store"

const QuestionsCard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [consultDataState, setConsultDataState] = useContext(Context);
  const { brand, assessmentType, categoryType } = location.state;
  const QUESTIONS_OBJECT =
    QUESTIONS_WITH_OPTIONS[brand][assessmentType][categoryType];
  const QUESTIONS_ARRAY = QUESTIONS_OBJECT.questions;

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [optionSelected, setOptionSelected] = useState(0);

  const handlePreviousPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPageIndex < QUESTIONS_ARRAY.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);

      setConsultDataState((prevState) => {
        const user_survey_data = prevState.user_survey;
        user_survey_data.push({
          question: QUESTIONS_ARRAY[currentPageIndex].question,
          answer: optionSelected,
        });
        prevState.user_survey = user_survey_data;
        return prevState;
      });
      console.log("QuestionsCard", consultDataState);
    } else {
      // no question left, take user name and phone number as input
      navigate("/contactForm", { state: { cardType: "cardType" } });

    }
  };

  const OptionComponentToRender = OPTIONS_COMPONENT[QUESTIONS_ARRAY[currentPageIndex].optionType];

  return (
    <div>
      <div>{QUESTIONS_ARRAY[currentPageIndex].question}</div>
      <OptionComponentToRender
        question = {QUESTIONS_ARRAY[currentPageIndex].question}
        options = {QUESTIONS_ARRAY[currentPageIndex].options}
        setOptionSelected = {setOptionSelected}
      />

      <button onClick={handlePreviousPage} disabled={currentPageIndex === 0}>
        Previous
      </button>
      <span>{`Page ${currentPageIndex + 1} of ${QUESTIONS_ARRAY.length}`}</span>
      <button
        onClick={handleNextPage}
        // disabled={currentPageIndex === QUESTIONS_ARRAY.length - 1}
      >
        Next
      </button>
    </div>
  );
};

export default QuestionsCard;
