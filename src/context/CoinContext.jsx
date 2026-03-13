import React, { createContext, useEffect, useState } from 'react';



const CoinContext = createContext();

const CoinContextProvider = (props) => {

    const [allCoins, setAllCoins] = useState([]);
    const [currency, setCurrency] = useState({
        name: "USD",
        symbol: "$"
    });

    const fetchAllCoin = async () => {
        const options = { method: 'GET', headers: { 'x-cg-demo-api-key': 'CG-iB3ndzqyX6iMKjmPvHL6ZvQx' } };

        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name.toLowerCase()}`, options)
            .then(res => res.json())
            .then(res => setAllCoins(Response))
            .catch(err => console.error(err));
    }
    useEffect(() => {
        fetchAllCoin();
    }, [currency])
    const contextValue = {
        allCoins,
        currency,
        setCurrency
    }

    return (
        <CoinContext.Provider value={{ contextValue }}>
            {props.children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;
