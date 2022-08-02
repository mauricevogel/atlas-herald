import { Center, Loader, Pagination } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlayerTable from '../components/PlayerTable/PlayerTable';
import { fetchAllPlayers } from '../utils/data';

const Players = () => {
  const { scope, scopeValue } = useParams();
  const [players, setPlayers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPlayerData = async () => {
      setIsLoading(true);
      const data = await fetchAllPlayers(scope, scopeValue);
      setPlayers(data);
      setIsLoading(false);
    };

    fetchPlayerData();
    setPage(1);
  }, [scope, scopeValue]);

  const displayedPlayers = () => {
    const leftBoundary = (page - 1) * 25;
    const rightBoundary = page * 25;

    return players.slice(leftBoundary, rightBoundary);
  };

  const handlePagechange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="flex flex-col items-center justify-center m-auto max-w-6xl">
      {isLoading ? (
        <Center>
          <Loader color="gray" className="mt-20" />
        </Center>
      ) : (
        <>
          <PlayerTable players={displayedPlayers()} />
          <div className="ml-auto mt-4">
            <Pagination
              page={page}
              siblings={3}
              color="dark"
              total={Math.round(players.length / 25)}
              onChange={handlePagechange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Players;
