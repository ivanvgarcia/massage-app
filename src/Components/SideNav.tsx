import React, { useState } from 'react';
import { HomeOutlined, LoginOutlined, DatabaseFilled } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const SideNav: React.FC = () => {
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (): void => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      collapsible
      breakpoint="md"
      collapsedWidth="0"
      onBreakpoint={(): void => {
        setCollapsed(!collapsed);
      }}
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <div className="logo" />
      <Menu mode="inline" selectedKeys={[location.pathname]}>
        <Menu.Item key="/">
          <HomeOutlined />
          <span>Home</span>
          <Link to="/" />
        </Menu.Item>

        <Menu.Item key="/users">
          <DatabaseFilled />
          <span>Users</span>
          <Link to="/users" />
        </Menu.Item>

        <Menu.Item key="/news">
          <DatabaseFilled />
          <span>News</span>
          <Link to="/news" />
        </Menu.Item>

        <Menu.Item key="/login">
          <LoginOutlined />
          <span>Login</span>
          <Link to="/login" />
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideNav;
