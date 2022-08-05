import { Table } from '@mantine/core';
import { Link } from 'react-router-dom';

const PlayerTable = (props) => {
  const { players, segment, segmentLabel } = props;

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
          to={`/player/${player.name}`}
          className="no-underline text-white hover:text-gray-800"
        >
          {player.name} {player?.lastname}
        </Link>
      </td>
      <td>
        <Link
          to={`/guild/${player.guild}`}
          className="no-underline text-white hover:text-gray-800"
        >
          {player.guild}
        </Link>
      </td>
      <td>
        <Link
          to={`/players/class/${player.class}`}
          className="no-underline text-white hover:text-gray-800"
        >
          {player.class}
        </Link>
      </td>
      <td>{player.race}</td>
      <td>{player.level}</td>
      <td>{player.realmRank}</td>
      <td>{player[segment].toLocaleString('en-US')}</td>
    </tr>
  ));

  const mobileRows = players.map((player) => (
    <tr
      key={player.name}
      className={`text-white ${colorClass(player.realmID)}`}
    >
      <td>{player.position}</td>
      <td>
        <Link
          to={`/player/${player.name}`}
          className="flex flex-col no-underline text-white"
        >
          <span className="font-bold m-0">
            {player.name} {player?.lastname}
          </span>
          {`<${player.guild}>`}
          <br />
          {player.realmRank} {player.race} {player.class}
        </Link>
      </td>
      <td>{player[segment].toLocaleString('en-US')} RPs</td>
    </tr>
  ));

  return (
    <>
      <Table className="hidden lg:table">
        <thead>
          <tr className="font-bold">
            <th>#</th>
            <th>Player</th>
            <th>Guild</th>
            <th>Class</th>
            <th>Race</th>
            <th>Level</th>
            <th>RR</th>
            <th>{segmentLabel}</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <Table className="table lg:hidden">
        <thead>
          <tr className="font-bold">
            <th>#</th>
            <th>Player</th>
            <th>{segmentLabel}</th>
          </tr>
        </thead>
        <tbody>{mobileRows}</tbody>
      </Table>
    </>
  );
};

export default PlayerTable;
