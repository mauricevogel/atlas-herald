import { Table } from '@mantine/core';
import { Link } from 'react-router-dom';

const PlayerTable = (props) => {
  const { players } = props;

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

  const rows = players.map((player) => (
    <tr
      key={player.name}
      className={`text-white font-bold ${colorClass(player.realmID)}`}
    >
      <td>{player.position}</td>
      <td>
        <Link
          to={`/players/${player.name}`}
          className="no-underline text-white"
        >
          {player.name} {player?.lastName}
        </Link>
      </td>
      <td>{player.guild}</td>
      <td>
        <Link
          to={`/players/class/${player.class}`}
          className="no-underline text-white"
        >
          {player.class}
        </Link>
      </td>
      <td>{player.race}</td>
      <td>{player.level}</td>
      <td>{player.realmRank}</td>
      <td>{player.realmPoints.toLocaleString('en-US')}</td>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr className="font-bold">
          <th>#</th>
          <th>Player</th>
          <th>Guild</th>
          <th>Class</th>
          <th>Race</th>
          <th>Level</th>
          <th>RR</th>
          <th>RPs</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default PlayerTable;
