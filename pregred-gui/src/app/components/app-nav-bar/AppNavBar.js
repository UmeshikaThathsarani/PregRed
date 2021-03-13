import React from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';

import * as Constant from '../../constants/Constant';

import './AppNavBar.css';

function AppNavBar() {
  const history = useHistory();

  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {Constant.PAGES.map((page) => (
          <Menu.Item key={page.id} onClick={() => history.push(page.path)}>
            {page.icon}
            {page.name}
          </Menu.Item>
        ))}
    </Menu>
  );
}

export default AppNavBar;
