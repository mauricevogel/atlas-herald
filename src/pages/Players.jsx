import { Center, Loader, Pagination } from '@mantine/core';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlayerTable from '../components/PlayerTable/PlayerTable';
import { DataContext } from '../context/DataContext';
import { addPositionsToData, filterPlayersData } from '../utils/data';

const Players = () => {
  const { scope, scopeValue } = useParams();
  const { playersData, isLoading } = useContext(DataContext);
  const [players, setPlayers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const data = filterPlayersData(playersData, scope, scopeValue);
    setPlayers(addPositionsToData(data));
    setPage(1);
  }, [scope, scopeValue, playersData]);

  const displayedPlayers = () => {
    const leftBoundary = (page - 1) * 25;
    const rightBoundary = page * 25;

    return players.slice(leftBoundary, rightBoundary);
  };

  const handlePageChange = (newPage) => {
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
              onChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Players;
