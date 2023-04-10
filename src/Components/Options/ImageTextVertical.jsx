import React from "react";

const ImageTextVertical = (props) => {
    const OPTIONS = props.options;
    const setOptionSelected = props.setOptionSelected;

  const handleClick = (optionSelected) => {
    setOptionSelected(optionSelected);
  };

  return (
    <div>
      <h1>This is Image_Text_VerticalL OPTION COMPONENT</h1>
      {OPTIONS.map((option, index) => {
        return (
          <li key={index} onClick={() => handleClick(option.displayText)}>
            {option.displayText}
          </li>
        );
      })}
    </div>
  );
};

export default ImageTextVertical;
