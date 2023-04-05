import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Category from "./Category";
import "../Css/App.css";

function App() {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/category" element={<Category />}></Route>
      </Routes>
    </div>
  );
}

export default App;
