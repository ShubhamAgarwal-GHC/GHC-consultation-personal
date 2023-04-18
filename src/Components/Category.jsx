import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CATEGORIES_FOR_ASSESSMENT } from "../Constants/Consultation";
import CONSTANT from "../Constants/constant.json";
import { Context } from "./Store";
import categoryContinueArrow from "../Images/category-continue-arrow.png";

import "../Css/Category.css";

const Category = () => {
  const [consultDataState, setConsultDataState] = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const BRAND = process.env.REACT_APP_BRAND.toUpperCase();
  const ASSESSMENT_TYPE = location.state.cardType.toUpperCase();
  const CATEGORIES = CATEGORIES_FOR_ASSESSMENT[BRAND][ASSESSMENT_TYPE];

  useEffect(() => {
    sessionStorage.setItem("consultDataState", JSON.stringify(consultDataState));
  }, [consultDataState]);

  const handleClick = (index) => {
    const category = CATEGORIES[index].toUpperCase();
    setConsultDataState((prevState) => {
      prevState.category = category;
      return prevState;
    });
    console.log("Category", consultDataState);
    navigate("/contactForm", {
      state: {
        categoryType: category,
        brand: BRAND,
        assessmentType: ASSESSMENT_TYPE,
      },
    });
  };

  return (
    <div className="category">
      <div className="category-heading">
        <h1>{CONSTANT.SELECT_CATEGORY}</h1>
      </div>
      <div className="cateorgy-lists">
          {CATEGORIES.map((category, index) => {
            return (
              <div key={index} className="cateorgy-lists-item" onClick={() => handleClick(index)}>
                <li>
                  {category}
                </li>
                <div className="categoryContinueArrow">
                  <img src={categoryContinueArrow} alt="" />
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default Category;
