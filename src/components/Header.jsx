import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CircularProgress from '@material-ui/core/CircularProgress';
import GoogleLogin from 'react-google-login';

import SideBar from './SideBar';
import FormModal from './FormModal';
import { SERVER } from '../App';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  loginButton: {
    fontSize: 15,
    border: 0,
    background: 'none',
    color: 'white',
    boxShadow: 'none',
    borderRadius: 0,
    padding: 10,
    fontFamily: 'Roboto',
    textTransform: 'uppercase',
    cursor: 'pointer',
  },
  progress: {
    margin: theme.spacing.unit * 2,
    animationDuration: '550ms'
  }
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.loggedIn,
      routes: this.props.routes,
      sideBarOpen: false,
      arkaiveLoginModalOpen: false,
      arkaiveLoggingIn: false,
      name: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loggedIn !== this.state.loggedIn) {
      this.setState({
        loggedIn: nextProps.loggedIn,
        routes: nextProps.routes
      });
    }
  }

  handleLogin = googleResp => {
    const email = googleResp.profileObj.email;
    const name = googleResp.profileObj.name;
    this.setState({ name: name });
    axios.get(SERVER, {
      params: {
        command: 'checkUser',
        email: email
      }
    }).then(resp => {
      const accountExists = resp.data.arkaiveAcccountExists;
      if(accountExists) {
        this.props.onLogin(email, name);
      } else {
        this.handleFormOpen();
      }
    });
  }

  handleArkaiveLogin = accountInfo => {
    this.setState({ arkaiveLoggingIn: true });
    axios.get(SERVER, {
      params: {
        command: 'addUser',
        arkaive_username: accountInfo.email,
        arkaive_password: accountInfo.password,
        fullname: this.state.name,
        picUrl: 'none',
        email: accountInfo.email
      }
    }).then(resp => {
      this.setState({ arkaiveLoggingIn: false });
      resp = resp.data;
      if(resp.isValidArkaiveAccount) {
        this.props.onLogin(accountInfo.email, this.state.name);
      } else {
        alert('Error: Invalid Arkaive account info!');
      }
    });
    this.setState({ arkaiveLoginModalOpen: false });
  }

  handleLogout = () => {
    this.props.history.push('/');
    this.props.onLogout();
  }

  toggleSideBar = () => {
    this.setState({ sideBarOpen: !this.state.sideBarOpen });
  }

  handleFormOpen = () => {
    this.setState({ arkaiveLoginModalOpen: true });
  }

  handleFormClose = () => {
    this.setState({ arkaiveLoginModalOpen: false });
  }

  render() {
    let LoginButton = this.state.loggedIn ?
        <Button
          color='inherit'
          onClick={this.handleLogout}>
          Logout
        </Button> :
        <GoogleLogin
          clientId="352877215320-oshj4gaol59ludv1p30o82jarubueq62.apps.googleusercontent.com"
          onSuccess={resp => this.handleLogin(resp)}
          buttonText='Login'
          className={this.props.classes.loginButton}
        />;

    LoginButton = this.state.arkaiveLoginModalOpen ?
      <CircularProgress
        className={this.props.classes.progress}
        color='inherit'
        size={24}
      /> :
    LoginButton;

    return (
      <div className={this.props.classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              className={this.props.classes.menuButton}
              color='inherit'
              onClick={this.toggleSideBar}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              color='inherit'
              className={this.props.classes.grow}
            >
              AutoArkaive
            </Typography>
            {LoginButton}
            <FormModal
              open={this.state.arkaiveLoginModalOpen}
              handleClose={this.handleFormClose}
              title='Arkaive Login'
              instructions='Please enter your Arkaive account credentials'
              submit={this.handleArkaiveLogin}
              inputs={['email', 'password']}
              spinnerCondition={this.state.arkaiveLoggingIn}
            />
          </Toolbar>
        </AppBar>
        <SideBar
          open={this.state.sideBarOpen}
          toggleSideBar={this.toggleSideBar}
          routes={this.state.routes}
        />
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Header));
