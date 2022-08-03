import { Divider, Input, Navbar, Select } from '@mantine/core';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { classListForSelector } from '../../utils/data';

const AppNavbar = () => {
  let navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleClassSelect = (value) => {
    navigate(`/players/class/${value}`);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (searchTerm && searchTerm !== '') {
      navigate(`/search/${searchTerm}`);
    }

    setSearchTerm('');
  };

  return (
    <Navbar p="xs" className="max-w-[225px] hidden lg:block">
      <Navbar.Section mt="xs" className="m-4">
        <Link to="/" className="text-black no-underline">
          <h1 className="m-0 text-2xl">Atlas Herald</h1>
          <p className="m-0 text-xs">by Xedie</p>
        </Link>
      </Navbar.Section>
      <Divider />
      <Navbar.Section mt="md" className="mx-4">
        <p className="font-bold text-lg">Search</p>
        <form onSubmit={handleSearchSubmit}>
          <Input
            placeholder="Search players/guilds"
            onChange={(event) => setSearchTerm(event.currentTarget.value)}
            value={searchTerm}
          ></Input>
        </form>
      </Navbar.Section>
      <Navbar.Section mt="md" className="mx-4">
        <p className="font-bold text-lg">Players</p>
        <Link to="/players" className="text-black no-underline">
          <p>All</p>
        </Link>
        <Link to="/players/realm/Albion" className="text-black no-underline">
          <p>Albion</p>
        </Link>
        <Link to="/players/realm/Midgard" className="text-black no-underline">
          <p>Midgard</p>
        </Link>
        <Link to="/players/realm/Hibernia" className="text-black no-underline">
          <p>Hibernia</p>
        </Link>
      </Navbar.Section>
      <Navbar.Section className="mx-4">
        <p className="font-bold text-lg">Guilds</p>
        <Link to="/guilds" className="text-black no-underline">
          <p>All</p>
        </Link>
        <Link to="/guilds/realm/Albion" className="text-black no-underline">
          <p>Albion</p>
        </Link>
        <Link to="/guilds/realm/Midgard" className="text-black no-underline">
          <p>Midgard</p>
        </Link>
        <Link to="/guilds/realm/Hibernia" className="text-black no-underline">
          <p>Hibernia</p>
        </Link>
      </Navbar.Section>
      <Navbar.Section className="mx-4">
        <p className="font-bold text-lg">Classes</p>
        <Select
          placeholder="Select class"
          searchable
          data={classListForSelector}
          maxDropdownHeight={200}
          onChange={handleClassSelect}
        />
      </Navbar.Section>
    </Navbar>
  );
};

export default AppNavbar;
