import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GuildCard from '../components/GuildCard/GuildCard';
import PlayerTable from '../components/PlayerTable/PlayerTable';
import { fetchGuild } from '../utils/data';

const Guild = () => {
  const { guildName } = useParams();
  const [guild, setGuild] = useState(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      const data = await fetchGuild(guildName);
      setGuild(data);
    };

    fetchPlayerData();
  }, [guildName]);

  return (
    <>
      <div className="flex flex-col items-center justify-center m-auto max-w-xl mb-6">
        {guild ? <GuildCard guild={guild} /> : null}
      </div>
      <div className="flex flex-col items-center justify-center m-auto max-w-6xl">
        {guild ? <PlayerTable players={guild.memberList} /> : null}
      </div>
    </>
  );
};

export default Guild;
