import React from 'react';
import { useHistory } from 'react-router-dom';

import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import * as Constant from '../../constants/Constant';

import './AppNavBar.css';

function AppNavBar() {
  const history = useHistory();

  return (
    <List component="nav" className="nav-container">
      {Constant.PAGES.map((page) => (
          <ListItem key={page.id} button onClick={() => history.push(page.path)}>
            <ListItemIcon />
            <ListItemText primary={page.name} />
          </ListItem>
        ))}
    </List>
  );
}

export default AppNavBar;
