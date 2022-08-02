import { Routes, Route } from 'react-router-dom';
import Players from './pages/Players';
import AppNavigation from './components/AppNavigation/AppNavigation';
import Guilds from './pages/Guilds';
import Player from './pages/Player';

function App() {
  return (
    <AppNavigation>
      <Routes>
        <Route index element={<Players />} />
        <Route exact path="/players" element={<Players />} />
        <Route exact path="/guilds" element={<Guilds />} />
        <Route path="/player/:playerName" element={<Player />} />
        <Route path="/guilds/:scope/:scopeValue" element={<Guilds />} />
        <Route path="/players/:scope/:scopeValue" element={<Players />} />
      </Routes>
    </AppNavigation>
  );
}

export default App;
