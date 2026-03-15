import React, { useContext, useEffect, useState } from 'react';
import "./Coin.css";
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/coinContext';
import LineChart from '../../components/LineChart/LineChart';

const Coin = () => {
  const { coinid } = useParams();
  const [coindata, setCoinData] = useState();
  const [historicaldata, setHistoricalData] = useState();
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

  const fetchHistoricalData = async () => {
    const options = {
      method: 'GET',
      headers: { 'x-cg-demo-api-key': 'CG-iB3ndzqyX6iMKjmPvHL6ZvQx' }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=${currency}&days=10`, options)
      .then(res => res.json())
      .then(res => setHistoricalData(res))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);

  if (coindata && coindata.image && historicaldata) {
    return (
      <div className='coin'>
        <div className="coin-name">
          <img src={coindata.image.large} alt={coindata.name} />
          <p><br /> {coindata.name} ({coindata.symbol.toUpperCase()})<br /></p>
        </div>
        <div className="coin-chart">
          <LineChart historicalData={historicaldata} />
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