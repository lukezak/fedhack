import React, { Component } from "react";
import axios from 'axios';
import Webcam from "react-webcam";
 
class Face extends Component {

  constructor(props) {
    super(props);
    this.state = {
      response: [],
      loading: false
    };
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
  this.setState({loading:true})
  const formData = new FormData()
  formData.append('image', imageSrc)
  axios.post('https://www.fedhackbackend.net/face', formData)
  .then(result => {
    this.renderReponse(result);
    this.setState({loading:false})
  })
};

  render() {
    let content;

    if (this.state.loading) {
      content = <span>Verifying...</span>
    }
    else {
      content = this.state.response.data
    }

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

            <button onClick={this.capture}>Detect</button>
            <div>
              <p>
              {content}
              </p>
            </div>
      </div>
    );
  }
}
 
export default Face;