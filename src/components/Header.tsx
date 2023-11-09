import React from 'react';
import logo from '../assets/images/logo.png';
import { Button, ConfigProvider } from 'antd';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: 'transparent',
            colorText: 'var(--highlight-clr)',
            colorBorder: 'var(--highlight-clr)',
          },
        },
      }}
    >
      <div className='h-[80px] w-full bg-[--primary-clr]'>
        <div className='mx-auto max-w-6xl h-full flex items-center justify-between'>
          <Link
            to='/'
            className='h-full flex items-center no-underline'
          >
            <img
              src={logo}
              alt='logo'
              className='h-[64px] w-[64px]'
            />
            <div className='flex flex-col h-full justify-center ml-4'>
              <span className='text-xl font-bold text-white'>
                Human Resources
              </span>
              <span className='text-xl font-bold text-[--highlight-clr]'>
                Department
              </span>
            </div>
          </Link>

          <div className='w-2/5 h-full flex items-center justify-between'>
            <NavLink
              to='/'
              className='text-white no-underline'
            >
              HOME
            </NavLink>
            <NavLink
              to='/career'
              className='text-white no-underline'
            >
              CAREER
            </NavLink>
            <NavLink
              to='/contact'
              className='text-white no-underline'
            >
              CONTACT US
            </NavLink>
            <NavLink
              to='/how-we-hire'
              className='text-white no-underline'
            >
              HOW WE HIRE
            </NavLink>
          </div>
          <div>
            <Button
              shape='round'
              type='default'
              onClick={() => navigate('/hr/dashboard')}
            >
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Header;
