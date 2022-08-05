import { Center, Loader, Pagination, SegmentedControl } from '@mantine/core';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlayerTable from '../components/PlayerTable/PlayerTable';
import { DataContext } from '../context/DataContext';
import { addPositionsToData, filterPlayersData } from '../utils/data';

const SEGMENTS = [
  { label: 'RPs', value: 'realmPoints' },
  { label: 'Kills', value: 'kills' },
  { label: 'Solo Kills', value: 'soloKills' },
  { label: 'DBs', value: 'deathBlows' },
];

const Players = () => {
  const { scope, scopeValue } = useParams();
  const { playersData, isLoading } = useContext(DataContext);
  const [segment, setSegment] = useState('realmPoints');
  const [players, setPlayers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const data = filterPlayersData(playersData, scope, scopeValue);
    setPlayers(addPositionsToData(data));
    setPage(1);
  }, [scope, scopeValue, playersData]);

  useEffect(() => {
    const data = playersData.sort((a, b) => {
      return b[segment] - a[segment];
    });

    setPlayers(addPositionsToData(data));
    setPage(1);
  }, [playersData, segment]);

  const displayedPlayers = () => {
    const leftBoundary = (page - 1) * 25;
    const rightBoundary = page * 25;

    return players.slice(leftBoundary, rightBoundary);
  };

  const segmentLabel = () => {
    return SEGMENTS.find((el) => el.value === segment).label;
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
          <SegmentedControl
            data={SEGMENTS}
            onChange={setSegment}
            className="mb-5"
          />
          <PlayerTable
            players={displayedPlayers()}
            segmentLabel={segmentLabel()}
            segment={segment}
          />
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
