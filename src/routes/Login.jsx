import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  logo: {
    fontSize: 60
  }
});

class Login extends Component {
  render() {
    return(
      <div>
        <Typography
          className={this.props.classes.logo}
          component='h1'
        >
          AutoArkaive
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
