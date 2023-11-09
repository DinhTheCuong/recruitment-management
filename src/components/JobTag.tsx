import React from 'react';
import { Button, ConfigProvider } from 'antd';
import {
  MdOutlineDiversity2,
  MdAutoGraph,
  MdLocationCity,
} from 'react-icons/md';

const JobTag: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorBgContainer: 'var(--highlight-clr)',
            colorBorder: 'none',
            colorText: '#fff',
          },
        },
      }}
    >
      <div
        className='h-[56px] flex items-center justify-between py-10 px-4 rounded-lg'
        style={{ border: '1px solid var(--highlight-clr)' }}
      >
        <div className='h-full flex items-center'>
          <div className='w-[40px] h-[40px] border-[1px] border-[var(--highlight-clr)] border-solid rounded-full flex items-center justify-center pb-1 mr-8'>
            <MdOutlineDiversity2 className='text-[var(--highlight-clr)] text-2xl' />
          </div>
          <div>
            <div>
              <span className='text-xl font-bold'>Software Engineer</span>
              <span className='bg-red-500 text-white text-[12px] font-bold p-1 ml-2 rounded absolute'>
                HOT
              </span>
            </div>
            <div className='flex items-center gap-4 mt-2'>
              <span className='flex items-center gap-1 text-sm'>
                <MdAutoGraph className='text-[var(--highlight-clr)] text-2xl' />
                Intern / Fresher
              </span>
              <span className='flex items-center gap-1 text-sm'>
                <MdLocationCity className='text-[var(--highlight-clr)] text-xl' />
                Ha Noi
              </span>
            </div>
          </div>
        </div>
        <div className='h-full flex flex-col items-end justify-center gap-2'>
          <span className='text-[var(--highlight-clr)] font-bold'>
            Expiration Date:{' '}
            <span className='text-black font-normal'>20/10/2022</span>
          </span>
          <Button className='search'>Apply</Button>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default JobTag;
