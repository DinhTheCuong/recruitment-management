import React from 'react';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import {
  MdError,
  MdOutlineAddModerator,
  MdOutlineContactPage,
  MdOutlineLogout,
} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const DropdownHr: React.FC = () => {
  const navigate = useNavigate();
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className='flex items-center justify-center text-lg text-[#0EB154] font-bold'>
          HR Leader
        </div>
      ),
      disabled: true,
    },
    {
      type: 'divider',
    },
    {
      key: '2',
      label: (
        <div className='flex items-center text-[var(--primary-clr)] font-bold'>
          <MdOutlineAddModerator className='text-4xl mr-2 p-2 pl-0' />
          Create HR Account
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div
          className='flex items-center text-[var(--primary-clr)] font-bold'
          onClick={() => navigate('/')}
        >
          <MdOutlineContactPage className='text-4xl mr-2 p-2 pl-0' />
          Return User Pages
        </div>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: '4',
      label: (
        <div className='flex items-center text-[var(--primary-clr)] font-bold'>
          <MdOutlineLogout className='text-4xl mr-2 p-2 pl-0' />
          Logout
        </div>
      ),
    },
  ];
  return (
    <Dropdown
      menu={{ items }}
      arrow
    >
      <MdError className='text-3xl cursor-pointer hover:text-[var(--hr-clr)]' />
    </Dropdown>
  );
};

export default DropdownHr;
