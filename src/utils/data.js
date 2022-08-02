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

export const classListForSelector = [
  { value: 'Armsman', label: 'Armsman', group: 'Albion' },
  { value: 'Cabalist', label: 'Reaver', group: 'Albion' },
  { value: 'Cleric', label: 'Cleric', group: 'Albion' },
  { value: 'Friar', label: 'Friar', group: 'Albion' },
  { value: 'Infiltrator', label: 'Cleric', group: 'Albion' },
  { value: 'Mercenary', label: 'Mercenary', group: 'Albion' },
  { value: 'Minstrel', label: 'Minstrel', group: 'Albion' },
  { value: 'Necromancer', label: 'Necromancer', group: 'Albion' },
  { value: 'Paladin', label: 'Paladin', group: 'Albion' },
  { value: 'Reaver', label: 'Reaver', group: 'Albion' },
  { value: 'Scout', label: 'Scout', group: 'Albion' },
  { value: 'Sorcerer', label: 'Sorcerer', group: 'Albion' },
  { value: 'Theurgist', label: 'Theurgist', group: 'Albion' },
  { value: 'Wizard', label: 'Wizard', group: 'Albion' },
  { value: 'Animist', label: 'Animist', group: 'Hibernia' },
  { value: 'Bard', label: 'Bard', group: 'Hibernia' },
  { value: 'Blademaster', label: 'Blademaster', group: 'Hibernia' },
  { value: 'Champion', label: 'Champion', group: 'Hibernia' },
  { value: 'Druid', label: 'Druid', group: 'Hibernia' },
  { value: 'Eldritch', label: 'Eldritch', group: 'Hibernia' },
  { value: 'Enchanter', label: 'Enchanter', group: 'Hibernia' },
  { value: 'Hero', label: 'Hero', group: 'Hibernia' },
  { value: 'Mentalist', label: 'Mentalist', group: 'Hibernia' },
  { value: 'Nightshade', label: 'Nightshade', group: 'Hibernia' },
  { value: 'Ranger', label: 'Ranger', group: 'Hibernia' },
  { value: 'Valewalker', label: 'Valewalker', group: 'Hibernia' },
  { value: 'Warden', label: 'Warden', group: 'Hibernia' },
  { value: 'Beserker', label: 'Beserker', group: 'Midgard' },
  { value: 'Bonedancer', label: 'Bonedancer', group: 'Midgard' },
  { value: 'Healer', label: 'Healer', group: 'Midgard' },
  { value: 'Hunter', label: 'Hunter', group: 'Midgard' },
  { value: 'Runemaster', label: 'Runemaster', group: 'Midgard' },
  { value: 'Savage', label: 'Savage', group: 'Midgard' },
  { value: 'Shadowblade', label: 'Shadowblade', group: 'Midgard' },
  { value: 'Shaman', label: 'Shaman', group: 'Midgard' },
  { value: 'Skald', label: 'Skald', group: 'Midgard' },
  { value: 'Spiritmaster', label: 'Spiritmaster', group: 'Midgard' },
  { value: 'Thane', label: 'Thane', group: 'Midgard' },
  { value: 'Warrior', label: 'Warrior', group: 'Midgard' },
];
