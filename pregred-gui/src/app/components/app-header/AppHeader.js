import React from 'react';
import { Button } from 'antd';

import './AppHeader.css';

function AppHeader() {
  return (
    <div className="header-container">
      <h2> PregRed </h2>
      <div className="btn-container">
        <Button type="primary" shape="round">
          SignUp
        </Button>
        <Button type="primary" shape="round">
          Login
        </Button>
        <Button type="primary" shape="round">
          Logout
        </Button>
      </div>
    </div>
  );
}

export default AppHeader;
