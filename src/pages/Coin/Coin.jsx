import React from 'react';
import "./Coin.css";
import { useParams } from 'react-router-dom';
const Coin = () => {
  const { coinid } = useParams();
  return (
    <div>
      <h2>Coin : {coinid}</h2>
    </div>
  );
}

export default Coin;
