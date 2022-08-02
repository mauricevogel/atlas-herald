import { Routes, Route } from 'react-router-dom';
import Players from './pages/Players';
import AppNavigation from './components/AppNavigation/AppNavigation';

function App() {
  return (
    <AppNavigation>
      <Routes>
        <Route index element={<Players />} />
        <Route path="/guilds" element={<h1>Guilds</h1>} />
        <Route path="/players/:scope/:scopeValue" element={<Players />} />
      </Routes>
    </AppNavigation>
  );
}

export default App;
