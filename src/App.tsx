import './App.css';
import Home from './pages/candidate/Home';
import Career from './pages/candidate/Career';
import Contact from './pages/candidate/Contact';
import HowWeHire from './pages/candidate/HowWeHire';

import Dashboard from './pages/hr/Dashboard';
import LayoutHr from './pages/hr/Layout';
import JobList from './pages/hr/job/JobList';

import { Routes, Route } from 'react-router-dom';
import { FloatButton } from 'antd';
import { MdDoubleArrow } from 'react-icons/md';

function App() {
  return (
    <>
      <Routes>
        {/* Candidate */}
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

        {/* HR */}
        <Route
          path='/hr/dashboard'
          element={<LayoutHr content={<Dashboard />} />}
        />
        <Route
          path='/hr/job/list'
          element={<LayoutHr content={<JobList />} />}
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
