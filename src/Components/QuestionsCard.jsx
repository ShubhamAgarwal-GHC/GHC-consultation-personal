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

  //keep track of current question
  const [currentPageIndex, setCurrentPageIndex] = useState(
    JSON.parse(sessionStorage.getItem("currentPageIndex")) || 0
  ); 

  // This is the global object which stores all the info till now
  const [consultDataState, setConsultDataState] = useContext(Context); 

  // Stores the answer selected for the questions
  const [optionSelectedObj, setOptionSelectedObj] = useState({});
  
  //Used to check and display the Quotes/fact if any there in the question
  const [display, setDisplay] = useState(true);

  // Below few lines get the basic details for the current question
  const { brand, assessmentType, categoryType } = location.state;
  const QUESTIONS_OBJECT = QUESTIONS_WITH_OPTIONS[brand][assessmentType][categoryType];
  const QUESTIONS_ARRAY = QUESTIONS_OBJECT.questions;
  const OptionComponentToRender = OPTIONS_COMPONENT[QUESTIONS_ARRAY[currentPageIndex].optionType];
  
 

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
    </div>
  );
};

export default QuestionsCard;
