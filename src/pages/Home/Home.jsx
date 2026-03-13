import React from 'react';
import "./Home.css";

const Home = () => {
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
      </div>
    </div>
  );
}

export default Home;
