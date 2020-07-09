import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import logo from './images.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Header = () => (
    <header>
    <Navbar className ="color-nav" collapseOnSelect expand="lg" >
      <Navbar.Brand as={Link} to="/" href="aoe.jpg">
      <img
        img src={logo} 
        width="80"
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Main page</Nav.Link>
          <Nav.Link as={Link} to="/library">Library</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </header>
);

export default Header;