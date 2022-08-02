import { Table } from '@mantine/core';
import { Link } from 'react-router-dom';

const PlayerCard = ({ player }) => {
  const colorClass = (realmID) => {
    switch (realmID) {
      case 1:
        return 'bg-red-800';
      case 2:
        return 'bg-blue-900';
      case 3:
        return 'bg-green-800';
      default:
        return '';
    }
  };

  const deathblows = () => {
    return (
      player.killsAlbionDeathBlows +
      player.killsMidgardDeathBlows +
      player.killsHiberniaDeathBlows
    );
  };

  const totalKills = () => {
    return (
      player.killsAlbionPlayers +
      player.killsMidgardPlayers +
      player.killsHiberniaPlayers
    );
  };

  const soloKills = () => {
    return (
      player.killsAlbionSolo +
      player.killsMidgardSolo +
      player.killsHiberniaSolo
    );
  };

  return (
    <Table className={`text-white table-fixed ${colorClass(player.realmID)}`}>
      <tbody>
        <tr>
          <td colSpan={2} className="text-center font-bold">
            <p className="text-xl">{player.name}</p>
          </td>
        </tr>
        <tr>
          <td className="font-bold">Guild</td>
          <td>
            <Link
              to={`/guild/${player.guild}`}
              className="no-underline text-white hover:text-gray-800 font-bold"
            >
              {player.guild}
            </Link>
          </td>
        </tr>
        <tr>
          <td className="font-bold">Class</td>
          <td>
            <Link
              to={`/players/class/${player.class}`}
              className="no-underline text-white hover:text-gray-800 font-bold"
            >
              {player.class}
            </Link>
          </td>
        </tr>
        <tr>
          <td className="font-bold">Race</td>
          <td>{player.race}</td>
        </tr>
        <tr>
          <td className="font-bold">Level</td>
          <td>{player.level}</td>
        </tr>
        <tr>
          <td className="font-bold">Realm Rank</td>
          <td>{player.realmRank}</td>
        </tr>
        <tr>
          <td className="font-bold">Realm Points</td>
          <td>{player.realmPoints.toLocaleString('en-US')}</td>
        </tr>
        <tr>
          <td className="font-bold">Total Kills</td>
          <td>{totalKills().toLocaleString('en-US')}</td>
        </tr>
        <tr>
          <td className="font-bold">Total Deathblows</td>
          <td>{deathblows().toLocaleString('en-US')}</td>
        </tr>
        <tr>
          <td className="font-bold">Solo Kills</td>
          <td>{soloKills().toLocaleString('en-US')}</td>
        </tr>
        <tr>
          <td className="font-bold">PVP Deaths</td>
          <td>{player.pvpDeaths.toLocaleString('en-US')}</td>
        </tr>
        <tr>
          <td className="font-bold">Spec</td>
          <td>
            <ul className="list-none p-0">
              {Object.entries(player.specializations).map((entry) => {
                return (
                  <li key={entry[0]}>
                    {entry[1]} {entry[0]}
                  </li>
                );
              })}
            </ul>
          </td>
        </tr>
        <tr>
          <td className="font-bold">Realm Abilities</td>
          <td>
            <ul className="list-none p-0">
              {Object.entries(player.realmAbilities).map((entry) => {
                return (
                  <li key={entry[0]}>
                    {entry[0].replace('AtlasOF_', '')} {entry[1]}
                  </li>
                );
              })}
            </ul>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default PlayerCard;
