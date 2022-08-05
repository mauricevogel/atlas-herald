import { Alert, Center, Loader, Text } from '@mantine/core';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GuildTable from '../components/GuildTable/GuildTable';
import PlayerTable from '../components/PlayerTable/PlayerTable';
import { getSearchResults } from '../utils/data';
import { IconAlertCircle } from '@tabler/icons';
import { DataContext } from '../context/DataContext';

const SearchResult = () => {
  let navigate = useNavigate();
  const { searchTerm } = useParams();
  const { playersData, guildsData, isLoading } = useContext(DataContext);
  const [searchResults, setSearchReuslts] = useState({
    players: [],
    guilds: [],
  });

  useEffect(() => {
    const { players, guilds } = getSearchResults(
      playersData,
      guildsData,
      searchTerm
    );

    if (players.length === 1 && !guilds.length) {
      navigate(`/player/${players[0].name}`);
    }

    if (guilds.length === 1 && !players.length) {
      navigate(`/guild/${guilds[0].name}`);
    }

    setSearchReuslts({ players, guilds });
  }, [searchTerm, navigate, playersData, guildsData]);

  return (
    <>
      <div className="flex flex-col items-center justify-center m-auto max-w-6xl">
        {isLoading ? (
          <Center>
            <Loader color="gray" className="mt-20" />
          </Center>
        ) : (
          <>
            <Alert
              icon={<IconAlertCircle size={16} />}
              color="indigo"
              radius="md"
              className="w-full text-md"
            >
              The search will only return the top 15 results per category. If
              you're looking for a more specific result, please refine your
              search.
            </Alert>
            <Text className="text-2xl font-bold my-4">Players</Text>
            <PlayerTable players={searchResults.players} />
            <Text className="text-2xl font-bold my-4">Guilds</Text>
            <GuildTable guilds={searchResults.guilds} />
          </>
        )}
      </div>
    </>
  );
};

export default SearchResult;
