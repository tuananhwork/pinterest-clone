import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div id="login-form">
      <i className="bx bxl-pinterest"></i>
      <h1>Welcome to Pinterest</h1>
      <div className="email-input">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" />
      </div>
      <div className="password-input">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Password" />
      </div>
      <a href="">Forgot your password?</a>
      <button>Login</button>
      <span>OR</span>
      <button id="facebook-login">
        Continue with Facebook
        <i class="bx bxl-facebook-circle"></i>
      </button>
      <button id="google-login">
        Continue with Google
        <i className="bx bxl-google"></i>
      </button>
      <p>
        By continuing, you agree to Pinterest's <a href="">Terms of Service</a>{" "}
        and acknowledge you've read our <a href="">Privacy Policy</a>.
      </p>
      <a href="">Notice at collection</a>
      <a href="">Not on Pinterest yet? Sign up</a>
      <p>
        Are you a business? <a href="">Get started here</a>
      </p>
    </div>
  );
};

export default Login;
