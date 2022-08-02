import { Center, Loader, Pagination } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GuildTable from '../components/GuildTable/GuildTable';
import { fetchAllGuilds } from '../utils/data';

const Guilds = () => {
  const { scope, scopeValue } = useParams();
  const [guilds, setGuilds] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGuildData = async () => {
      setIsLoading(true);
      const data = await fetchAllGuilds(scope, scopeValue);
      setGuilds(data);
      setIsLoading(false);
    };

    fetchGuildData();
    setPage(1);
  }, [scope, scopeValue]);

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
