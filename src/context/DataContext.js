import moment from 'moment';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllGuilds, fetchAllPlayers } from '../utils/api';

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  let navigate = useNavigate();
  const [playersData, setPlayersData] = useState([]);
  const [guildsData, setGuildsData] = useState([]);
  const [lastRefresh, setLastRefresh] = useState(null);
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

    if (
      !lastRefresh ||
      moment(lastRefresh).isBefore(moment().subtract(5, 'minutes'))
    ) {
      fetchData();
      setLastRefresh(Date.now());
    }
  }, [navigate, lastRefresh]);

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
