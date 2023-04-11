import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  QUESTIONS_WITH_OPTIONS,
  OPTIONS_COMPONENT,
} from "../Constants/Consultation";
import { Context } from "./Store";
import StepProgressBar from "./StepProgressBar";
import "../Css/StepProgressBar.css";

const QuestionsCard = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [optionSelected, setOptionSelected] = useState(0);
  const [stepsDetails, setStepsDetails] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const [consultDataState, setConsultDataState] = useContext(Context);
  
  const { brand, assessmentType, categoryType } = location.state;
  const QUESTIONS_OBJECT = QUESTIONS_WITH_OPTIONS[brand][assessmentType][categoryType];
  const QUESTIONS_ARRAY = QUESTIONS_OBJECT.questions;
  const OptionComponentToRender = OPTIONS_COMPONENT[QUESTIONS_ARRAY[currentPageIndex].optionType];

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

  const getStepsDetails = () => {
    const allQuestions = QUESTIONS_OBJECT.questions;
    let progressBarSteps = {};
    allQuestions.forEach((question) => {
      if (progressBarSteps.hasOwnProperty(question.belongsToProgressBarItem)) {
        progressBarSteps[question.belongsToProgressBarItem] =
          progressBarSteps[question.belongsToProgressBarItem] + 1;
      } else {
        progressBarSteps[question.belongsToProgressBarItem] = 1;
      }
    });
    const numberOfQuestions = allQuestions.length;
    let stepPositions = [0];
    for (const key in progressBarSteps) {
      const lastValue = stepPositions[stepPositions.length - 1];
      stepPositions.push(
        (progressBarSteps[key] / numberOfQuestions) * 100 + lastValue
      );
    }

    return {
      progressBarSteps: progressBarSteps,
      stepPositions: stepPositions,
      percent: (currentPageIndex / QUESTIONS_ARRAY.length) * 100,
    };
  };

  const details = getStepsDetails(); // Call your function here to retrieve data

  useEffect(() => {
    setStepsDetails(details); // Update the state with the retrieved data
  }, [currentPageIndex]);

  // adding "details" in dependency array is cauing unnecessary rerenderning

  return (
    <div>
      {QUESTIONS_OBJECT.isProgressBarRequired && (
        <div className="progressBar">
          <StepProgressBar stepsDetails={stepsDetails} />
        </div>
      )}

      <OptionComponentToRender
        question={QUESTIONS_ARRAY[currentPageIndex].question}
        OPTIONS={QUESTIONS_ARRAY[currentPageIndex].options}
        setOptionSelected={setOptionSelected}
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
