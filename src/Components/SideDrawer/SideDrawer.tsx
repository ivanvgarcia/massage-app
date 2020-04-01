import React from 'react';
import { Drawer } from 'antd';
import { SideDrawerProps } from '../../types';

const SideDrawer: React.FC<SideDrawerProps> = ({ showDrawer, handleShowDrawer, children }) => {
  return (
    <Drawer
      title="Add AWS Configuration"
      width={720}
      visible={showDrawer}
      onClose={handleShowDrawer}
      bodyStyle={{ paddingBottom: 80 }}
    >
      {children}
    </Drawer>
  );
};

export default SideDrawer;
