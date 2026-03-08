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
    </div>
  );
}

export default Home;
