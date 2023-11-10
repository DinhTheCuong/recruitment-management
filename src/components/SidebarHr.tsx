import React from 'react';
import MenuHr from './MenuHr';
import Sider from 'antd/es/layout/Sider';
import logo from '../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SidebarHr: React.FC<{ collapsed: any; handleCollapse: any }> = (
  props,
) => {
  const navigate = useNavigate();
  return (
    <Sider
      style={{ textAlign: 'left', background: 'var(--primary-clr)' }}
      collapsed={props.collapsed}
      onCollapse={props.handleCollapse}
      collapsedWidth={0}
      className='min-h-screen'
      reverseArrow
    >
      <div
        className='h-[62px] flex items-center justify-center cursor-pointer'
        onClick={() => navigate(0)}
      >
        <img
          src={logo}
          className='h-6 w-auto mr-2'
        />
        <span
          className={`font-bold text-lg text-white ${
            props.collapsed ? 'hidden' : ''
          }`}
        >
          HR Department
        </span>
      </div>
      <MenuHr />
    </Sider>
  );
};

export default SidebarHr;
