import React from "react";
import Header from "./Header";
import SelfAssessmentSection from "./SelfAssessmentSection";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header/>
      <SelfAssessmentSection/>
    </>
  );
};

export default LandingPage;
