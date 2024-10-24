import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div id="signup-form">
      <i className="bx bxl-pinterest"></i>
      <h1>Unlimited free access to the world's best ideas</h1>
      <span>Sign up to see more</span>
      <div className="email-input">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" />
      </div>
      <div className="password-input">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Password" />
      </div>
      <div className="birthdate-input">
        <label htmlFor="birthdate">Birthdate</label>
        <input type="date" id="birthdate" />
      </div>
      <button>Continue</button>
      <span>OR</span>
      <button id="google-login">
        Continue with Google
        <i className="bx bxl-google"></i>
      </button>
      <p>
        By continuing, you agree to Pinterest's <a href="">Terms of Service</a>{" "}
        and acknowledge you've read our <a href="">Privacy Policy</a>.
      </p>
      <a href="">Notice at collection</a>
      <a href="">Already a member? Login</a>
      <p id="create">Create a free business account</p>
    </div>
  );
};

export default Signup;
