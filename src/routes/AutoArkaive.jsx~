import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { SERVER } from '../App';
import ClassModal from '../components/ClassModal';
import ClassTable from '../components/ClassTable';

const KEY = '0ai9qdntEc0rkNBwAprbHsVAbWpgVOMM';

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
      email: '',
      fetchingClasses: true,
      formModalOpen: false,
      addingClass: false
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
      email: localStorage.getItem('email').replace(/['"]+/g, '')
    });
  }

  handleClick = () => {
    this.setState({ formModalOpen: true });
  }

  handleSubmit = values => {
    this.setState({ addingClass: true });
    const className = values.class.split(' ')[0];
    const code = values.class.split(' ')[1];
    const startTime = values['Start Time'];
    const endTime = values['End Time'];
    const address = values['Address'];
    axios.get(
      `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY}&location=${address}`
    ).then(resp => {
      resp = resp.data.results[0].locations[0].latLng;
      const lat = resp.lat;
      const long = resp.lng;
      // Adding class to server
      axios.get(SERVER + '/addClass', {
        params: {
          command: 'addClass',
          email: this.state.email,
          class: className,
          code: code,
          startTime: startTime,
          endTime: endTime,
          latitude: lat,
          longitude: long
        }
      }).then(resp => {
        resp = resp.data;
        if(resp.successfullyAdded) {
          this.fetchClasses();
        } else {
          alert('Error: Could not add class!');
        }
      });
    });
    this.setState({
      formModalOpen: false,
      addingClass: false
    });
  }

  fetchClasses = () => {
    this.setState({ fetchingClasses: true });
    axios.get(SERVER + '/endpointThatIHit', {
      params: {
        command: 'fetchClasses',
        email: this.state.email
      }
    }).then(resp => {
      resp = resp.data;
      console.log(resp);
      this.setState({
        classList: resp.classes,
        fetchingClasses: false
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
              classList={this.state.classList}
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
