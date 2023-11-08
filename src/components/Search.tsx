import React from 'react';
import { Select, Button, ConfigProvider } from 'antd';

const Search: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            colorBorder: 'none',
            colorBgContainer: 'rgba(255, 255, 255, 0.3)',
            colorTextPlaceholder: '#fff',
            colorIcon: '#fff',
            colorText: '#fff',
            colorBgElevated: 'rgba(255, 255, 255, 0.4)',
            optionSelectedBg: 'var(--highlight-clr)',
          },
          Button: {
            colorBgContainer: 'var(--highlight-clr)',
            colorBorder: 'none',
            colorText: '#fff',
          },
        },
      }}
    >
      <div className='mt-8 flex gap-4'>
        <Select
          showSearch
          size='large'
          placeholder="I'm interested in ..."
          className='w-[400px]'
          options={[
            {
              value: 'FE',
              label: 'FE',
            },
            {
              value: 'BE',
              label: 'BE',
            },
            {
              value: 'BA',
              label: 'BA',
            },
          ]}
        />
        <Select
          showSearch
          size='large'
          placeholder='I want to work at ...'
          className='w-[400px]'
          options={[
            {
              value: 'Ha Noi',
              label: 'Ha Noi',
            },
            {
              value: 'Da Nang',
              label: 'Da Nang',
            },
            {
              value: 'Ho Chi Minh',
              label: 'Ho Chi Minh',
            },
          ]}
        />
        <Button
          size='large'
          className='search'
        >
          Search Job
        </Button>
      </div>
    </ConfigProvider>
  );
};

export default Search;
