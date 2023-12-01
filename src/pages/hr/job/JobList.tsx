import React from 'react';
import JobCard from './JobCard';
import { Alert, Divider } from 'antd';
import { MdAddCircle } from 'react-icons/md';

const JobList: React.FC = () => {
  return (
    <div className='p-8'>
      <div className='flex items-center justify-between'>
        <span className='text-3xl font-bold text-[var(--hr-clr)]'>JobList</span>
        <MdAddCircle className='text-3xl text-[var(--hr-clr)] hover:cursor-pointer hover:text-green-800' />
      </div>
      <Alert
        description='HR can views the list, creates new, updates, deletes job positions.'
        type='info'
        showIcon
        className='my-8'
      />
      <Divider />
      <div className='flex flex-col gap-4'>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};

export default JobList;
