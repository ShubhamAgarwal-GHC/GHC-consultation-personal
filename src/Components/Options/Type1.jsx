import React from "react";
import ProgressBar from "../ProgressBar";
import "../../Css/Type1.css";
import "../../Css/StepProgressBar.css";
import CONSTANT from "../../Constants/constant.json"

const Type1 = ({
  question,
  OPTIONS,
  setOptionSelected,
  optionSelected,
  multipleSelectAllowed,
  isProgressBarRequired,
  percentage,
  handleNextPage,
}) => {
  const handleClick = (optionSelected) => {
    if (multipleSelectAllowed) {
      setOptionSelected((previousState) => {
        if (previousState.includes(optionSelected)) {
          return previousState.filter(function (value) {
            return value !== optionSelected;
          });
        } else {
          return [...previousState, optionSelected];
        }
      })
    } else {
      setOptionSelected([optionSelected]);
      handleNextPage();
    }
  };

  return (
    <div className="type1-main">
      {isProgressBarRequired && (
        <div className="progressBar">
          <ProgressBar percentage = {percentage} />
        </div>
      )}
      <div className="type1-question">{question}       {multipleSelectAllowed && <div className="selectedAllthatApply">
        <h4>{CONSTANT.SelectAllThatApply}</h4>
      </div>
      }</div>

      <div className="type1-all-options">
        {OPTIONS.map((option, index) => {
          return (
            <div className={`type1-option ${optionSelected.includes(index) ? 'selected' : ''}`} key={index} onClick={() => handleClick(index)}>
              {option.image && <img className="type1-image" src={option.image} alt="" />}
              <li
                className="type1-text"
              >
                {option.displayText}
              </li>
            </div>
          );
        })}
      </div>
      {multipleSelectAllowed && (
        <div className="type1-button">
          <button onClick={ () => handleNextPage()}>Continue</button>
        </div>
      )}
    </div>
  );
};

export default Type1;
