import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ConfigProvider, Menu, MenuProps } from 'antd';
import {
  MdOutlineTask,
  MdOutlineQuestionAnswer,
  MdOutlineViewTimeline,
  MdOutlinePersonPin,
} from 'react-icons/md';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  style?: React.CSSProperties,
): MenuItem {
  return { label, key, icon, children, style } as MenuItem;
}

const MenuHr: React.FC = () => {
  const navigate = useNavigate();
  const onClick = (e: any) => {
    navigate(`/hr/${e.key}`);
  };

  const items: MenuProps['items'] = [
    getItem(
      'Job',
      'job',
      <MdOutlineTask style={{ fontSize: '24px', marginRight: '4px' }} />,
      [getItem('Jobs List', 'job/list'), getItem('Create Job', 'job/create')],
    ),
    getItem(
      'Test',
      'test',
      <MdOutlineQuestionAnswer
        style={{ fontSize: '24px', marginRight: '4px' }}
      />,
      [
        getItem('Tests List', 'test/list'),
        getItem('Create Test', 'test/create'),
      ],
    ),
    getItem(
      'Period',
      'period',
      <MdOutlineViewTimeline
        style={{ fontSize: '24px', marginRight: '4px' }}
      />,
      [
        getItem('Periods List', 'period/list'),
        getItem('Create Period', 'period/create'),
      ],
    ),
    getItem(
      'Candidate',
      'candidate',
      <MdOutlinePersonPin style={{ fontSize: '24px', marginRight: '4px' }} />,
    ),
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemColor: '#ccc',
            itemBg: 'var(--primary-clr)',
            itemHoverBg: 'var(--hr-clr)',
            itemHoverColor: '#fff',
            itemSelectedBg: 'var(--hr-clr)',
            itemSelectedColor: '#fff',
          },
        },
      }}
    >
      <Menu
        mode='inline'
        items={items}
        onClick={onClick}
      />
    </ConfigProvider>
  );
};

export default MenuHr;
