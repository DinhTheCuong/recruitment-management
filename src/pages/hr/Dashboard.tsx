import React, { PropsWithChildren, useState } from 'react';
import { Layout, Space } from 'antd';
import HeaderHr from '../../components/HeaderHr';
import SidebarHr from '../../components/SidebarHr';

interface LayoutProps extends PropsWithChildren {
  content: React.ReactNode;
}

const { Content } = Layout;

const Dashboard: React.FC<LayoutProps> = ({ content }) => {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapse = (isCollapsed: boolean) => {
    setCollapsed(isCollapsed);
  };

  return (
    <>
      <Space
        direction='vertical'
        style={{ width: '100%' }}
        size={[0, 48]}
      >
        <Layout>
          <SidebarHr
            collapsed={collapsed}
            handleCollapse={handleCollapse}
          />
          <Layout>
            <HeaderHr
              collapsed={collapsed}
              setCollapsed={setCollapsed}
            />
            <Content>{content}</Content>
          </Layout>
        </Layout>
      </Space>
    </>
  );
};

export default Dashboard;
