import React, { useEffect } from "react";
import "../Css/LandingPage.css"

import Header from "./Header";
import SelfAssessmentSection from "./SelfAssessmentSection";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-landing-page">
      <Header/>
      <SelfAssessmentSection/>
    </div>
  );
};

export default LandingPage;
