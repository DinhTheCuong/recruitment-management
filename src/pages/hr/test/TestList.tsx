import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdAddCircle } from 'react-icons/md';
import { Divider, Alert } from 'antd';
import TestCard from './TestCard';

const TestList: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='p-8'>
      <div className='flex items-center justify-between'>
        <span className='text-3xl font-bold text-[var(--hr-clr)]'>
          Tests List
        </span>
        <MdAddCircle
          className='text-3xl text-[var(--hr-clr)] hover:cursor-pointer hover:text-green-800'
          onClick={() => navigate('/hr/test/create')}
        />
      </div>
      <Alert
        description='HR can views the list, creates new, updates, deletes tests.'
        type='info'
        showIcon
        className='my-8'
      />
      <Divider />
      <div className='flex flex-col gap-4'>
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
      </div>
    </div>
  );
};

export default TestList;
