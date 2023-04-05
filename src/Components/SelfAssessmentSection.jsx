import React from "react";
import AssessmentCard from "./AssessmentCard";
import { ASSESSMENT_CARDS } from "../Constants/Consultation";
import CONSTANT from "../Constants/constant.json"
import "../Css/SelfAssessmentSection.css";


const SelfAssessmentSection = () => {
  return (
    <>
      <div className="self-assessment-section">
        <div className="assessment-header">{CONSTANT.START_YOUR_SELF_ASSESSMENT}</div>
        <div className="assessment-text">{CONSTANT.GET_TO_KNOW_YOUR_NEEDS}</div>
        <div className="self-assessment-cards">
          {
            ASSESSMENT_CARDS.map((card,index) => {
              return <AssessmentCard key = {index} card = {card}/>
            })
          }
        </div>
      </div>
    </>
  );
};

export default SelfAssessmentSection;
