import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  progress: {
    margin: theme.spacing.unit * 2,
    animationDuration: '550ms'
  }
});

class FormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.inputs.forEach(input => {
      this.setState({ [input]: ''});
    });
  }

  handleChange = name => event => {
    event.preventDefault();
    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const currInputs = this.state;
    this.props.submit(currInputs);
  }

  render() {
    let FormContent =
        this.props.spinnerCondition ?
        <CircularProgress
          className={this.props.classes.progress}
          color='primary'
          size={50}
        /> :
    (
      <DialogContent>
        <DialogContentText>
          {this.props.instructions}
        </DialogContentText>
        {this.props.inputs.map((input, idx) => {
          if(input == 'password') {
            return (
              <TextField
                label={input}
                className={this.props.classes.textField}
                value={this.state[input]}
                onChange={this.handleChange(input)}
                margin='normal'
                variant='outlined'
                type='password'
                key={idx}
              />
            );
          } else {
            return (
              <TextField
                label={input}
                className={this.props.classes.textField}
                value={this.state[input]}
                onChange={this.handleChange(input)}
                margin='normal'
                variant='outlined'
                key={idx}
              />
            );
          }
        })}
        <DialogActions>
          <Button onClick={this.props.handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color='primary'>
            Submit
          </Button>
        </DialogActions>
      </DialogContent>
    );

    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
        >
          <DialogTitle>{this.props.title}</DialogTitle>
          {FormContent}
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(FormModal);
