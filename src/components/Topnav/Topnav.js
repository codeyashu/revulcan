import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as Routes from '../../constants/Routes';
import './Topnav.css';

class Topnav extends Component {
  render() {    
    return (
      <nav className="topnav">
        <h3><NavLink exact to={Routes.HOME}>Home</NavLink></h3>
        <h3><NavLink to={Routes.ABOUT}>About</NavLink></h3>
        <h3><NavLink to={Routes.CAREERS}>Careers</NavLink></h3>
        <h3><NavLink to={Routes.CONTACT}>Contact</NavLink></h3>
      </nav>
    );
  }
}

export default Topnav;
