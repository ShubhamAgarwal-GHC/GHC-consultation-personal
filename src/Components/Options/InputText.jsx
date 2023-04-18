import React, { useState, useEffect } from "react";
import ProgressBar from "../ProgressBar";
import CONSTANT from "../../Constants/constant.json";
import "../../Css/InputText.css";

const InputText = ({
  question,
  OPTIONS,
  multipleSelectAllowed,
  isProgressBarRequired,
  percentage,
  handleNextPage,
}) => {
  const [optionSelected, setOptionSelected] = useState({});

  useEffect(() => {
    console.log("optionSelected", optionSelected);
  }, [optionSelected]);

  const handleOnChange = (e) => {
    // console.log("e.target",e.target);
    setOptionSelected((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = () => {
    // console.log("handleSubmit",handleSubmit);
    handleNextPage([optionSelected]);
  };

  return (
    <div className="inputText">
      {isProgressBarRequired && (
        <div className="progressBar">
          <ProgressBar percentage={percentage} />
        </div>
      )}

      <div className="inputTest-question">
        {question}{" "}
        {multipleSelectAllowed && (
          <div className="selectedAllthatApply">
            <h4>{CONSTANT.SelectAllThatApply}</h4>
          </div>
        )}
      </div>

      <div className="options">
        {OPTIONS.map((option, key) => {
          return (
            <label key={key}>
              {option.displayText}
              <input
                className="inputTextBox"
                name={option.value}
                type={option.type}
                placeholder={option.placeHolder}
                onChange={handleOnChange}
              />
            </label>
          );
        })}
        <div className="submit-inputText">
          <button className="submit" onClick={handleSubmit}>
            {CONSTANT.Proceed}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputText;
