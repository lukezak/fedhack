import React, { Component } from 'react';
import axios from 'axios';
import Webcam from "react-webcam";
import './App.css';
import clickSound from './clickSound.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'Name',
      response: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

renderReponse = (data) => {
    this.setState({
        response: data,
    });
}

setRef(webcam) {
    this.webcam = webcam;
}

capture = () => {
  const imageSrc = this.webcam.getScreenshot();
  let audio = new Audio('data:audio/mp3;base64,' + clickSound.base64);
  audio.play();
  const formData = new FormData()
  formData.append('image', imageSrc)
  formData.append('user', this.state.value)
  axios.post('https://www.fedhackbackend.net/register', formData)
  .then(result => {
    this.renderReponse(result);
  })
};

handleChange(event) {
  this.setState({value: event.target.value});
}

  render() {
    const videoConstraints = {
      facingMode: "user"
    };
    
    return (
      <div className="card">
      <h5 className="card-header">Register</h5>
      <div className="card-body text-center">
      <p className="card-text no-margin">Lorem ipsum text need to add stuff here.</p>
        <Webcam
                audio={false}
                height={300}
                width={295}
                ref={(event) => this.setRef(event)}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
            />

            <button className="btn btn-success btn-circle btn-xl" onClick={this.capture}><i class="fas fa-camera"></i></button>
            <div><p>{this.state.response.data}</p></div>
        </div>
      </div>
    );
  }
}

export default App;
