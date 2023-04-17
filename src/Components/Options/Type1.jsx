import React, {useState} from "react";
import ProgressBar from "../ProgressBar";
import "../../Css/Type1.css";
import "../../Css/StepProgressBar.css";
import CONSTANT from "../../Constants/constant.json";

const Type1 = ({
  question,
  OPTIONS,
  multipleSelectAllowed,
  isProgressBarRequired,
  percentage,
  handleNextPage,
}) => {

  const [optionSelected,setOptionSelected] = useState([]);

  const handleClick = (optionSelectedVal) => {
    console.log("optionSelectedVal",optionSelectedVal);
    if (multipleSelectAllowed) {
      setOptionSelected((previousState) => {
        if (previousState.includes(optionSelectedVal)) {
          return previousState.filter(function (value) {
            return value !== optionSelectedVal;
          });
        } else {
          return [...previousState, optionSelectedVal];
        }
      });
    } else {
      setOptionSelected([optionSelectedVal]);
      handleNextPage([optionSelectedVal]);
    }
  };

  return (
    <div className="type1-main">
      {isProgressBarRequired && (
        <div className="progressBar">
          <ProgressBar percentage={percentage} />
        </div>
      )}
      <div className="type1-question">
        {question}{" "}
        {multipleSelectAllowed && (
          <div className="selectedAllthatApply">
            <h4>{CONSTANT.SelectAllThatApply}</h4>
          </div>
        )}
      </div>

      <div className="type1-all-options">
        {OPTIONS.map((option, index) => {
          return (
            <div
              className={`type1-option ${
                optionSelected.includes(option.displayText) ? "selected" : ""
              }`}
              key={index}
              onClick={() => handleClick(option.displayText)}
            >
              {option.image && (
                <img className="type1-image" src={option.image} alt="" />
              )}
              <li className="type1-text">{option.displayText}</li>
            </div>
          );
        })}
      </div>
      {multipleSelectAllowed && (
        <div className="type1-button">
          <button onClick={() => handleNextPage(optionSelected)}>{CONSTANT.Proceed}</button>
        </div>
      )}
    </div>
  );
};

export default Type1;
