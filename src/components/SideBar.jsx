import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  link: {
    textDecoration: 'none'
  }
};

const ROUTE_MAP = {
  '/': 'Home',
  '/about': 'Developers',
  '/autoarkaive': 'Application'
};


let SideBar = props =>  {
  let routeList = (
    <div className={props.classes.list}>
      <List>
        {props.routes.map(r => (
          <Link
            className={props.classes.link}
            to={r}
            key={r}
          >
            <ListItem button>
              <Typography>{ROUTE_MAP[r]}</Typography>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return(
    <Drawer
      open={props.open}
      onClose={props.toggleSideBar}
    >
      <div
        tabIndex={0}
        role='button'
        onClick={props.toggleSideBar}
        onKeyDown={props.toggleSideBar}
      >
        {routeList}
      </div>
    </Drawer>
  );
};

export default withStyles(styles)(SideBar);
