import React, { useContext, useEffect, useState } from 'react';
import "./Coin.css";
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext.jsx';
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
    const options = { method: 'GET', headers: { 'x-cg-demo-api-key': 'CG-iB3ndzqyX6iMKjmPvHL6ZvQx' } };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=${currency.name.toLowerCase()}&days=10`, options)
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
          <p>{coindata.name} ({coindata.symbol.toUpperCase()})</p>
        </div>
        <div className="coin-chart">
          <LineChart historicalData={historicaldata} />
        </div>
        <div className="coin-info">
          <ul>
            <li>
              Crypto Market Rank
            </li>
            <li>
              {coindata.market_cap_rank}
            </li>
            </ul>
            <ul>
              <li>
                Price
              </li>
              <li>
                {currency.symbol} {coindata.market_data.current_price[currency.name.toLowerCase()]}
              </li>
            </ul>
            <ul>
              <li>
                Market Cap
              </li>
              <li>
                {currency.symbol} {coindata.market_data.market_cap[currency.name.toLowerCase()]}
              </li>
            </ul>
            <ul>
              <li>
              24 Hour Price high
            </li>
            <li>
              {currency.symbol} {coindata.market_data.high_24h[currency.name.toLowerCase()]}
            </li>
            </ul>
            <ul>
              <li>
                24 Hour Price low
              </li>
              <li>
                {currency.symbol} {coindata.market_data.low_24h[currency.name.toLowerCase()]}
              </li>
            </ul>
          
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