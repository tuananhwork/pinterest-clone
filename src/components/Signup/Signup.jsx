import './Signup.css';
import { useState } from 'react';
import { auth } from '../../service/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // You can add additional logic here, such as saving the birthdate to a user profile
      toast.success('Signup successful!');
    } catch (error) {
      toast.error(error.message);
      setError(error.message);
    }
  };

  return (
    <div id="signup-form">
      <i className="bx bxl-pinterest"></i>
      <h1>Unlimited free access to the world&apos;s best ideas</h1>
      <span>Sign up to see more</span>
      <form onSubmit={handleSignup}>
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
        <div className="birthdate-input">
          <label htmlFor="birthdate">Birthdate</label>
          <input type="date" id="birthdate" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} required />
        </div>
        <button type="submit">Continue</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <span>OR</span>
      <button id="google-login">
        Continue with Google
        <i className="bx bxl-google"></i>
      </button>
      <p>
        By continuing, you agree to Pinterest&apos;s <a href="">Terms of Service</a> and acknowledge you&apos;ve read
        our <a href="">Privacy Policy</a>.
      </p>
      <a href="">Notice at collection</a>
      <a href="">Already a member? Login</a>
      <p id="create">Create a free business account</p>
      <ToastContainer />
    </div>
  );
};

export default Signup;
