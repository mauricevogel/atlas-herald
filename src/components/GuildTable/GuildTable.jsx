import { Table } from '@mantine/core';
import { Link } from 'react-router-dom';

const GuildTable = (props) => {
  const { guilds } = props;

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

  const rows = guilds.map((guild) => (
    <tr
      key={guild.name}
      className={`text-white font-bold ${colorClass(guild.realmID)}`}
    >
      <td>{guild.position}</td>
      <td>{guild.name}</td>
      <td>{guild.members}</td>
      <td>{guild.realmPoints.toLocaleString('en-US')}</td>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr className="font-bold">
          <th>#</th>
          <th>Name</th>
          <th>Members</th>
          <th>RPs</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default GuildTable;
