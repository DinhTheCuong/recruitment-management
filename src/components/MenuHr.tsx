import React from 'react';
import { ConfigProvider, Menu, MenuProps } from 'antd';
import {
  MdOutlineTask,
  MdOutlineQuestionAnswer,
  MdOutlineViewTimeline,
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
      />
    </ConfigProvider>
  );
};

export default MenuHr;
