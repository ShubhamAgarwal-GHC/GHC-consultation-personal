import React from "react";
import "../../Css/ImageTextHorizontal.css";

const ImageTextHorizontal = (props) => {
  const OPTIONS = props.options;
  const setOptionSelected = props.setOptionSelected;

  const handleClick = (optionSelected) => {
    setOptionSelected(optionSelected);
  };

  return (
    <div className="flex-container">
      {/* <div><h1>This is IMAGE_TEXT_HORIZONTAL OPTION COMPONENT</h1></div> */}
        {OPTIONS.map((option, index) => {
          return (
            <div className="flex-item" key={index}>
              <img className="image" src={option.image} alt="" />
              <li className="text"  onClick={() => handleClick(option.displayText)}>
                {option.displayText}
              </li>
            </div>
          );
        })}
    </div>
  );
};

export default ImageTextHorizontal;
