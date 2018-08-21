import React, { Component } from "react";

import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import App from "./App";
  import Face from "./Face";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/App">Register</NavLink></li>
            <li><NavLink to="/Face">Recognise</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/App" component={App}/>
            <Route path="/Face" component={Face}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;