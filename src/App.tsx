import './App.css';
import Home from './pages/Home';
import Career from './pages/Career';
import Contact from './pages/Contact';
import HowWeHire from './pages/HowWeHire';
import { Routes, Route } from 'react-router-dom';
import { FloatButton } from 'antd';
import { MdDoubleArrow } from 'react-icons/md';

function App() {
  return (
    <>
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
      <FloatButton.BackTop
        visibilityHeight={50}
        icon={
          <MdDoubleArrow className='-rotate-90 text-2xl ml-[-3px] mt-[1px] text-[#0EB154]' />
        }
      />
    </>
  );
}

export default App;
