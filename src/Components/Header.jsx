import { React } from "react";
import CONSTANT from '../Constants/constant';
import "../Css/Header.css";
const Header = () => {
  return (
    <div className="header-block">
      <div className="heading">{CONSTANT.KNOW_WHATS_RIGHT_FOR_YOU}</div>
      {
        CONSTANT.BANNER_INFO.map((bannerText,index) => {
          return <div className="header-text" key = {index}>{bannerText}</div>
        })
      }
      <div>
        <img className="img-doctor" src={CONSTANT.BANNER_IMAGE_SRC} alt="" />
      </div>
    </div>
  );
};

export default Header;
