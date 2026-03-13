import React, { createContext, useState} from 'react';



const CoinContext = createContext();

const CoinContextProvider = (props) => {

    const [allCoins, setAllCoins] = useState([]);

    const contextValue = {}

  return (
    <CoinContext.Provider value={{ contextValue }}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
