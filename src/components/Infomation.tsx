import React from 'react';
import training from '../assets/images/training.png';
import computer from '../assets/images/computer-science.png';
import ba from '../assets/images/bookkeeping.png';
import dev from '../assets/images/data-library.png';

const Infomation: React.FC = () => {
  return (
    <div className='h-screen mx-auto max-w-6xl flex flex-col'>
      <div className='w-full h-1/2 flex items-center gap-10'>
        <div className='w-1/3'>
          <span className='text-6xl font-bold leading-[72px] text-[var(--primary-clr)]'>
            Software as a Service
          </span>
          <div className='h-[10px] w-[60%] bg-[var(--highlight-clr)] mt-6' />
        </div>
        <span className='w-2/3 text-gray-600 leading-relaxed text-justify'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          reiciendis enim molestias, repudiandae iure amet placeat quo expedita
          itaque laboriosam voluptatibus pariatur nulla provident temporibus
          corrupti harum numquam est cupiditate? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Sapiente corrupti, distinctio saepe
          excepturi, tempora illum voluptate modi nam similique repudiandae,
          mollitia maiores aperiam? Quo sed incidunt nisi, voluptatibus enim
          distinctio?
        </span>
      </div>
      <div className='w-full h-1/2 flex items-center justify-between'>
        <div className='flex flex-col items-center justify-center'>
          <img
            src={dev}
            className='w-[144px]'
          />
          <span className='text-xl text- font-bold mt-8'>Computer Sience</span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img
            src={ba}
            className='w-[144px]'
          />
          <span className='text-xl text- font-bold mt-8'>
            Bussiness Analyst
          </span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img
            src={computer}
            className='w-[144px]'
          />
          <span className='text-xl text- font-bold mt-8'>
            Software Development
          </span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img
            src={training}
            className='w-[144px]'
          />
          <span className='text-xl text- font-bold mt-8'>
            Education Training
          </span>
        </div>
      </div>
    </div>
  );
};

export default Infomation;
