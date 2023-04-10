import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/SelfAssessmentSection.css";
import { Context } from "./Store";
import "../Css/AssessmentCard.css";

const AssessmentCard = (props) => {
  const card = props.card;
  const cardNum = props.cardNum;
  const [consultDataState, setConsultDataState] = useContext(Context);
  const navigate = useNavigate();

  const handleClcik = (cardType) => {
    setConsultDataState((prevState) => {
      prevState.consultation_type = cardType;
      return prevState;
    });
    console.log("AssessmentCard", consultDataState);
    navigate("/category", { state: { cardType: cardType } });
  };

  return (
    <div className= {cardNum % 2 === 0 ? "assessment-card-0" : "assessment-card-1"}>
      {/* <div className="time-section">
        <div className="stopwatch">
          <div className="clock">
            <img src={card.timerImage} alt="" />
          </div>
          {<div className="stopwatch-text">{card.timeToAssessment}</div>}
        </div>
      </div> */}
      <div className="heading">{card.typeOfAssessment}</div>
      {card.features.map((feature, index) => {
        return <div className="report-text-content">{feature}</div>;
      })}
      <button className="button" onClick={() => handleClcik(card.cardType)}>
        {" "}
        {card.buttonText}{" "}
      </button>
    </div>
  );
};

export default AssessmentCard;
