export const getSearchResults = (players, guilds, searchTerm) => {
  const filteredPlayers = players.filter((player) => {
    return (
      player.name.toLowerCase().startsWith(searchTerm.toLowerCase()) &&
      player.realmPoints < 10000000
    );
  });

  const filteredGuilds = guilds.filter((guild) => {
    return guild.name.toLowerCase().startsWith(searchTerm.toLowerCase());
  });

  return {
    players: addPositionsToData(filteredPlayers.slice(0, 15)),
    guilds: addPositionsToData(filteredGuilds.slice(0, 15)),
  };
};

export const filterPlayersData = (playersData, scope, scopeValue) => {
  if (scope && scopeValue) {
    const scopedData = playersData.filter((player) => {
      return player[scope] === scopeValue && player.realmPoints < 10000000;
    });

    return scopedData;
  } else {
    return playersData;
  }
};

export const filterGuildsData = (guildsData, scope, scopeValue) => {
  if (scope && scopeValue) {
    const scopedData = guildsData.filter((guild) => {
      return guild[scope] === scopeValue;
    });

    return scopedData;
  } else {
    return guildsData;
  }
};

export const addPositionsToData = (data) => {
  return data.map((el, idx) => {
    return {
      position: idx + 1,
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
  { value: 'Berserker', label: 'Berserker', group: 'Midgard' },
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
