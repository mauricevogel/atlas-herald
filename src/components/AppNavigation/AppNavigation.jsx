import { AppShell, Divider, Navbar } from '@mantine/core';
import { Link } from 'react-router-dom';

const AppNavigation = ({ children }) => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 200 }} p="xs">
          <Navbar.Section mt="xs" className="m-4">
            <Link to="/" className="text-black no-underline">
              <h1 className="m-0 text-2xl">Atlas Herald</h1>
              <p className="m-0 text-xs">by Xedie</p>
            </Link>
          </Navbar.Section>
          <Divider />
          <Navbar.Section mt="md" className="mx-4">
            <p className="font-bold text-lg">Players</p>
            <Link to="/players" className="text-black no-underline">
              <p>All</p>
            </Link>
            <Link
              to="/players/realm/Albion"
              className="text-black no-underline"
            >
              <p>Albion</p>
            </Link>
            <Link
              to="/players/realm/Midgard"
              className="text-black no-underline"
            >
              <p>Midgard</p>
            </Link>
            <Link
              to="/players/realm/Hibernia"
              className="text-black no-underline"
            >
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
            <Link
              to="/guilds/realm/Midgard"
              className="text-black no-underline"
            >
              <p>Midgard</p>
            </Link>
            <Link
              to="/guilds/realm/Hibernia"
              className="text-black no-underline"
            >
              <p>Hibernia</p>
            </Link>
          </Navbar.Section>
        </Navbar>
      }
    >
      {children}
    </AppShell>
  );
};

export default AppNavigation;