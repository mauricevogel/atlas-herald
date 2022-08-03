import { Alert, Center, Loader, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GuildTable from '../components/GuildTable/GuildTable';
import PlayerTable from '../components/PlayerTable/PlayerTable';
import { fetchSearchResults } from '../utils/data';
import { IconAlertCircle } from '@tabler/icons';

const SearchResult = () => {
  let navigate = useNavigate();
  const { searchTerm } = useParams();
  const [searchResults, setSearchReuslts] = useState({
    players: [],
    guilds: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSearchData = async () => {
      setIsLoading(true);
      const data = await fetchSearchResults(searchTerm);

      if (data.players.length === 1 && !data.guilds.length) {
        navigate(`/player/${data.players[0].name}`);
      }

      if (data.guilds.length === 1 && !data.players.length) {
        navigate(`/guild/${data.guilds[0].name}`);
      }

      setSearchReuslts(data);
      setIsLoading(false);
    };
    fetchSearchData();
  }, [searchTerm, navigate]);

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
