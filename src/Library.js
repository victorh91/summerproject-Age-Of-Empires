import React from 'react';
import ReactDOM from 'react-dom';
import {Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './Header.js';
import Main from './Mainpage.js';
import displayIntro from './intro.js'
import App from './App.js'
import $, { extend } from "jquery"
import {Howl, Howler} from "howler";
import voice from './Wololo.mp3';
import ReactPlayer from 'react-player';
import Video from './Video.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Library extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
            showVideo: false
       };
    }
    getLocalStorage = () => {
        let getItems =  JSON.parse(localStorage.getItem("civil") || "[]");

        const newItems = new Set(getItems);
        if (this.props.list.length >= 1) {
            let empires = []
            for (let key of newItems) {
                let names = []
                let army = []
                let teamBonus = []
                names.push(`${this.props.list[key].name}`)
                army.push(`${this.props.list[key].army_type}`)
                teamBonus.push(`${this.props.list[key].team_bonus}`)
                empires.push(<div className="civil" id = {key} key={key}><h2>{names}</h2><h5>Specialty: {army}</h5>
                <h5>Team bonus: {teamBonus} </h5> <Button  onClick={() => this.handleClick("start")} variant="success">Play</Button>{' '}
                <Button onClick={() => (this).deleteButton(this.props.list[key].id)} variant="danger">Delete</Button>{' '}</div>)
        }  return empires
        } 
        else {
            console.log("You failed as a human")
        }
    }

    deleteButton = (name) => {
        let compareValue = name -1
        let civil = JSON.parse(localStorage.getItem("civil"));
        let unique = new Set(civil)
        let newList = []
        for(let x of unique) {
            newList.push(x)
            }   
        for (var i = 0; i< newList.length; i++) {
            if (newList[i] == compareValue) {
                newList.splice(i, 1);
            }
        localStorage.setItem("civil", JSON.stringify(newList));
        window.location.reload();
        }
    }
    handleClick = (value) => {
            if(value === "start") {
            const sound = new Howl({
                src: voice
                });
              // Play the sound.
              sound.play();
              // Change global volume.
              Howler.volume(1);

              this.setState({ showVideo: !this.state.showVideo })
        } else return null;
        
    }

    render() {
        const video = this.state.showVideo ? <Video /> : null
        if(video != null) {
            return (
                <div>
                {video}
                </div>
            )
        }
        else {
            return (
                <div>
                {this.getLocalStorage()}
                </div>  )
        }
      

}
}
export default Library;