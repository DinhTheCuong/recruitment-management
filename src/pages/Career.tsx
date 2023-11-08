import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobTag from '../components/JobTag';
import banner from '../assets/images/banner.jpg';
import { ConfigProvider, Input } from 'antd';
import { MdSearch } from 'react-icons/md';

const Career: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBgContainer: 'rgba(255, 255, 255, 0.3)',
            colorTextPlaceholder: '#fff',
            colorText: '#fff',
            activeBg: '#666',
          },
        },
      }}
    >
      <Header />
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
        }}
        className='h-[200px]'
      >
        <div className='w-full h-full max-w-6xl mx-auto flex flex-col items-center justify-center'>
          <span className='text-3xl font-bold text-white'>CURRENT JOBS</span>
          <div className='h-[4px] w-[10%] bg-[var(--highlight-clr)] my-4' />
          <Input
            allowClear
            size='large'
            className='w-[60%] border-none'
            placeholder='Search Jobs ...'
            suffix={
              <MdSearch className='text-[var(--highlight-clr)] text-2xl' />
            }
          />
        </div>
      </div>
      <div className='mx-auto max-w-6xl py-8 flex flex-col gap-6'>
        <JobTag />
        <JobTag />
        <JobTag />
        <JobTag />
        <JobTag />
        <JobTag />
      </div>
      <Footer />
    </ConfigProvider>
  );
};

export default Career;
