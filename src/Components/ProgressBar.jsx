import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

const ProgressBarGHC = ({percentage}) => {
  return (
    <ProgressBar
      percent={percentage}
      filledBackground="linear-gradient(to right, #FFFFFF, #000000)"
    >
    </ProgressBar>
  );
}


export default ProgressBarGHC;