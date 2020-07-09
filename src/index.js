import React from 'react';
import ReactDOM from 'react-dom';
import {Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './Header.js';
import DisplayIntro from './intro.js'
import App from './App.js'
import $ from "jquery"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Start extends React.Component {
  render() {
    return (<div className="title">
    <App /> 
    </div>  
    )
  }
}


ReactDOM.render(<Start />, document.getElementById('root'));
