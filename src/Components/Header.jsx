import { React } from "react";
import CONSTANT from "../Constants/constant";
import "../Css/Header.css";
const Header = () => {
  return (
    <div className="header-block">
      <h1 className="assessment-header">
        {CONSTANT.START_YOUR_SELF_ASSESSMENT}
      </h1>
      <div className="assessment-list">
        {CONSTANT.BANNER_INFO.map((bannerText, index) => {
          return (
            <li className="header-text" key={index}>
              {bannerText}
            </li>
          );
        })}
      </div>

      {/* <div>
        <img className="img-doctor" src={CONSTANT.BANNER_IMAGE_SRC} alt="" />
      </div> */}
    </div>
  );
};

export default Header;
