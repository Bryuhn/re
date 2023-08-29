import reCAPTCHA from "react-google-recaptcha"
import React, { useRef } from 'react';

const Form = () =>{
  const captchaRef = useRef(null)
  const token = captchaRef.current.getValue();
  const handleSubmit = (e) =>{
    e.preventDefault();
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
}



  return(
          <form onSubmit={handleSubmit} >
              <label htmlFor="name">Name</label>
                  <input type="text" id="name" className="input"/>
                  <reCAPTCHA
                  sitekey={process.env.REACT_APP_SITE_KEY} 
                  ref={captchaRef}
                  />
              <button>Submit </button>
          </form>
  )
}
export default Form
