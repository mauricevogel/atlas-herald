/**
 * This file includes all utility methods to fetch data from the Atlas API
 */

import { addPositionsToData } from './data';

const API_BASE_URL = 'https://api.atlasfreeshard.com';

export const fetchAllPlayers = async () => {
  const data = await fetchPlayers();

  const dataWithoutStaff = data.filter((player) => {
    return player.realmPoints < 10000000;
  });

  const enrichedData = dataWithoutStaff.map((player) => {
    const kills =
      player.killsAlbionPlayers +
      player.killsMidgardPlayers +
      player.killsHiberniaPlayers;

    const soloKills =
      player.killsAlbionSolo +
      player.killsMidgardSolo +
      player.killsHiberniaSolo;

    const deathBlows =
      player.killsAlbionDeathBlows +
      player.killsMidgardDeathBlows +
      player.killsHiberniaDeathBlows;

    return {
      ...player,
      kills: kills,
      soloKills: soloKills,
      deathBlows: deathBlows,
    };
  });

  return enrichedData;
};

export const fetchAllGuilds = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/guild/getAll`);

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    const sortedData = data.sort((a, b) => {
      return b.realmPoints - a.realmPoints;
    });

    return sortedData;
  } catch (e) {
    console.error(e);
  }
};

export const fetchGuild = async (guildName) => {
  try {
    const guildResponse = await fetch(`${API_BASE_URL}/guild/${guildName}`);
    const membersResponse = await fetch(
      `${API_BASE_URL}/guild/${guildName}/members`
    );

    if (!guildResponse.ok) {
      return null;
    }

    const guildResponseData = await guildResponse.json();
    const membersResponseData = await membersResponse.json();
    membersResponseData.sort((a, b) => {
      return b.realmPoints - a.realmPoints;
    });

    return {
      ...guildResponseData,
      memberList: addPositionsToData(membersResponseData),
    };
  } catch (e) {
    console.error(e);
  }
};

const fetchPlayers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/player/getAll`);

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    const sortedData = data.sort((a, b) => {
      return b.realmPoints - a.realmPoints;
    });

    return sortedData;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const fetchPlayer = async (playerName) => {
  try {
    const playerResponse = await fetch(`${API_BASE_URL}/player/${playerName}`);
    const specResponse = await fetch(
      `${API_BASE_URL}/player/${playerName}/specs`
    );

    if (!playerResponse.ok) {
      return null;
    }

    const playerResponseData = await playerResponse.json();
    const specResponseData = await specResponse.json();

    if (specResponseData) {
      return {
        ...playerResponseData,
        ...specResponseData[0],
      };
    } else {
      return {
        ...playerResponseData,
        specializations: {},
        realmAbilities: {},
      };
    }
  } catch (e) {
    console.error(e);
  }

  return null;
};
