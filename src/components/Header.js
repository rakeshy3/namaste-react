import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
const Header = () => {
  const [btnNameReact, setBtnNameReact]= useState(false);
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className='login' onClick={ () => setBtnNameReact(!btnNameReact)} >{ !btnNameReact ? 'Login' : 'Logout'}</button>
        </ul>
        </div>
      </div>
    ) 
  }
  export default Header;