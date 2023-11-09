import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-screen bg-[var(--primary-clr)] flex flex-col items-center justify-center'>
      <span className='text-[var(--highlight-clr)] font-bold text-6xl'>
        HR Dashboard
      </span>
      <span className='text-white text-xl mt-8'>Comming Soon</span>

      <Button
        type='primary'
        className='mt-8'
        onClick={() => navigate('/')}
      >
        Back To Page For Candidate
      </Button>
    </div>
  );
};

export default Dashboard;
