import React from 'react';
import { MdBuildCircle, MdCancel } from 'react-icons/md';

const JobCard: React.FC = () => {
  return (
    <div className='w-full rounded-lg border-[1px] border-solid border-[var(--hr-clr)] p-4 flex items-center justify-between'>
      <div className='flex flex-col gap-2'>
        <span className='text-lg font-bold text-orange-700'>
          Software Engineer
        </span>
        <div className='flex gap-20'>
          <span>
            <span className='font-bold'>Create: </span>01/01/2022
          </span>
          <span>
            <span className='font-bold'>Exprired: </span>01/01/2022
          </span>
        </div>
        <span>
          <span className='font-bold'>Code: </span>Fr_FE_DEV
        </span>
        <span>
          <span className='font-bold'>Position: </span>Staff
        </span>
        <span>
          <span className='font-bold'>Description: </span> Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Quis modi iste sint consequatur
          omnis, quaerat, ad obcaecati a, ut quidem libero aut adipisci ipsum
          distinctio earum ducimus ratione voluptatem animi!
        </span>
      </div>
      <div className='flex gap-2'>
        <MdBuildCircle className='text-3xl text-blue-600 hover:cursor-pointer hover:text-blue-800' />
        <MdCancel className='text-3xl text-red-600 hover:cursor-pointer hover:text-red-800' />
      </div>
    </div>
  );
};

export default JobCard;
