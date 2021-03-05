import React from 'react';

import Button from '@material-ui/core/Button';

import './AppHeader.css';

function AppHeader() {
  return (
    <div className="header-container">
      <h2> PregRed </h2>
      <div className="btn-container">
        <Button variant="contained" color="primary" className="btn">
          SignUp
        </Button>
        <Button variant="contained" color="primary" className="btn">
          Login
        </Button>
        <Button variant="contained" color="primary" className="btn">
          Logout
        </Button>
      </div>
    </div>
  );
}

export default AppHeader;
