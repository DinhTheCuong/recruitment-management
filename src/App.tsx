import './App.css';
import Home from './pages/Home';
import Career from './pages/Career';
import Contact from './pages/Contact';
import HowWeHire from './pages/HowWeHire';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/career'
        element={<Career />}
      />
      <Route
        path='/contact'
        element={<Contact />}
      />
      <Route
        path='/how-we-hire'
        element={<HowWeHire />}
      />
    </Routes>
  );
}

export default App;
