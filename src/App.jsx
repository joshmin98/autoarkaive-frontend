import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import Header from './components/Header';
import Login from './routes/Login';
import About from './routes/About';
import AutoArkaive from './routes/AutoArkaive.jsx';


const COMPONENT_MAP = {
  '/': Login,
  '/about': About,
  '/autoarkaive': AutoArkaive
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      email: null,
      name: null,
      routes: [
        '/',
        '/about'
      ]
    };
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      'beforeunload',
      this.saveStateToLocalStorage
    );
  }

  hydrateStateWithLocalStorage = () => {
    for(let key in this.state) {
      if(localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          console.log(e);
        }
      }
    }
  }

  viewStorage = () => {
    for(let key in this.state) {
      if(localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        console.log(`${key} : ${value}`);
      }
    }
  }

  saveStateToLocalStorage = () => {
    for(let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  handleLogin = (email, name) => {
    this.setState({
      email: email,
      name: name,
      loggedIn: true,
      routes: ['/', '/about', '/autoarkaive']
    });
    this.saveStateToLocalStorage();
  }

  handleLogout = () => {
    this.setState({
      email: null,
      name: null,
      loggedIn: false,
      routes: ['/', '/about']
    });
    this.saveStateToLocalStorage();
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <>
            <Header
              loggedIn={this.state.loggedIn}
              routes={this.state.routes}
              onLogin={this.handleLogin}
              onLogout={this.handleLogout}
            />
            {this.state.routes.map(r => {
              return <Route
                       key={r}
                       exact path={r}
                       component={COMPONENT_MAP[r]}
                     />;
            })}
          </>
        </Router>
      </div>
    );
  }
}

export default App;

export const SERVER = 'http://localhost:8080/AutoArkaive/UtilityServlet';
