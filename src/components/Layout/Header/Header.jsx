import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Login from '../../Login/Login';
import Signup from '../../Signup/Signup';
import { useState, useEffect } from 'react';
import { auth } from '../../../service/firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = ({ search = true, nav = false }) => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  console.log(user);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Logged out successfully');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <div className="header">
      <div className="left">
        <Link to="/">
          <div className="logo-box">
            <box-icon type="logo" name="pinterest" color="#B60000" size="md"></box-icon>
            <span>Pinterest</span>
          </div>
        </Link>
        <Link to="/videos" className={location.pathname === '/videos' ? 'active' : ''}>
          Watch
        </Link>
        <Link to="/ideas" className={location.pathname === '/ideas' ? 'active' : ''}>
          Explore
        </Link>
      </div>
      {search ? (
        <div className="searchbox">
          <div className="search-container">
            <i className="bx bx-search"></i>
            <input type="text" placeholder="Search" />
          </div>
        </div>
      ) : (
        ''
      )}
      <div className="right">
        {nav ? (
          <div className="navigate">
            <a href="https://help.pinterest.com/en/guide/all-about-pinterest" target="_blank" rel="noopener noreferrer">
              About
            </a>
            <a href="https://business.pinterest.com/en-in/" target="_blank" rel="noopener noreferrer">
              Business
            </a>
            <a href="https://newsroom.pinterest.com/" target="_blank" rel="noopener noreferrer">
              Blog
            </a>
          </div>
        ) : (
          ''
        )}
        <div className="account">
          {user ? (
            <>
              <span>{user.displayName || (user.email ? user.email.split('@')[0] : '')}</span>
              <button onClick={handleLogout}>Log out</button>
            </>
          ) : (
            <>
              <Popup
                trigger={<button id="login-btn">Log in</button>}
                modal
                nested
                style={{
                  background: 'transparent',
                  width: 'unset',
                  padding: 0,
                  border: 'none',
                }}
              >
                {() => <Login />}
              </Popup>

              <Popup
                trigger={<button id="signup-btn">Sign up</button>}
                modal
                nested
                style={{
                  background: 'transparent',
                  width: 'unset',
                  padding: 0,
                  border: 'none',
                }}
              >
                {() => <Signup />}
              </Popup>
            </>
          )}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Header;
