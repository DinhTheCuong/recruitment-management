import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdBuildCircle, MdCancel } from 'react-icons/md';

const TestCard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full bg-white rounded-lg border-[1px] border-solid border-[var(--hr-clr)] p-4 flex items-center justify-between'>
      <div className='flex flex-col gap-2'>
        <span
          className='text-lg font-bold text-orange-700 hover:cursor-pointer hover:text-orange-500'
          onClick={() => navigate('/hr/test/ex')}
        >
          Algorithm
        </span>
        <span>
          <span className='font-bold'>Code: </span>Alg_FE_test_01
        </span>
        <div className='flex gap-20'>
          <span>
            <span className='font-bold'>Time: </span>20 minutes
          </span>
          <span>
            <span className='font-bold'>Questions: </span>20
          </span>
        </div>
        <span>
          <span className='font-bold'>Level: </span>Intern / Fresher
        </span>
        <span>
          <span className='font-bold'>Description: </span> Min 6/10 questions to
          pass!
        </span>
      </div>
      <div className='flex gap-2'>
        <MdBuildCircle className='text-3xl text-blue-600 hover:cursor-pointer hover:text-blue-800' />
        <MdCancel className='text-3xl text-red-600 hover:cursor-pointer hover:text-red-800' />
      </div>
    </div>
  );
};

export default TestCard;
