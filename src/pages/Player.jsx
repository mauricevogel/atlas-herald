import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlayerCard from '../components/PlayerCard/PlayerCard';
import { fetchPlayer } from '../utils/data';

const Player = () => {
  const { playerName } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      const data = await fetchPlayer(playerName);
      setPlayer(data);
    };

    fetchPlayerData();
  }, [playerName]);

  return (
    <div className="flex flex-col items-center justify-center m-auto max-w-xl">
      {player ? <PlayerCard player={player} /> : null}
    </div>
  );
};

export default Player;
