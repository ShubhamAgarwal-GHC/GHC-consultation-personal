import React, { useState } from "react";
import CONSTANT from "../Constants/constant.json";
import "../Css/ContactForm.css"

function ContactForm() {
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
      console.log(formData);
      // You can replace the console.log with a function that sends the data to a server
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
        <div className="submit">
          <button type="submit">{CONSTANT.Proceed}</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
