import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/SelfAssessmentSection.css";

const AssessmentCard = (props) => {
  const navigate = useNavigate();
  const handleClcik = (cardType) => {
    navigate("/category",{ state : {cardType: cardType}})
  };
  const card = props.card;
  return (
    <div className="assessment-card">
      <div className="time-section">
        <div className="stopwatch">
          <div className="clock">
            <img src={card.timerImage} alt="" />
          </div>
          {<div className="stopwatch-text">{card.timeToAssessment}</div>}
        </div>
      </div>
      <div className="content">
        <div className="heading">{card.typeOfAssessment}</div>
        <div className="report">
          {card.features.map((feature, index) => {
            return (
              <div className="report-text" key={index}>
                <div className="tick">
                  <img src={card.listType} alt="" />
                </div>
                <div className="report-text-content">{feature}</div>
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={() => handleClcik(card.cardType)}>
        {" "}
        {card.buttonText}{" "}
      </button>
    </div>
  );
};

export default AssessmentCard;
