import React, {Component} from 'react'
import {Navbar, Nav} from 'react-bootstrap';
class NavBar extends Component {
    render(){
return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">StriveRestaurant</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Menu</Nav.Link>
      <Nav.Link href="#link">Reservation</Nav.Link>
      <Nav.Link href="#link">Our Location</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
    }

}
export default NavBar;