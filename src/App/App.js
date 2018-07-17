import React, { Component } from 'react';
import './App.css';

import Brand from '../components/Brand/Brand';
import Topnav from '../components/Topnav/Topnav';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <Brand className="brand"/>
          <Topnav className="topnav"/>
        </div>
      </div>
    );
  }
}

export default App;
