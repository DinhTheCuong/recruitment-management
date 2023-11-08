import React from 'react';
import { Carousel } from 'antd';
import c1 from '../assets/images/c1.jpg';
import c2 from '../assets/images/c2.jpg';
import Search from './Search';

const AutoCarosel: React.FC = () => {
  return (
    <Carousel>
      <div>
        <div
          style={{
            backgroundImage: `url(${c2})`,
            width: '100%',
            height: 'calc(100vh - 80px)',
            objectFit: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span className='w-full h-full bg-black/60 text-white text-5xl flex flex-col items-center justify-center'>
            <span className='font-bold'>
              We offer
              <span className='text-[var(--highlight-clr)] mx-4'> 1,259 </span>
              job vacancies right now!
            </span>
            <Search />
          </span>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundImage: `url(${c1})`,
            width: '100%',
            height: 'calc(100vh - 80px)',
            objectFit: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span className='w-full h-full bg-black/60 text-white text-5xl font-bold flex items-center justify-center'>
            <span className='text-[var(--highlight-clr)] mr-4'> Find </span>
            your desire one in a minute
          </span>
        </div>
      </div>
    </Carousel>
  );
};

export default AutoCarosel;
