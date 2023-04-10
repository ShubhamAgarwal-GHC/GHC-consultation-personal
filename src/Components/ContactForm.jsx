import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from "./Store"

function ContactForm() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [consultDataState, setConsultDataState] = useContext(Context);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateName() && validatePhone()) {
      console.log(`Submitting form with name: ${firstName} ${lastName} and phone: ${phone}`);

      setConsultDataState((prevState) => {
        prevState.firstName = firstName;
        prevState.lastName = lastName;
        prevState.phone = phone;
        return prevState;
      });
      setFirstName("");
      setLastName("");
      setPhone("");
      console.log("ContactForm", consultDataState);
      navigate("/recommendProduct", { state: { } });

    }
  };

  const validateName = () => {
    if (!firstName) {
      setFirstNameError('First name is required');
      return false;
    }

    if (!lastName) {
      setLastNameError('Last name is required');
      return false;
    }
    setFirstNameError('');
    setLastNameError('');
      return true;
  };

  const validatePhone = () => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phone) {
      setPhoneError('Phone number is required');
      return false;
    } else if (!phoneRegex.test(phone)) {
      setPhoneError('Invalid phone number');
      return false;
    } else {
      setPhoneError('');
      return true;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        FirstName:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        {firstNameError && <span style={{ color: 'red' }}>{firstNameError}</span>}
      </label>
      <label>
        LastName:
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        {lastNameError && <span style={{ color: 'red' }}>{lastNameError}</span>}
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        {phoneError && <span style={{ color: 'red' }}>{phoneError}</span>}
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
