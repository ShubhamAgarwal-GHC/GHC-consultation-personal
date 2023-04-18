import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CONSTANT from '../Constants/constant.json'
import { Context } from "./Store";
import "../Css/BookingSelectionPage.css"

const BookingSelectionPage = () => {
  const [consultDataState, setConsultDataState] = useContext(Context); // this is the global object which stores all the info
  const navigate = useNavigate();

  const handleFreeConsultation = () => {
    setConsultDataState((prevState) => {
      prevState.booking = CONSTANT.FreeConsultation;
      prevState.consultation_completion_status = CONSTANT.COMPLETED;
      return prevState;
    });
    navigate("/freeConsultation", {
        state: {},
      });
  }

  const handleRecommendadtion = () => {
    setConsultDataState((prevState) => {
      prevState.booking = CONSTANT.FreeRecommendation;
      prevState.consultation_completion_status = CONSTANT.COMPLETED;
      return prevState;
    });
    navigate("/recommendProduct", {
      state: {},
    });
  }

  return (
    <div className="bookingSelectionPage">
      <div className="heading">
        <h1>{`We are analyzing your current ${consultDataState.category.toLowerCase()} stage & conditions`}</h1>
      </div>
      <div className="subHeading">
        <h2>{CONSTANT.WeRecommendYouToConnectWithOurExpert}</h2>
      </div>
      <div className="chooseOption">
        <div className="bookACall">
          <button onClick={() => handleFreeConsultation()}>{CONSTANT.BookFREEConsultation}</button>
        </div>
        <div className="recommend">
          <button onClick={() => handleRecommendadtion()}>{CONSTANT.GoWithRecommendedProducts}</button>
        </div>
      </div>
    </div>
  );
};

export default BookingSelectionPage;
