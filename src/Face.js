import React, { Component } from "react";
import axios from 'axios';
import Webcam from "react-webcam";
 
class Face extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      response: []
    };
  }

  setRef(webcam) {
    this.webcam = webcam;
}

renderReponse = (data) => {
  this.setState({
      response: data.response,
  });
  console.log(data)
}

capture = () => {
  const imageSrc = this.webcam.getScreenshot();
  this.setState({loading:true})
  const formData = new FormData()
  formData.append('image', imageSrc)
  axios.post('http://172.105.233.84:5000/auth', formData)
  .then(result => {
      this.props.history.push({
        pathname: '/Detail',
        search: '?id=' + result.data,
        })
    }).catch(error => {
      console.log(error.response.data)
      if (error.response.status === 400)
      {
        this.renderReponse(error);
        this.setState({loading:false})
      }
      else {
          this.props.history.push({
            pathname: '/App'
      })
    }
  });
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
      facingMode: "environment"
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

            <button className="btn btn-primary" onClick={this.capture}>Detect</button>
            <div className="loading">
              <p>
              {content}
              </p>
            </div>

      </div>
    );
  }
}
 
export default Face;