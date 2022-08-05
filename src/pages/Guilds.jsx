import { Center, Loader, Pagination } from '@mantine/core';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GuildTable from '../components/GuildTable/GuildTable';
import { DataContext } from '../context/DataContext';
import { addPositionsToData, filterGuildsData } from '../utils/data';

const Guilds = () => {
  const { scope, scopeValue } = useParams();
  const { guildsData, isLoading } = useContext(DataContext);
  const [guilds, setGuilds] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const data = filterGuildsData(guildsData, scope, scopeValue);
    setGuilds(addPositionsToData(data));
    setPage(1);
  }, [scope, scopeValue, guildsData]);

  const displayedGuilds = () => {
    const leftBoundary = (page - 1) * 25;
    const rightBoundary = page * 25;

    return guilds.slice(leftBoundary, rightBoundary);
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
          <GuildTable guilds={displayedGuilds()} />
          <div className="ml-auto mt-4">
            <Pagination
              page={page}
              siblings={3}
              color="dark"
              total={Math.round(guilds.length / 25)}
              onChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Guilds;
