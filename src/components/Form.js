import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import img2 from "../images/img-2.svg";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="formheader">
        <h1 className="feedbackheader">Contact Us</h1>
      </div>
      <div id="contact" className="form-container">
        <div className="form-content-left">
          <img className="form-img" src={img2} alt="spaceship" />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
