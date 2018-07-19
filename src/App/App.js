import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import * as Routes from '../constants/Routes';
import Brand from '../components/Brand/Brand';
import Topnav from '../components/Topnav/Topnav';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Careers from '../components/Careers/Careers';
import Contact from '../components/Contact/Contact';
import Bottomnav from '../components/Bottomnav/Bottomnav';

class App extends Component {

  handleScroll = (e) => {
    <Link to={Routes.CONTACT}>Contact</Link>
    console.log("yess");
  }

  render() {
    return (
      <div className="app">
        <section className="header">
          <Brand className="brand" />
          <Topnav className="topnav" />
        </section>
        <section className="main" onScroll={this.handleScroll}>
          <Route exact path={Routes.HOME} id="home" className="main-item" component={Home} />
          <Route path={Routes.ABOUT} id="about" className="main-item" component={About} />
          <Route path={Routes.CAREERS} id="careers" className="main-item" component={Careers} />
          <Route path={Routes.CONTACT} id="contact" className="main-item" component={Contact} />
        </section>
        <section className="footer">
          <Bottomnav className="bottomnav" />
        </section>
      </div>
    );
  }
}

export default App;
