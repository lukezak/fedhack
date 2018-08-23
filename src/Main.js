import React, { Component } from "react";

import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import './bootstrap.mod.css';
  import App from "./App";
  import Face from "./Face";
  import Detail from "./Detail";
  import Help from "./Help";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <div className="content">
            <div className="logo-text">
              <a href="#/">
                <h1 className="text-center">BIOMEDIC</h1>
                <h5 className="text-center">SNAP TO SAVE LIVES</h5>
              </a>
            </div>
            <Route exact path="/" component={Face}/>
            <Route path="/App" component={App}/>
            <Route path="/Detail" component={Detail}/>
            <Route path="/Help" component={Help}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;