import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link, withRouter } from 'react-router-dom'


const NavBar = (props) => (
  <Navbar variant="dark" expand="lg">
    <Navbar.Brand href="#home">
      <Image
        src="/assets/logo.png"
        style={{ width: "100px", height: "55px" }}
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Link to="/home"
       className={props.location.pathname === '/home'? "nav-link active": "nav-link"}>Home</Link>
         <Link to="/register"
       className={props.location.pathname === '/register'? "nav-link active": "nav-link"}>Register</Link>

      </Nav>
      <div className="d-flex my-3 my-lg-0">
        <i className="fa fa-search icons mr-3"></i>
        <div id="kids">KIDS</div>
        <i className="fa fa-bell icons mx-3"></i>
        <i className="fa fa-user icons mx-3"></i>
      </div>
    </Navbar.Collapse>
  </Navbar>
);
export default withRouter(NavBar);



// <Nav.Link href="./components/Home.jsx">TV Shows</Nav.Link>
//         <Nav.Link href="#link">Movies</Nav.Link>
//         <Nav.Link href="#link">Recently Added</Nav.Link>
//         <Nav.Link href="#link">My List</Nav.Link>
//         <Nav.Link href="">Register</Nav.Link> 