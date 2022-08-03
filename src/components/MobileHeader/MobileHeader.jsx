import {
  Burger,
  Button,
  Divider,
  Drawer,
  Header,
  Input,
  Select,
  Text,
  Title,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { classListForSelector } from '../../utils/data';

const MobileHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    closeDrawer();
  }, [location]);

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

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
    <>
      <Drawer
        opened={open}
        size="md"
        position="right"
        closeOnClickOutside={true}
        withCloseButton={false}
        onClose={closeDrawer}
        className="block lg:hidden overflow-y-scroll h-screen"
      >
        <div className="flex flex-col items-center py-4">
          <Title>Atlas Herald</Title>
          <Text size="xs">by Xedie</Text>
        </div>
        <Divider />
        <div className="flex flex-col px-10 py-5">
          <Text size="xl" className="font-bold">
            Search
          </Text>
          <form onSubmit={handleSearchSubmit} tabIndex={0}>
            <Input
              placeholder="Search players/guilds"
              onChange={(event) => setSearchTerm(event.currentTarget.value)}
            ></Input>
            <Button type="submit" size="xs" color="dark" className="mt-2">
              Search
            </Button>
          </form>
        </div>
        <div className="flex flex-col px-10 gap-1">
          <Text size="xl" className="font-bold">
            Players
          </Text>
          <Link to="/players" className="text-black no-underline">
            <Text size="lg">All</Text>
          </Link>
          <Link to="/players/realm/Albion" className="text-black no-underline">
            <Text size="lg">Albion</Text>
          </Link>
          <Link to="/players/realm/Midgard" className="text-black no-underline">
            <Text size="lg">Midgard</Text>
          </Link>
          <Link
            to="/players/realm/Hibernia"
            className="text-black no-underline"
          >
            <Text size="lg">Hibernia</Text>
          </Link>
        </div>
        <div className="flex flex-col px-10 gap-1">
          <Text size="xl" className="font-bold">
            Guilds
          </Text>
          <Link to="/guilds" className="text-black no-underline">
            <Text size="lg">All</Text>
          </Link>
          <Link to="/guilds/realm/Albion" className="text-black no-underline">
            <Text size="lg">Albion</Text>
          </Link>
          <Link to="/guilds/realm/Midgard" className="text-black no-underline">
            <Text size="lg">Midgard</Text>
          </Link>
          <Link to="/guilds/realm/Hibernia" className="text-black no-underline">
            <Text size="lg">Hibernia</Text>
          </Link>
        </div>
        <div className="flex flex-col pt-6 px-10 gap-1">
          <Text size="xl" className="font-bold">
            Classes
          </Text>
          <Select
            placeholder="Select class"
            searchable
            data={classListForSelector}
            maxDropdownHeight={200}
            onChange={handleClassSelect}
          />
        </div>
        <div className="flex flex-col py-6 px-10 items-center">
          <Button color="dark" onClick={closeDrawer}>
            Close
          </Button>
        </div>
      </Drawer>
      <Header className="block lg:hidden">
        <div className="flex items-center mx-4">
          <h1 className="my-3">Atlas Herald</h1>
          <Burger opened={open} onClick={openDrawer} className="ml-auto" />
        </div>
      </Header>
    </>
  );
};

export default MobileHeader;
