import React, { useContext, useEffect, useState } from 'react';
import "./Coin.css";
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/coinContext';

const Coin = () => {
  const { coinid } = useParams();
  const [coindata, setCoinData] = useState(); 
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = { 
      method: 'GET', 
      headers: { 'x-cg-demo-api-key': 'CG-iB3ndzqyX6iMKjmPvHL6ZvQx' } 
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinid}`, options)
      .then(res => res.json())
      .then(res => setCoinData(res))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchCoinData();
  }, [currency]);

  if (coindata && coindata.image) {
    return (
      <div className='coin'>
        <div className="coin-name">
          <img src={coindata.image.large} alt={coindata.name} />
          <p><br /> {coindata.name} ({coindata.symbol.toUpperCase()})<br /></p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
}

export default Coin;