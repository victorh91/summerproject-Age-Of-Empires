
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Alert, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './Header.js';
import DisplayIntro from './intro.js'
import App from './App.js'
import Main from './Mainpage';

const AlertDismissibleExample = (props) => {
    const [show, setShow] = useState(true);
    let x = props.name
    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>{x} saved</Alert.Heading>
          <p>
            Take a look at the library page to see which civilizations you have saved
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => {setShow(false); props.x()}}
             variant="outline-success" >
            Close alert
            </Button>
          </div>
        </Alert>
       
      </>
    );
    
    
  }
  
 
  export default AlertDismissibleExample;