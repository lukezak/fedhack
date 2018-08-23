import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import axios from 'axios';
import './index.css';


class Detail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      dateOfBirth: null,
      response: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('https://localhost:3000/api/')
      .then(response => response.json())
      .then(result => {
        this.setState({ 
          firstName: result.data1,
          lastName: result.data2,
          dateOfBirth: result.data3,
        });
      });
  }

renderReponse = (data) => {
    this.setState({
        response: data,
    });
}

handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  
  axios.post('https://www.fedhackbackend.net/register', data)
  .then(result => {
    //if ok route somewhere
  })
}

  render() {
    return (
      
    <form onSubmit={this.handleSubmit}>
    <h3>Personal details</h3>
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" value={this.state.value} onChange={this.handleChange} />
        </div>
      <div className="form-group">
        <label htmlFor="lastName">Last name</label>
        <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" value={this.state.value} onChange={this.handleChange} />
      </div>
      <div className="form-group">
      <label htmlFor="dateOfBirth">Date of birth</label>
        <input type="password" className="form-control" id="dateOfBirth" placeholder="Enter your date of birth" value={this.state.value} onChange={this.handleChange} />
      </div>
      <h3>Medical details</h3>
      <div className="form-group">
        <label htmlFor="bloodType">Blood type</label>
        <select className="form-control" id="bloodType">
          <option>O-positive</option>
          <option>O-negative</option>
          <option>A-positive</option>
          <option>A-negative</option>
          <option>B-positive</option>
          <option>B-negative</option>
          <option>AB-positive</option>
          <option>AB-negative</option>
        </select>
      </div>
      <div className="form-group">
        
      </div>
      <button type="submit" className="btn btn-primary">Submit</button> 
    </form>
        
    );
  }
}

export default Detail;
