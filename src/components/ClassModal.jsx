import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  root: {
    maxWidth: 450
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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
  },
  textField: {
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 200,
  },
  addressTextField: {
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 200,
    width: '100%'
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '100%'
  }
});

class ClassModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: ''
    };
  }

  handleClassChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleTextChange = name => event => {
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
    let arkaiveClasses = [];
    this.props.classList.forEach(c => arkaiveClasses.push({
      className: c.className,
      courseCode: c.courseCode
    }));

    let FormContent =
        this.props.spinnerCondition ?
        <CircularProgress
          className={this.props.classes.progress}
          color='primary'
          size={50}
        /> :
    (
      <DialogContent
          className={this.props.classes.root}
      >
        <DialogContentText>
          {this.props.instructions}
        </DialogContentText>
        <form>
          <FormControl
            className={this.props.classes.formControl}
          >
            <InputLabel htmlFor='class'>
              Class
            </InputLabel>
            <Select
              onChange={this.handleClassChange}
              inputProps={{
                name: 'class'
              }}
              value={this.state.class}
            >
              <MenuItem value=''>
                <em></em>
              </MenuItem>
              {arkaiveClasses.map((c, idx) => {
                return (
                  <MenuItem
                    key={idx}
                    value={`${c.className} ${c.courseCode}`}
                  >
                    {c.className} - {c.courseCode}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <div/>
          <TextField
            className={this.props.classes.textField}
            label='Start Time'
            type='time'
            defaultValue='00:00'
            inputProps={{
              step: 300
            }}
            onChange={this.handleTextChange('Start Time')}
          />
          <TextField
            className={this.props.classes.textField}
            label='End Time'
            type='time'
            defaultValue='00:00'
            inputProps={{
              step: 300
            }}
            onChange={this.handleTextChange('End Time')}
          />
          <div/>
          <TextField
            className={this.props.classes.addressTextField}
            label='Address'
            onChange={this.handleTextChange('Address')}
          />
        </form>
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

export default withStyles(styles)(ClassModal);
