import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { SERVER } from '../App';
import ClassModal from '../components/ClassModal';
import ClassTable from '../components/ClassTable';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    animationDuration: '550ms'
  },
  loading: {
    marginTop: '25%',
    textAlign: 'center'
  },
  iconButton: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    marginRight: '2%',
    marginBottom: '2%',
    width: 60,
    height: 60
  },
  icon: {
    width: 40,
    height: 40
  }
});

class AutoArkaive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      name: null,
      fetchingClasses: true,
      formModalOpen: false,
      addingClass: false,
      classList: [],
      autoArkaiveClassList: []
    };
  }

  componentWillMount() {
    this.hydrateStateWithLocalStorage();
  }

  componentDidMount() {
    this.setState({ fetchingClasses: true });
    this.fetchClasses();
  }

  hydrateStateWithLocalStorage = () => {
    this.setState({
      email: localStorage.getItem('email').replace(/['"]+/g, ''),
      name: localStorage.getItem('name').replace(/['"]+/g, '')
    });
  }

  handleClick = () => {
    this.setState({ formModalOpen: true });
  }

  handleSubmit = values => {
    this.setState({ addingClass: true });
    const className = values.class.split('+')[0];
    const code = values.class.split('+')[1];
    const startTime = values['Start Time'];
    const endTime = values['End Time'];
    const lat = values['Latitude'];
    const long = values['Longitude'];
    console.log(lat, long);
    axios.get(SERVER, {
      params: {
        command: 'addClass',
        email: this.state.email,
        fullname: this.state.name,
        classname: className,
        courseCode: code,
        checkinStartTime: startTime,
        checkinEndTime: endTime,
        latitude: lat,
        longitude: long,
        altitude: 60
      }
    }).then(resp => {
      console.log(resp);
      return;
      resp = resp.data;
      if(resp.classWasAdded) {
        this.fetchClasses();
      } else {
        alert('Error: Could not add class!');
      }
    });
    this.setState({
      formModalOpen: false,
      addingClass: false
    });
    this.fetchClasses();
  }

  fetchClasses = () => {
    console.log(this.state.email);
    this.setState({ fetchingClasses: true });
    axios.get(SERVER, {
      params: {
        command: 'fetchClasses',
        email: this.state.email
      }
    }).then(resp => {
      this.setState({
        classList: resp.data.classList,
      });
      console.log(this.state);
    }).then(() => {
      axios.get(SERVER, {
        params: {
          command: 'getAutoArkaiveClasses',
          email: this.state.email
        }
      }).then(resp => {
        this.setState({
          autoArkaiveClassList: resp.data.classes,
          // ^ fields for this are: classname, courseCode, checkinStartTime
          fetchingClasses: false
        });
      });
    });
  }

  handleFormClose = () => {
    this.setState({ formModalOpen: false });
  }


  render() {
    let content = this.state.fetchingClasses ?
        (
          <div className={this.props.classes.loading}>
            <CircularProgress
              className={this.props.classes.progress}
              color='primary'
              size={60}
            /> 
          </div>
        ):
        (
          <div>
            <ClassTable
              classList={this.state.autoArkaiveClassList}
            />
            <IconButton
              className={this.props.classes.iconButton}
              onClick={this.handleClick}
            >
              <AddCircleIcon className={this.props.classes.icon}/>
            </IconButton>
            <ClassModal
              open={this.state.formModalOpen}
              title='Add a class'
              instructions=''
              submit={this.handleSubmit}
              handleClose={this.handleFormClose}
              classList={this.state.classList}
              spinnerCondition={this.state.addingClass}
            />
          </div>
        );

    return(
      <>
        {content}
      </>
    );
  }
};

export default withStyles(styles)(AutoArkaive);
