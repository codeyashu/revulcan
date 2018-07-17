import React, { Component } from 'react';
import './Topnav.css';

class Topnav extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: "1"};
  }

  click = (e) => {
    e.preventDefault();
    this.setState({selected: e.currentTarget.id})
  }

  render() {    
    return (
      <div className="topnav">
        <h3><a id="1" className={this.state.selected === "1" ? "active" : "home"} onClick={this.click} href="/">Home</a></h3>
        <h3><a id="2" className={this.state.selected === "2" ? "active" : "about"} onClick={this.click} href="/about">About</a></h3>
        <h3><a id="3" className={this.state.selected === "3" ? "active" : "careers"} onClick={this.click} href="/careers">Careers</a></h3>
        <h3><a id="4" className={this.state.selected === "4" ? "active" : "contact"} onClick={this.click} href="/contact">Contact</a></h3>
      </div>
    );
  }
}

export default Topnav;
