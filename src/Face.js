import React, { Component } from "react";
import axios from 'axios';
import Webcam from "react-webcam";
import clickSound from './clickSound.json';
import settings from './settings.json'
 
class Face extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      response: [],
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
  axios.post(settings.server + '/auth', formData)
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
    let spinner;

    if (this.state.loading) {
      content = ''
      spinner = <img className="screen-resize" src="click.gif"></img>
    }
    else {
      content = this.state.response.data
      spinner = <img className="screen-resize" src="camera-box.png"></img>
    }

    const videoConstraints = {
      facingMode: "user"
    };
    return (
      <div>
        <div className="camera-container">
          <div className="overlay-camera-box-outer">
            <div className="overlay-camera-box-middle">
              <div className="overlay-camera-box-inner">
                {spinner}
              </div>
            </div>
          </div>
          <div className="underlay overlay-camera-box-outer">
            <div className="overlay-camera-box-middle">
              <div className="overlay-camera-box-inner">
                <img className="screen-resize" src="logo-sm.png"></img>
              </div>
            </div>
          </div>

          <Webcam
              audio={false}
              height={300}
              width={295}
              ref={(event) => this.setRef(event)}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              />
          <div className="overlay">
            <div className="row">
              <div className="loading">
                <p className="text-center">
                  {content}
                </p>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-success btn-circle btn-xl" onClick={this.capture}><i className="fas fa-camera"></i></button>
              <br/>
              <a className="help-icon" href="#/Help"><i className="fas fa-3x fa-info-circle"></i></a>
            </div>       
          </div>
        </div>
      </div>
    );
  }
}

 
export default Face;