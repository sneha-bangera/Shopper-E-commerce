import React, { useState } from "react";
import './CSS/LoginSignup.css';

function LoginSignup() {

  const [state,setState] = useState("Sign Up");

    return (
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>{state}</h1>
          <div className="loginsignup-fields">
            {state==="Sign Up"?<input type="text" placeholder="Your Name"/>:<></>}
            <input type="email" placeholder="Email Address"/>
            <input type="password" placeholder="Password"/>
          </div>
          <div className="loginsignup-agree">
            <input type="checkbox"/>
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
          <button>Continue</button>
          {state==="Sign Up"
          ?<p className="loginsignup-login">Already have an account? <span onClick={() => {setState("Login")}}>Login here</span></p>
          :<p className="loginsignup-login">Create an account? <span onClick={() => {setState("Sign Up")}}>Click here</span></p>}
                   
        </div>
      </div>
    )
  }
  export default LoginSignup;