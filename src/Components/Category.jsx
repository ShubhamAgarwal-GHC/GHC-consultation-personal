import React from "react";
import { useLocation } from 'react-router-dom';

const Category = () => {
    const location = useLocation();
    console.log(location.state)
  return (
    <>
      <div>
        category selected
      </div>
    </>
  );
};

export default Category;
