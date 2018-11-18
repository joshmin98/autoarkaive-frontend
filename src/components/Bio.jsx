import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%'
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
});

class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  handleClick = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return(
      <div>
        <Card className={this.props.classes.card}>
          <CardHeader
            title={this.props.name}
            subheader={this.props.role}
          />
          <CardMedia
            className={this.props.classes.cardMedia}
            title={this.props.name}
            image={this.props.imgSrc}
          />
          <CardContent>
            <Typography component='p'>
              {this.props.shortBio}
            </Typography>
          </CardContent>
          <CardActions
            className={this.props.classes.actions}
            disableActionSpacing
          >
            <IconButton
              className={classnames(this.props.classes.expand, {
                [this.props.classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleClick}
            >
              <ExpandMoreIcon/>
            </IconButton>
          </CardActions>
          <Collapse
            in={this.state.expanded}
            timeout='auto'
            unmountOnExit
          >
            <Typography component='p'>
              {this.props.roleDescription}
            </Typography>
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Bio);
