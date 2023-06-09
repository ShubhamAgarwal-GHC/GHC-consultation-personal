import React from "react";
import "../../Css/ImageTextHorizontal.css";

const ImageTextHorizontal = ({ question, OPTIONS, setOptionSelected, optionSelected, multipleSelectAllowed }) => {

  const handleClick = (optionSelected) => {
    multipleSelectAllowed ? setOptionSelected((previousState) => {
      if(previousState.includes(optionSelected)) {
        return previousState.filter(function(value) {
          return value !== optionSelected;
        });
      } else {
        return [
          ...previousState,
          optionSelected
        ]
      }
    }) : setOptionSelected([optionSelected])
  };

  console.log("OPTIONS",OPTIONS);

  return (
    <div className="image-text-horizontal-main">
      {/* <div><h1>This is IMAGE_TEXT_HORIZONTAL OPTION COMPONENT</h1></div> */}
      <div className="image-text-horizontal-question">{question}</div>
      <div className="image-text-horizontal-all-options">
        {OPTIONS.map((option, index) => {
          return (
            <div className="image-text-horizontal-option" key={index}>
              <img
                className="image-text-horizontal-image"
                src={option.image}
                alt=""
              />
              <li
                className={`image-text-horizontal-text ${optionSelected.includes(index) ? 'selected' : ''}`}
                onClick={() => handleClick(index)}
              >
                {option.displayText}
              </li>
            </div>
          );
        })}
      </div>
      <div className="image-text-horizontal-button">
          button-shubham
      </div>
    </div>
  );
};

export default ImageTextHorizontal;
