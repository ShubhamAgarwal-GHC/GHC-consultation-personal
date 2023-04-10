import React from "react";
import { Routes, Route } from "react-router-dom";


import "../Css/App.css";
import Store from "./Store";

import LandingPage from "./LandingPage";
import Category from "./Category";
import QuestionsCard from "./QuestionsCard";
import RecommentProduct from "./RecommendProduct"


import ContactForm from "./ContactForm"

function App() {
  return (
      <div className="main-container">
        <Store>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/category" element={<Category />}></Route>
            <Route path="/questions" element={<QuestionsCard />}></Route>
            <Route path="/contactForm" element={<ContactForm />}></Route>
            <Route path="/recommendProduct" element={<RecommentProduct />}></Route>
          </Routes>
        </Store>
      </div>
  );
}

export default App;
