import React, { useContext } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { CoinContext } from '../../context/CoinContext.jsx';
import { Link } from 'react-router-dom';

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
      <Link to="/">
      <img className='logo' src={logo} alt="CryptoCurrent Logo" />  
      </Link>
      <div className='nav-right'>
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;
