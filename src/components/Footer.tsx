import React from 'react';
import Input from 'antd/es/input/Input';
import logo from '../assets/images/logo.png';
import { MdSend, MdFacebook, MdMail } from 'react-icons/md';

const Footer: React.FC = () => {
  return (
    <div className='bg-[var(--primary-clr)] text-white'>
      <div className='mx-auto max-w-6xl flex items-center justify-between py-4'>
        <div className='h-full flex items-center no-underline'>
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
        </div>
        <div>
          <span className='text-lg font-bold text-[var(--highlight-clr)] block mb-2'>
            Subscribe Our Newsletter
          </span>
          <Input
            placeholder='Your Email ...'
            allowClear
            className='border-none'
            suffix={<MdSend className='text-[var(--highlight-clr)] text-2xl' />}
          />
        </div>
        <div>
          <span className='text-lg font-bold text-[var(--highlight-clr)] block mb-2'>
            Follow Us On
          </span>
          <div>
            <MdFacebook className='text-2xl' />
          </div>
        </div>
        <div>
          <span className='text-lg font-bold text-[var(--highlight-clr)] block mb-2'>
            Need Help?
          </span>
          <div className='flex items-center'>
            <MdMail className='text-2xl mr-2' />
            <span>hr@email.com</span>
          </div>
        </div>
      </div>
      <div className='bg-[var(--highlight-clr)] h-[54px] flex items-center justify-center'>
        © Copyright 2023 Human Resources Department | All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
