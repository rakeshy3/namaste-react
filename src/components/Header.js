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
      <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="w-40">
          <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items flex items-center">
        <ul className='flex p-4 m-4'>
          <l1 className="px-4">Online Status: { onlineStatus ? '✅' : '🔴' } </l1>
          <li className="px-4"> <Link to="/">Home</Link></li>
          <li className="px-4"> <Link to="/about">About Us</Link></li>
          <li className="px-4"> <Link to="/contact">Contact Us</Link></li>
          <li className="px-4"> <Link to="/grocery">Grocery</Link></li>
          <li className="px-4"> <Link to="/cart">Cart</Link></li>
          <button className='login' onClick={ () => setBtnNameReact(!btnNameReact)} >{ !btnNameReact ? 'Login' : 'Logout'}</button>
        </ul>
        </div>
      </div>
    ) 
  }
  export default Header;