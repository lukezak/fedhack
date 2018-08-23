import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from "react";

import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import App from "./App";
  import Face from "./Face";
  import Detail from "./Detail";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <span className="navbar-brand">BIOMEDIC</span>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li><NavLink exact className="nav-link" to="/">Recognise</NavLink></li>
            <li><NavLink className="nav-link" to="/App">Register</NavLink></li>
        </ul>
        </div>
        </nav>
          <div className="content">
            <Route exact path="/" component={Face}/>
            <Route path="/App" component={App}/>
            <Route path="/Detail" component={Detail}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;