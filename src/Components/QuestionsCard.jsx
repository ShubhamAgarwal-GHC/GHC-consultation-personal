import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  QUESTIONS_WITH_OPTIONS,
  OPTIONS_COMPONENT,
} from "../Constants/Consultation";
import { Context } from "./Store";
import "../Css/QuestionsCard.css"

const QuestionsCard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentPageIndex, setCurrentPageIndex] = useState(
    JSON.parse(sessionStorage.getItem("currentPageIndex")) || 0
  ); //keep track of current question
  
  const [display, setDisplay] = useState(true);

  const { brand, assessmentType, categoryType } = location.state;
  const QUESTIONS_OBJECT = QUESTIONS_WITH_OPTIONS[brand][assessmentType][categoryType];
  const QUESTIONS_ARRAY = QUESTIONS_OBJECT.questions;
  const OptionComponentToRender = OPTIONS_COMPONENT[QUESTIONS_ARRAY[currentPageIndex].optionType];
  const [consultDataState, setConsultDataState] = useContext(Context); // this is the global object which stores all the info
  const [optionSelectedObj, setOptionSelectedObj] = useState(
    JSON.parse(sessionStorage.getItem("optionSelectedObj")) || {}
  );

  let currentPageIndexValue = currentPageIndex;
  if(QUESTIONS_ARRAY[currentPageIndex]["skipQuestionReq"]) {
    currentPageIndexValue = QUESTIONS_ARRAY[currentPageIndex].skipToQuestion(optionSelectedObj);
  }
  
  const quotes = QUESTIONS_ARRAY[currentPageIndexValue]["quotes"];
  const quotesDisplayTime = QUESTIONS_ARRAY[currentPageIndexValue]["quotesDelay"];

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDisplay(false);
    }, quotesDisplayTime);
    setDisplay(true);
    setCurrentPageIndex(currentPageIndexValue);

    console.log("local",consultDataState);
    sessionStorage.setItem("consultDataState", JSON.stringify(consultDataState));

    sessionStorage.setItem("currentPageIndex", JSON.stringify(currentPageIndex));

    setCurrentPageIndex(JSON.parse(sessionStorage.getItem("currentPageIndex")) || 0);
    // setOptionSelectedObj(JSON.parse(sessionStorage.getItem("optionSelectedObj")) || {});
    console.log("optionSelectedObj",optionSelectedObj);

    return () => clearTimeout(timerId);
  }, [optionSelectedObj,currentPageIndexValue,quotesDisplayTime,consultDataState,currentPageIndex]);


  const handleNextPage = (optionsSelectedValues) => {

    // This is the test to handle question skip
    setOptionSelectedObj((prevState) => {
      return {
        ...prevState,
        [currentPageIndex] : optionsSelectedValues
      }
    })
    //end

    setConsultDataState((prevState) => {
      const user_survey_data = prevState.user_survey;
      user_survey_data.push({
        question: QUESTIONS_ARRAY[currentPageIndex].question,
        answer: optionsSelectedValues,
      });
      prevState.user_survey = user_survey_data;
      return prevState;
    });
    console.log("QuestionsCard", consultDataState);
    if (currentPageIndex < QUESTIONS_ARRAY.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    } else {
      navigate("/bookingSelectionPage", { state: {} });
    }
  };

  return (
    <div>
      {display && <div className="quotes">{quotes}</div>}
      {!display &&
      <OptionComponentToRender
        question={QUESTIONS_ARRAY[currentPageIndex].question}
        OPTIONS={QUESTIONS_ARRAY[currentPageIndex].options}
        multipleSelectAllowed = {QUESTIONS_ARRAY[currentPageIndex].multipleSelectAllowed}
        isProgressBarRequired = {QUESTIONS_OBJECT.isProgressBarRequired}
        percentage = {((currentPageIndex + 1) / QUESTIONS_ARRAY.length) * 100}
        handleNextPage = {handleNextPage}
      />}

      {/* <button onClick={handlePreviousPage} disabled={currentPageIndex === 0}>
        Previous
      </button>
      <span>{`Page ${currentPageIndex + 1} of ${QUESTIONS_ARRAY.length}`}</span>
      <button
        onClick={handleNextPage}
        // disabled={currentPageIndex === QUESTIONS_ARRAY.length - 1}
      >
        Next
      </button> */}

    </div>
  );
};

export default QuestionsCard;
