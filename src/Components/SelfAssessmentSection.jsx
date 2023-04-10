import React from "react";
import AssessmentCard from "./AssessmentCard";
import { ASSESSMENT_CARDS } from "../Constants/Consultation";
// import CONSTANT from "../Constants/constant.json"
import "../Css/SelfAssessmentSection.css";


const SelfAssessmentSection = () => {
  return (
    <>
      <div className="self-assessment-section">
        <div className="self-assessment-cards">
          {
            ASSESSMENT_CARDS.map((card,index) => {
              return <AssessmentCard key = {index} cardNum = {index} card = {card}/>
            })
          }
        </div>
      </div>
    </>
  );
};

export default SelfAssessmentSection;
