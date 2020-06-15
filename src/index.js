import React from 'react';
import ReactDOM from 'react-dom';
import {Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './Header.js';
import $ from "jquery"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      civil: []
    };
  }
  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            civil: result.civilizations           
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  displayOptions = () => {
    let empires = []
    if (this.state.civil != null) {
      for (let i = 0; i < this.state.civil.length; i++) {
        let names = []
        let army = []
        let teamBonus = []
        names.push(`${this.state.civil[i].name}`)
        army.push(`${this.state.civil[i].army_type}`)
        teamBonus.push(`${this.state.civil[i].team_bonus}`)
        empires.push(<div className="civil" id = {i} key={i}><h2>{names}</h2><h5>Specialty: {army}</h5>
        <h5>Team bonus: {teamBonus}</h5> <Button  onClick={() => this.handleClick(i) } variant="success">Add</Button>{' '}
        </div>)
      }
      return empires
    }
  }
  handleClick = (id) => {
    let list = JSON.parse(localStorage.getItem("civil") || "[]");
    list.push(id)
    console.log(list)
    localStorage.setItem("civil", JSON.stringify(list));
    list = []
    console.log(list)
  }
  displayIntro = () => {
    let intro = []
    intro.push(
    <div className="intro" key="intro">
      <h1 id="welcome">Welcome to Age Of Empires 2</h1> <br></br>
      <h5>Add civilizations to your library</h5>
    </div>)
    return intro
  }
  render() {
    return (<div className="title"> 
    <Header />
    {this.displayIntro()}
    {this.displayOptions()}
    </div>  
    )
    
  }
  
}


ReactDOM.render(<Main />, document.getElementById('root'));
