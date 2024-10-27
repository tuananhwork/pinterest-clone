import './Login.css';
import { useState } from 'react';
import { auth } from '../../service/firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Logged in successfully!');
    } catch (error) {
      toast.error(error.message);
      setError(error.message);
    }
  };

  return (
    <div id="login-form">
      <i className="bx bxl-pinterest"></i>
      <h1>Welcome to Pinterest</h1>
      <form onSubmit={handleLogin}>
        <div className="email-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="password-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <a href="">Forgot your password?</a>
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <span>OR</span>
      <button id="facebook-login">
        Continue with Facebook
        <i className="bx bxl-facebook-circle"></i>
      </button>
      <button id="google-login">
        Continue with Google
        <i className="bx bxl-google"></i>
      </button>
      <p>
        By continuing, you agree to Pinterest&apos;s <a href="">Terms of Service</a> and acknowledge you&apos;ve read
        our <a href="">Privacy Policy</a>.
      </p>
      <a href="">Notice at collection</a>
      <a href="">Not on Pinterest yet? Sign up</a>
      <p>
        Are you a business? <a href="">Get started here</a>
      </p>

      <ToastContainer />
    </div>
  );
};

export default Login;
