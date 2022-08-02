const API_BASE_URL = 'https://api.atlasfreeshard.com';

export const fetchAllPlayers = async (scope, scopeValue) => {
  const data = await fetchPlayers();

  if (scope && scopeValue) {
    const scopedData = data.filter((player) => {
      return player[scope] === scopeValue;
    });

    return addPositionsToData(scopedData);
  }

  return addPositionsToData(data);
};

export const fetchAllGuilds = async (scope, scopeValue) => {
  const data = await fetchGuilds();

  if (scope && scopeValue) {
    const scopedData = data.filter((guild) => {
      return guild[scope] === scopeValue;
    });

    return addPositionsToData(scopedData);
  }

  return addPositionsToData(data);
};

const fetchGuilds = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/guild/getAll`);
    const data = await response.json();
    const sortedData = data.sort((a, b) => {
      return b.realmPoints - a.realmPoints;
    });

    return sortedData;
  } catch (e) {
    console.error(e);
  }
};

const fetchPlayers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/player/getAll`);
    const data = await response.json();
    const sortedData = data.sort((a, b) => {
      return b.realmPoints - a.realmPoints;
    });

    return sortedData;
  } catch (e) {
    console.error(e);
  }
};

const addPositionsToData = (data) => {
  return data.map((el, idx) => {
    return {
      position: idx,
      ...el,
    };
  });
};
