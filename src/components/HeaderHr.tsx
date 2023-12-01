/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import DropdownHr from './DropdownHr';
import { MdOutlineMenu } from 'react-icons/md';

const HeaderHr: React.FC<{ collapsed: any; setCollapsed: any }> = (props) => {
  return (
    <div className='w-full h-[64px] bg-[var(--primary-clr)] text-white flex items-center justify-between px-4'>
      <MdOutlineMenu
        className='text-3xl cursor-pointer active:text-[var(--hr-clr)]'
        onClick={() => props.setCollapsed(!props.collapsed)}
      />
      <DropdownHr />
    </div>
  );
};

export default HeaderHr;
