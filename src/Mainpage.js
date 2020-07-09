import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './Header.js';
import DisplayIntro from './intro.js'
import $ from "jquery"
import AlertDismissibleExample from './alert.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { render } from '@testing-library/react';
let global = null
class Main extends React.Component { 
  constructor(props) {
    super(props);
      this.state = {
        viewAlert: false
   };

  }
  displayOptions = () => {
    let empires = []
    if (this.props.list != null) {
      for (let i = 0; i < this.props.list.length; i++) {
        let names = []
        let army = []
        let teamBonus = []
        names.push(`${this.props.list[i].name}`)
        army.push(`${this.props.list[i].army_type}`)
        teamBonus.push(`${this.props.list[i].team_bonus}`)
        empires.push(<div className="civil" id = {i} key={i}><h2>{names}</h2><h5>Specialty: {army}</h5>
        <h5>Team bonus: {teamBonus}</h5> 
        <Button  
        onClick={() => {this.handleClick(i, this.props.list[i].name); this.stateSetter(); global = this.props.list[i].name}  }
        variant="success">Add</Button> {' '}
        </div>)
        
      }
      return empires
    }
  }
   stateSetter = () => {
    console.log("mother")
    console.log(this.state)
    this.setState({ viewAlert: !this.state.viewAlert })
    console.log(this.state)
  }
 
  handleClick = (id) => {
    let list = JSON.parse(localStorage.getItem("civil") || "[]");
    list.push(id);
    localStorage.setItem("civil", JSON.stringify(list));
    list = []
  }

  render() {
    const alert = this.state.viewAlert ? <AlertDismissibleExample name={global} x={this.stateSetter} /> : null
    return (
      <div> 
      {alert}
      <DisplayIntro />
      {this.displayOptions()}
      </div>
      )
  }
  
}
  
  export default Main;