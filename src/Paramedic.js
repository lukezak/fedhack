import React, { Component } from 'react';
import axios from 'axios';
import Webcam from "react-webcam";
import clickSound from './clickSound.json';

class Paramedic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'Name',
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
  let audio = new Audio('data:audio/mp3;base64,' + clickSound.base64);
  audio.play();
  this.setState({loading:true})
  const formData = new FormData()
  formData.append('image', imageSrc)
  axios.post('http://172.105.233.84:5000/auth', formData)
  .then(result => {
      this.props.history.push({
        pathname: '/Detail/' + result.data,
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
      <div className="Paramedic">
        <div className="card">
          <h5 className="card-header bg-danger">Recognise Patient</h5>
          <div id="paramedic-card-body" className="card-body text-center">
            <Webcam
              className="center"
              audio={false}
              height={325}
              width={325}
              ref={(event) => this.setRef(event)}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
            <button className="btn btn-danger btn-circle btn-xl" onClick={this.capture}><i className="fas fa-camera"></i></button>
            <p className="card-text no-margin">Scan face and access core medical information about the person.</p>
            <div className="loading"> 
              <p>
              {content}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Paramedic;