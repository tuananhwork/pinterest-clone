import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Login from '../../Login/Login'

const Header = () => {
  return (
    <div className='header'>
      <div className="left">
        <Link to="/">
            <div className="logo-box">
            <i className='bx bxl-pinterest'></i>
            <span>Pinterest</span>
            </div></Link>
        <Link to="/videos">Watch</Link>
        <Link to="/ideas">Explore</Link>
      </div>
      <div className="right">
        <div className="navigate">
          <a href="https://help.pinterest.com/en/guide/all-about-pinterest" target="_blank" rel="noopener noreferrer">About</a>
          <a href="https://business.pinterest.com/en-in/" target="_blank" rel="noopener noreferrer">Business</a>
          <a href="https://newsroom.pinterest.com/" target="_blank" rel="noopener noreferrer">Blog</a>
        </div>
        <div className="account">
          <Popup
            trigger={<button id='login-btn'>Log in</button>} modal nested
            style={{
              background: 'transparent',
              width: 'unset',
              padding: 0,
              border: 'none',
            }}
          >
            {
              close => (
                <Login />
              )
            }
          </Popup>
          
          <Popup
          trigger={<button id='signup-btn'>Sign up</button>} modal nested
          >

          </Popup>
        </div>
      </div>
    </div>
  );
}

export default Header;
