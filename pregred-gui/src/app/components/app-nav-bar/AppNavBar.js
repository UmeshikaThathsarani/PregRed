import { useHistory } from 'react-router-dom';

import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import * as Constant from '../../constants/Constant';

import './AppNavBar.css';

function AppNavBar() {
    let history = useHistory();

    return (
        <List component="nav" className="nav-container">
            {Constant.PAGES.map((page, index) => {
                return (
                    <ListItem key={index} button onClick={() =>  history.push(page.path)}>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={page.name}></ListItemText>
                    </ListItem>
                )
            })}
        </List>
    );
}

export default AppNavBar;