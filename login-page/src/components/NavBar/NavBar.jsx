import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export class FusionNavBar extends Component {
    render() {
        return(
          <div className="nav-container">
            <Navbar variant="dark">
    <Navbar.Brand href="/">FusionTracker</Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/logon">Login/Logout</Nav.Link>
      <Nav.Link href="/anotha">Pricing</Nav.Link>
      <Nav.Link href="andanotha">Preferences</Nav.Link>
    </Nav>
  </Navbar>
  </div>
        ) 
  }
  }
  
  export default FusionNavBar;