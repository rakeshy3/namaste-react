import { useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
  const [btnNameReact, setBtnNameReact]= useState(false);
  const onlineStatus = useOnlineStatus();
  console.log('Header rendred')
// If no dependency array => useEffect is called on every render
// If dependency array is empty = [] => useEffect is called on initial render (just once)
// if dependency array is [btnNameReact] => then useEffect is called every time when btnNameReact is changed

  useEffect(() => {
    console.log('useEffect called')
  }, [btnNameReact])

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
        <ul>
          <l1>Online Status: { onlineStatus ? '✅' : '🔴' } </l1>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/about">About Us</Link></li>
          <li> <Link to="/contact">Contact Us</Link></li>
          <li> <Link to="/cart">Cart</Link></li>
          <button className='login' onClick={ () => setBtnNameReact(!btnNameReact)} >{ !btnNameReact ? 'Login' : 'Logout'}</button>
        </ul>
        </div>
      </div>
    ) 
  }
  export default Header;