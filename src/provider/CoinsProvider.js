/* istambul ignore file */
import {
  createContext, useContext, useEffect, useState,
} from 'react';
import axios from 'axios';

const coinsContext = createContext();

export const CoinsProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);

  const getCoins = async () => {
    try {
      const { data } = await axios('https://data.messari.io/api/v2/assets?limit=5');
      setCoins(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCoins();
  }, []);

  return (
    <coinsContext.Provider value={coins}>
        {children}
    </coinsContext.Provider>
  );
};
export const useCoinsContext = () => {
  return useContext(coinsContext);
};
