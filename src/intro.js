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

const DisplayIntro = () => {
    let intro = []
    intro.push(
    <div className="intro" key="intro">
      <h1 id="welcome">Welcome to Age Of Empires 2</h1> <br></br>
      <h5>Add civilizations to your library</h5>
    </div>)
    return intro
}

export default DisplayIntro;