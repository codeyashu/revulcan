{/* <section className="main">
  <div className="test"></div>
  <div id="3" className="test">   ABOUT</div>
  <div className="test"></div>
  <div id="4" className="test">CONTACT</div>
</section> */}


/* .main {
  background-color: #444444;
  margin-bottom: auto;
  display: flex;
  min-height: 300px;
  min-width: 100%;
  overflow-x: auto;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.test {
  background-color: #e74c3c;
  min-width: 300px;
  margin: 5px;
} */

/* class Topnav extends Component {
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
        <h3><a id="1" className={this.state.selected === "1" ? "active" : "home"} onClick={(e) => {this.click(e)}} href="/">Home</a></h3>
        <h3><a id="2" className={this.state.selected === "2" ? "active" : "about"} onClick={(e) => {this.click(e)}} href="/#about">About</a></h3>
        <h3><a id="3" className={this.state.selected === "3" ? "active" : "careers"} onClick={this.click} href="/#careers">Careers</a></h3>
        <h3><a id="4" className={this.state.selected === "4" ? "active" : "contact"} onClick={this.click} href="/#contact">Contact</a></h3>
      </div>
    );
  }
} */