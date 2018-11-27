import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  logo: {
    fontSize: 80,
    padding: 15
  },
  card: {
    maxWidth: 800
  },
  cardMedia: {
    height: 0,
    paddingTop: '100%'
  },
  grid: {
    paddingTop: theme.spacing.unit * 5
  }
});

class Login extends Component {
  render() {
    return(
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        className={this.props.classes.grid}
      >
        <Grid item>
          <Card className={this.props.classes.card}>
            <CardMedia
              className={this.props.classes.cardMedia}
              image='../images/aa-logo.png'
            />
            <Typography
              className={this.props.classes.logo}
              component='h1'
            >
              AutoArkaive ( ͡° ͜ʖ ͡°)
            </Typography>
          </Card>

        </Grid>   
      </Grid> 

    );
  }
}

export default withStyles(styles)(Login);
