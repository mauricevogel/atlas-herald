import { Table } from '@mantine/core';

const GuildCard = ({ guild }) => {
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

  return (
    <Table className={`text-white table-fixed ${colorClass(guild.realmID)}`}>
      <tbody>
        <tr>
          <td colSpan={2} className="text-center font-bold">
            <p className="text-xl">{guild.name}</p>
          </td>
        </tr>
        <tr>
          <td className="font-bold">Realm Points</td>
          <td>{guild.realmPoints.toLocaleString('en-US')}</td>
        </tr>
        <tr>
          <td className="font-bold">Bounty Points</td>
          <td>{guild.bountyPoints.toLocaleString('en-US')}</td>
        </tr>
        <tr>
          <td className="font-bold">Members</td>
          <td>{guild.members}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default GuildCard;
