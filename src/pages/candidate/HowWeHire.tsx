import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import banner from '../../assets/images/banner.jpg';
import StepApply from '../../components/StepApply';

const HowWeHire: React.FC = () => {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
        }}
        className='h-[200px]'
      >
        <div className='w-full h-full max-w-6xl mx-auto flex flex-col items-center justify-center'>
          <span className='text-3xl font-bold text-white'>HOW WE HIRE</span>
          <div className='h-[4px] w-[10%] bg-[var(--highlight-clr)] my-4' />
          <span className='text-xl text-white'>Becoming Us In Four Steps</span>
        </div>
      </div>
      <div
        className='w-full max-w-6xl mx-auto py-8 mt-4'
        style={{ minHeight: 'calc(100vh - 450px)' }}
      >
        <StepApply />
      </div>
      <Footer />
    </>
  );
};

export default HowWeHire;
