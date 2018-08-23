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
          <ul className="header">
            <li><NavLink to="/App">Register</NavLink></li>
            <li><NavLink to="/Face">Recognise</NavLink></li>
            <li><NavLink to="/Detail">Detail</NavLink></li>
          </ul>
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