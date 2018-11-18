import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
  '/about': 'About',
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
