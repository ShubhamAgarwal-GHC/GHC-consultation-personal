import React, { useContext } from "react";
import CONSTANT from "../Constants/constant.json";
import { Context } from "./Store";
import "../Css/FreeConsultation.css";
const FreeConsultation = () => {
  const [consultDataState, setConsultDataState] = useContext(Context);
  console.log("setConsultDataState", setConsultDataState);

  const handleClick = () => {
    console.log("need to link to shopify")
  }
  
  return (
    <div className="freeConsultation">
      <div className="heading">
        <h1>{CONSTANT.YourRequestWasSubmittedSuccessfully}</h1>
      </div>
      <div className="subHeading">
        {CONSTANT.FreeBookingSubHeading.map((subHeading, index) => {
          return <li key={index}>{subHeading}</li>;
        })}
      </div>
      <button onClick={() => handleClick()}>{`Shop ${consultDataState.category.toLowerCase()} care`}</button>
    </div>
  );
};

export default FreeConsultation;
