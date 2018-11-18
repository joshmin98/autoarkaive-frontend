import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {

};

class Login extends Component {
  render() {
    return(
      <Typography component='h1'>
        TEST
      </Typography>
    );
  }
}

export default withStyles(styles)(Login);
