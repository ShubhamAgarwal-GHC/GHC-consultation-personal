import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  QUESTIONS_WITH_OPTIONS,
  OPTIONS_COMPONENT,
} from "../Constants/Consultation";
import { Context } from "./Store";
import "../Css/QuestionsCard.css";

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

  // Used to check and display the Quotes/fact if any there in the question
  const [display, setDisplay] = useState(true);

  // Stores the details for the quote -> actual quote and timer for the quote
  const [quotesDetails, setQuotesDetails] = useState({});

  // Below few lines get the basic details for the current question
  const { brand, assessmentType, categoryType } = location.state;
  const QUESTIONS_OBJECT =
    QUESTIONS_WITH_OPTIONS[brand][assessmentType][categoryType];
  const QUESTIONS_ARRAY = QUESTIONS_OBJECT.questions;
  const OptionComponentToRender =
    OPTIONS_COMPONENT[QUESTIONS_ARRAY[currentPageIndex].optionType];

  // The skip logic is present in the consultation.js in the question object
  useEffect(() => {
    const checkForSkipQuestion = () => {
      if (QUESTIONS_ARRAY[currentPageIndex]["skipQuestionReq"]) {
        const newQuestionNumber =
          QUESTIONS_ARRAY[currentPageIndex].skipToQuestion(optionSelectedObj);
        if (newQuestionNumber !== currentPageIndex) {
          setCurrentPageIndex(newQuestionNumber);
        }
      }
    };
    checkForSkipQuestion();
  }, [currentPageIndex, QUESTIONS_ARRAY, optionSelectedObj]);

  // Not combing the two useEffect since it can cause performace issue, due to setQuotesDetails
  // As setQuotesDetails will be updated it can cause infite re-render 
  useEffect(() => {
    // Setting up the quotes/facts req for the current question
    const newQuotesDetails = {
      quotes: QUESTIONS_ARRAY[currentPageIndex]["quotes"],
      quotesDisplayTime: QUESTIONS_ARRAY[currentPageIndex]["quotesDelay"],
    };
    setQuotesDetails(newQuotesDetails);

    // Setting up timer so that quotes will be displayed for this time period
    const timerId = setTimeout(
      () => setDisplay(false),
      newQuotesDetails.quotesDisplayTime
    );
    setDisplay(true);

    // updating the session storage
    sessionStorage.setItem(
      "consultDataState",
      JSON.stringify(consultDataState)
    );
    sessionStorage.setItem(
      "currentPageIndex",
      JSON.stringify(currentPageIndex)
    );

    return () => clearTimeout(timerId);
  }, [currentPageIndex, QUESTIONS_ARRAY, consultDataState]);

  const handleNextPage = (optionsSelectedValues) => {
    // This is the test to handle question skip
    setOptionSelectedObj((prevState) => {
      return {
        ...prevState,
        [currentPageIndex]: optionsSelectedValues,
      };
    });

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
      {display && <div className="quotes">{quotesDetails.quotes}</div>}
      {!display && (
        <OptionComponentToRender
          question={QUESTIONS_ARRAY[currentPageIndex].question}
          OPTIONS={QUESTIONS_ARRAY[currentPageIndex].options}
          multipleSelectAllowed={
            QUESTIONS_ARRAY[currentPageIndex].multipleSelectAllowed
          }
          isProgressBarRequired={QUESTIONS_OBJECT.isProgressBarRequired}
          percentage={((currentPageIndex + 1) / QUESTIONS_ARRAY.length) * 100}
          handleNextPage={handleNextPage}
        />
      )}
    </div>
  );
};

export default QuestionsCard;
