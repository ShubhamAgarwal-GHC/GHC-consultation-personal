import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "./Store";
import CONSTANT from "../Constants/constant.json";
import "../Css/ContactForm.css"

const ContactForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [consultDataState, setConsultDataState] = useContext(Context);

  useEffect(() => {
    setConsultDataState((previuosState) => {
      previuosState.user_survey = [];
      return previuosState;
    })
    sessionStorage.setItem("consultDataState", JSON.stringify(consultDataState));
    sessionStorage.setItem("currentPageIndex", JSON.stringify(0));
  }, [consultDataState,setConsultDataState]);


  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // You can replace the console.log with a function that sends the data to a server
      console.log("formData",formData);
      setConsultDataState((prevState) => {
        prevState.firstName = formData.name;
        prevState.phone = formData.phone;
        return prevState;
      });
      sessionStorage.setItem("consultDataState", JSON.stringify(consultDataState));

      if(consultDataState["consultation_type"] === "short") {
        navigate("/questions", {
          state: location.state,
        });
      } else{
        navigate("/freeConsultation", {
          state: location.state,
        });
      }




      
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (!formData.phone) {
      isValid = false;
      errors["phone"] = "Please enter your phone number.";
    } else if (!/^\d{10}$/i.test(formData.phone)) {
      isValid = false;
      errors["phone"] = "Please enter a valid phone number.";
    } 

    setErrors(errors);
    return isValid;
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="fillUpTheDetails">
          <h1>{CONSTANT.FillUpTheDetailsBelow}</h1>
        </div>
        <div className="name">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
        </div>
        <div className="phone">
          <label>
            Phone Number
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </label>
        </div>
        <div className="submit-form">
          <button type="submit">{CONSTANT.Proceed}</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
