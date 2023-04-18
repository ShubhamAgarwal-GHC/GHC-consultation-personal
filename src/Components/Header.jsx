import { React } from "react";
import CONSTANT from "../Constants/constant.json";
import "../Css/Header.css";

import header_person from "../Images/header_person.png"
import header_plan from "../Images/header_plan.png"
import header_question_mark from "../Images/header_question_mark.png"
import header_timer from  "../Images/header_timer.png"
import header_book from "../Images/header_book.png"

const Header = () => {
  return (
    <div className="header-main">
      <div className="header-text">
        <h1 className="header-heading">
          {CONSTANT.Your_FREE_online_consultation_starts_here}
        </h1>
        <div className="header-image">
          <div className="header-image-list">
            <img className="img" src={header_timer} alt="" />
            <h6>{CONSTANT["2_3_mins"]}</h6>
          </div>
          <div className="header-image-list">
            <img className="img" src={header_question_mark} alt="" />
            <h6>{CONSTANT["8_10_questions"]}</h6>
          </div>
        </div>
        <div className="header-data">
        <div className="header-data-list">
            <img src={header_person} alt="" />
            <h6>{CONSTANT.Health_Expert}</h6>
        </div>
        <div className="header-data-list">
            <img src={header_plan} alt="" />
            <h6>{CONSTANT.Personalized_Treatment}</h6>
        </div>
        </div>
      </div>
      <div className="header-image">
        <img className="header-image-img" src={header_book} alt="" />
      </div>
    </div>
  );
};

export default Header;