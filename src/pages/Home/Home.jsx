import React, { useEffect, useState } from 'react';
import "./Home.css";
import { useContext } from 'react';
import { CoinContext } from '../../context/CoinContext';

const Home = () => {

  const {allCoins, currency} = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoins);
  }, [allCoins]);
  

  return (
    <div className='home'>
      <div className="hero">
        <h1>Largest <br/> Cryptocurrency Marketplace</h1>
        <p>Welcome to the world's largest Cryptocurrency Marketplace. Sign up to explore more about thousands of cryptocurrencies.</p>
        <form>
          <input type="text" placeholder='Search crypto' />
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24h Price Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>
        {
          displayCoin?.slice(0, 10).map((item, index) => (
            <div className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt={item.name} />
                <p>{item.name + " - " + item.symbol}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
