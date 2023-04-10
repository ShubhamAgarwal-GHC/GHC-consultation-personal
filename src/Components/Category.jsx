import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CATEGORIES_FOR_ASSESSMENT } from "../Constants/Consultation";
import CONSTANT from "../Constants/constant.json";
import { Context } from "./Store";

import "../Css/Category.css";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [consultDataState, setConsultDataState] = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const BRAND = process.env.REACT_APP_BRAND.toUpperCase();
  const ASSESSMENT_TYPE = location.state.cardType.toUpperCase();
  const CATEGORIES = CATEGORIES_FOR_ASSESSMENT[BRAND][ASSESSMENT_TYPE];

  useEffect(() => {
    console.log('selectedCategory:', selectedCategory);
  }, [selectedCategory]);


  const handleClick = (index) => {
    setSelectedCategory(index);
  };

  const handleContinue = () => {
    const category = CATEGORIES[selectedCategory].toUpperCase();
    setConsultDataState((prevState) => {
      prevState.category = category;
      return prevState;
    });
    console.log("Category", consultDataState);
    navigate("/questions", {
      state: {
        categoryType: category,
        brand: BRAND,
        assessmentType: ASSESSMENT_TYPE,
      },
    });
  }

  return (
    <>
      <div className="category-heading">{CONSTANT.SELECT_CATEGORY}</div>
      <div className="category-container">
        <div className="cateorgy-lists">
          {CATEGORIES.map((category, index) => {
            return (
              <li
              className={selectedCategory === index ? 'selected' : ''}
                key={index}
                onClick={() => handleClick(index)}
              >
                {category}
              </li>
            );
          })}
        </div>
      </div>
      <div className="button-category">
      <button className="btn" onClick={() => handleContinue()}>Continue</button>
      </div>
    </>
  );
};

export default Category;
