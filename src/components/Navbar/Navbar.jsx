import React, { useContext } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from '../../context/CoinContext';

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext);
  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd":
        setCurrency({ name: "USD", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "EUR", symbol: "€" });
        break;
      case "inr":
        setCurrency({ name: "INR", symbol: "₹" });
        break;
      default:
        setCurrency({ name: "USD", symbol: "$" });
    }
  }
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt="CryptoCurrent Logo" />  
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className='nav-right'>
        <select onChange={(e) => setCurrency(e.target.value)}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>Sign Up <img src={arrow_icon} alt="" /></button>
      </div>
    </div>
  );
}

export default Navbar;
