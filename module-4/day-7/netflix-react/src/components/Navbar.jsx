import React, { Component } from "react";
import { Navbar, Nav, InputGroup, FormControl } from "react-bootstrap";
import { Link, withRouter } from 'react-router-dom'

class NetflixNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
    };
  }

  searchStringHandler = (e) => {
    if (e.keyCode === 13) {
      // WHEN ENTER KEY IS PRESSED
      this.props.showSearchResult(this.state.searchString);
    } else {
      this.setState({ searchString: e.currentTarget.value });
    }
  };

  render() {
    return (
     
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#221f1f" }}>
        
        <Navbar.Brand href="/">
          
          <img
            src="assets/logo.png"
            alt="logo"
            style={{ width: "100px", height: "55px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/home"
              className={
                this.props.location.pathname === '/home'
                  ? "nav-link active"
                  : "nav-link"
              }>
              Home
            </Link>
            
            <Link to="/tv-shows"
              className={
                this.props.location.pathname === '/tv-shows'
                  ? "nav-link active"
                  : "nav-link"
              }>
              Tv <i class="fas fa-cloud-showers-heavy    "></i>
            </Link>
            <Link to="/movies"
              className={
                this.props.location.pathname === '/movies'
                  ? "nav-link active"
                  : "nav-link"
              }>
              Movies
            </Link>
            <Link to="/recently-added"
              className={
                this.props.location.pathname === '/recently-added'
                  ? "nav-link active"
                  : "nav-link"
              }>
              Recently Added
            </Link>
            <Link to="/my-list"
              className={
                this.props.location.pathname === '/my-list'
                  ? "nav-link active"
                  : "nav-link"
              }>
              My List
            </Link>

          </Nav>
          
          <span className="d-none d-md-flex align-items-center">
            <InputGroup className="icons">
              <FormControl
                placeholder="Search and press enter"
                aria-label="search"
                aria-describedby="basic-addon1"
                onKeyDown={this.searchStringHandler}
                onChange={this.searchStringHandler}
                value={this.state.searchString}
              />
            </InputGroup>
            <div id="kids">KIDS</div>
            <i className="fa fa-bell icons"></i>
            <i className="fa fa-user icons"></i>
          </span>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default withRouter(NetflixNavbar);

