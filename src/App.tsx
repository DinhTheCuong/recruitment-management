import './App.css';
import Home from './pages/candidate/Home';
import Career from './pages/candidate/Career';
import Contact from './pages/candidate/Contact';
import HowWeHire from './pages/candidate/HowWeHire';

import Dashboard from './pages/hr/Dashboard';
import LayoutHr from './pages/hr/Layout';
import JobList from './pages/hr/job/JobList';
import CreateJob from './pages/hr/job/CreateJob';
import TestList from './pages/hr/test/TestList';
import TestEx from './pages/hr/test/TestEx';
import CreateTest from './pages/hr/test/CreateTest';
import PeriodList from './pages/hr/period/PeriodList';
import CreatePeriod from './pages/hr/period/CreatePeriod';
import CandidateList from './pages/hr/candidate_mngt/CandidateList';

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
        <Route
          path='/hr/job/create'
          element={<LayoutHr content={<CreateJob />} />}
        />
        <Route
          path='/hr/test/list'
          element={<LayoutHr content={<TestList />} />}
        />
        <Route
          path='/hr/test/ex'
          element={<LayoutHr content={<TestEx />} />}
        />
        <Route
          path='/hr/test/create'
          element={<LayoutHr content={<CreateTest />} />}
        />
        <Route
          path='/hr/period/list'
          element={<LayoutHr content={<PeriodList />} />}
        />
        <Route
          path='/hr/period/create'
          element={<LayoutHr content={<CreatePeriod />} />}
        />
        <Route
          path='/hr/candidate'
          element={<LayoutHr content={<CandidateList />} />}
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
