import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  logo: {
    fontSize: 60
  },
  center: {
    marginTop: theme.spacing.unit * 2,
    textAlign: 'center'
  }
});

class Login extends Component {
  render() {
    return(
      <div className={this.props.classes.center}>
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
