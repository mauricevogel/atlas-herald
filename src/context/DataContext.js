import { createContext, useEffect, useState } from 'react';
import { fetchAllGuilds, fetchAllPlayers } from '../utils/api';

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [playersData, setPlayersData] = useState([]);
  const [guildsData, setGuildsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const playersData = await fetchAllPlayers(null, null);
      const guildsData = await fetchAllGuilds(null, null);

      setPlayersData(playersData);
      setGuildsData(guildsData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        playersData: playersData,
        guildsData: guildsData,
        isLoading: isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
