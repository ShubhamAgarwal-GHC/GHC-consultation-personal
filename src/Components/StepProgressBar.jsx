import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const StepProgressBar = ({stepsDetails}) => {
  console.log("stepsDetails",stepsDetails);
  return (
    <ProgressBar
      percent={stepsDetails.percent}
      filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      
    >
      <Step transition="scale">
        {({ accomplished }) => (
          
          <img
            // style={{ filter: `grayscale(${accomplished ? 10 : 10}%)` }}
            width="60"
            src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
            alt=""
          />
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <img
            // style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="30"
            src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
            alt=""
          />
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <img
            // style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="30"
            src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
            alt=""
          />
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <img
            // style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
            width="30"
            src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
            alt=""
          />
        )}
      </Step>
    </ProgressBar>
  );
}


export default StepProgressBar;