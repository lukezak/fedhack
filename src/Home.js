import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>FEDHACK</h2>
        <h3>Project</h3>
        Facial biometrics
        <h3>Usage</h3>
        <ol>
          <li>Register your face.</li>
          <li>Detect and verify your face using facial recognition.</li>
        </ol>
        <h3>Tech stack</h3>
        <p>React, Python, Dlib (facial recognition) hosted on AWS cloud over encrypted comms.</p>
        <h3>Team</h3>

        <h3>Please vote for us!</h3>
      </div>
    );
  }
}
 
export default Home;