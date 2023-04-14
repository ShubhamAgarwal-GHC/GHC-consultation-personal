import React, { useContext } from "react";
import CONSTANT from '../Constants/constant.json'
import { Context } from "./Store";
import "../Css/BookingSelectionPage.css"

const BookingSelectionPage = () => {
  const [consultDataState, setConsultDataState] = useContext(Context); // this is the global object which stores all the info
  console.log("setConsultDataState",setConsultDataState);
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
          <button>{CONSTANT.BookFREEConsultation}</button>
        </div>
        <div className="recommend">
          <button>{CONSTANT.GoWithRecommendedProducts}</button>
        </div>
      </div>
    </div>
  );
};

export default BookingSelectionPage;
