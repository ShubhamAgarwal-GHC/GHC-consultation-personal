import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

const ProgressBarGHC = ({percentage}) => {
  return (
    <ProgressBar
      percent={percentage}
      filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
    >
    </ProgressBar>
  );
}


export default ProgressBarGHC;