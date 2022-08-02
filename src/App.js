import { Routes, Route } from 'react-router-dom';
import Players from './pages/Players';

function App() {
  return (
    <>
      <nav></nav>
      <main>
        <Routes>
          <Route index element={<Players />} />
          <Route path="/guilds" element={<h1>Guilds</h1>} />
          <Route path="/player/:playerName" element={<Players />} />
          <Route path="/players/:scope/:scopeValue" element={<Players />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
