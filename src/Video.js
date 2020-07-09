import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {Alert, Button } from 'react-bootstrap';
const Video = () => {
    const [show, setShow] = useState(true);
    if(show===true) {
        return (
            <div className="video">
            <ReactPlayer
            width='100%'
            height='600px'
            controls
            playing={true}
            url='https://www.youtube.com/watch?v=ow4cC-Cz5l8'
            />
             <Button onClick={() => {setShow(false)}} variant="danger" size="lg">
             Close
            </Button>{' '}
            </div>
        )
    }
    else {
        window.location.reload();
        return null
    }
   
}

export default Video;