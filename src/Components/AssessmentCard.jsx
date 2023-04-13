import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/SelfAssessmentSection.css";
import { Context } from "./Store";
import "../Css/AssessmentCard.css";

const AssessmentCard = ({ card, cardNum }) => {
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
    <div className={"assessment-card"}>
      <div className="heading">{card.typeOfAssessment}</div>
      {card.features.map((feature, index) => {
        return (
          <div key={index} className="text-content">
            {feature}
          </div>
        );
      })}
      <button className="button" onClick={() => handleClcik(card.cardType)}>
        {" "}
        {card.buttonText}{" "}
      </button>
    </div>
  );
};

export default AssessmentCard;
