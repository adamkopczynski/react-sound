import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Navbar from './views/components/navbar';
import Sidebar from './views/components/sidebar';
import Home from './views/pages/home/home';
import './views/styles/main.css';

import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='app-container'>
            <Navbar />
            <div className="container-fluid">
              <div className='row'>
                <Sidebar />
                <Route exact path="/" component={Home} />
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
