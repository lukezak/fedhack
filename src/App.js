import React, { Component } from 'react';
import axios from 'axios';
import Webcam from "react-webcam";
import './App.css';

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

  const formData = new FormData()
  formData.append('image', imageSrc)
  formData.append('user', this.state.value)
  axios.post('http://13.210.132.97/register', formData)
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
      <div className="App">
        <Webcam
                audio={false}
                height={300}
                width={295}
                ref={(event) => this.setRef(event)}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
            />
            <p><input type="text" name="user" value={this.state.value} onChange={this.handleChange} /></p>
            <button onClick={this.capture}>Capture</button>
            <div><p>{this.state.response.data}</p></div>
      </div>
    );
  }
}

export default App;
