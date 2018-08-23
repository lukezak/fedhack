import React, { Component } from 'react';
import axios from 'axios';
class Detail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      dateOfBirth: null,
      occuptaion: null,
      address: null,
      homePhone: null,
      nextOfKin: null,
      nextofKinPhone: null,
      allergens: null,
      vaccinations: null,
      habits: null,
      medicalHistory: null,
      familyHistory: null,
      response: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('http://172.105.233.84:5000/data/people/')
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
    <div className="card">
    <h5 className="card-header">Details</h5>
    <div className="card-body">
    <form onSubmit={this.handleSubmit}>
    <h5 className="card-title bg-green">Personal</h5>
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
        <input type="text" className="form-control" id="dateOfBirth" placeholder="Enter your date of birth" value={this.state.value} onChange={this.handleChange} />
      </div>
      <div className="form-group">
      <label htmlFor="occuptaion">Occupation</label>
        <input type="text" className="form-control" id="occuptaion" placeholder="Enter your occuptaion" value={this.state.value} onChange={this.handleChange} />
      </div>
      <div className="form-group">
      <label htmlFor="address">Address</label>
        <input type="text" className="form-control" id="dateOfBirth" placeholder="Enter your address" value={this.state.value} onChange={this.handleChange} />
      </div>
      <div className="form-group">
      <label htmlFor="homePhone">Home phone</label>
        <input type="text" className="form-control" id="homePhone" placeholder="Enter your home phone" value={this.state.value} onChange={this.handleChange} />
      </div>
      <div className="form-group">
      <label htmlFor="nextOfKin">Next of Kin</label>
        <input type="text" className="form-control" id="nextOfKin" placeholder="Enter your Next of Kin" value={this.state.value} onChange={this.handleChange} />
      </div>
      <div className="form-group">
      <label htmlFor="nextOfKinPhone">Next of Kin phone</label>
        <input type="text" className="form-control" id="nextOfKinPhone" placeholder="Enter your Next of Kin phone" value={this.state.value} onChange={this.handleChange} />
      </div>
      <h5 className="card-title bg-green">Medical</h5>
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
      <label htmlFor="allergens">Allergens</label>
        <input type="text" className="form-control" id="allergens" placeholder="Enter your allergens" value={this.state.value} onChange={this.handleChange} />
      </div>
      <div className="form-group">
      <label htmlFor="vaccinations">Vaccinations</label>
        <input type="text" className="form-control" id="vaccinations" placeholder="Enter your vaccinations" value={this.state.value} onChange={this.handleChange} />
      </div>
      <div className="form-group">
      <label htmlFor="habits">Habits</label>
        <input type="text" className="form-control" id="habits" placeholder="Enter your habits" value={this.state.value} onChange={this.handleChange} />
      </div>
      <div className="form-group">
      <label htmlFor="medicalHistory">Medical history</label>
        <input type="text" className="form-control" id="medicalHistory" placeholder="Enter your medical history" value={this.state.value} onChange={this.handleChange} />
      </div>
      <div className="form-group">
      <label htmlFor="familyHistory">Family history</label>
        <input type="text" className="form-control" id="familyHistory" placeholder="Enter your family history" value={this.state.value} onChange={this.handleChange} />
      </div>
      <button type="submit" className="btn btn-success">Save</button> 
    </form>
    </div>
    </div>
    );
  }
}

export default Detail;
