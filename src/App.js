import React from 'react';
import ReactDOM from 'react-dom';
import {Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './Header.js';
import displayIntro from './intro.js'
import Main from './Mainpage.js'
import Library from './Library.js'
import $ from "jquery"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends React.Component {
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
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/library" render={props => <Library {...props} list={this.state.civil}/>}/>
                    <Route exact path="/" render={props => <Main {...props} list={this.state.civil} /> } />
                </Switch>
            </Router>
        )
    }
}
