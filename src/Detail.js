import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import settings from './settings.json'

class Detail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      occupation: '',
      address: '',
      homePhone: '',
      nextOfKinName: '',
      nextOfKinPhone: '',
      alergens: '',
      vacinations: '',
      habits: '',
      medicalHistory: '',
      familyHistory: '',
      response: [],
      bloodType: '',
      photoId: ''
    };
    this.isNew = false
    this.etag = null
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let id=this.props.match.params.id
    axios.get(settings.server + '/data/people/' + id)
      .then(result => {
        console.log("result.bloodType:"+result.data.bloodType)
        this.setState(result.data);
        this.etag = result.data._etag;
        console.log("result.data._etag:"+result.data._etag)
        console.log("this._etag:"+this.etag)
      }).catch(error => {
        console.log(error)
        if (error.response.status === 404) {
          this.isNew = true          
          this.setState({photoId:id})
          console.log("this.state.photoId:"+this.state.photoId)
        }
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]:event.target.value
    })
    event.preventDefault();
  }

  // renderReponse = (data) => {
  //     this.setState({
  //         response: data,
  //     });
  // }

  handleSubmit(event) {
    event.preventDefault();
    let data = this.state
    delete data.response
    if(this.isNew){
      axios.post(settings.server + '/data/people/', data)
      .then(result => {
        console.log(result)
      })
    } else {
      console.log(data)
      console.log(this.etag)
      delete data._created
      delete data._etag
      delete data._links
      delete data._updated
      $.ajax({
          type: "PATCH",
          url: settings.server + '/data/people/' + data._id,
          crossDomain: true,
          dataType: 'json',
          data: data,
          headers: {
            'If-Match':this.etag
          }
      });
    }
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
          <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter your first name" value={this.state.firstName} onChange={this.handleChange} />
        </div>
      <div className="form-group">
        <label htmlFor="lastName">Last name</label>
        <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter your last name" value={this.state.lastName} onChange={this.handleChange} />
      </div>
      <div className="form-group">
      <label htmlFor="dateOfBirth">Date of birth</label>
        <input type="text" className="form-control" id="dateOfBirth" name="dateOfBirth" placeholder="Enter your date of birth" value={this.state.dateOfBirth} onChange={this.handleChange} />
      </div>
      <div className="form-group">
      <label htmlFor="occupation">Occupation</label>
        <input type="text" className="form-control" id="occupation" name="occupation" placeholder="Enter your occupation" value={this.state.occupation} onChange={this.handleChange} />
      </div>
      <div className="form-group">
      <label htmlFor="address">Address</label>
        <input type="text" className="form-control" id="dateOfBirth" name="dateOfBirth" placeholder="Enter your address" value={this.state.value} onChange={this.handleChange} />
      </div>
      <div className="form-group">
      <label htmlFor="homePhone">Home phone</label>
        <input type="text" className="form-control" id="homePhone" name="homePhone" placeholder="Enter your home phone" value={this.state.homePhone} onChange={this.handleChange} />
      </div>
      <div className="form-group">
      <label htmlFor="nextOfKinName">Next of Kin</label>
        <input type="text" className="form-control" id="nextOfKinName" name="nextOfKinName" placeholder="Enter your Next of Kin" value={this.state.nextOfKinName} onChange={this.handleChange} />
      </div>
      <div className="form-group">
      <label htmlFor="nextOfKinPhone">Next of Kin phone</label>
        <input type="text" className="form-control" id="nextOfKinPhone" name="nextOfKinPhone" placeholder="Enter your Next of Kin phone" value={this.state.nextOfKinPhone} onChange={this.handleChange} />
      </div>
      <h5 className="card-title bg-green">Medical</h5>
      <div className="form-group">
        <label htmlFor="bloodType">Blood type</label>
        <select className="form-control" id="bloodType" name="bloodType" value={this.state.bloodType} onChange={this.handleChange}>
          <option value="O+">O-positive</option>
          <option value="O-">O-negative</option>
          <option value="A+">A-positive</option>
          <option value="A-">A-negative</option>
          <option value="B+">B-positive</option>
          <option value="B-">B-negative</option>
          <option value="AB+">AB-positive</option>
          <option value="AB-">AB-negative</option>
        </select>
      </div>
      <div className="form-group">
      <label htmlFor="alergens">allergens</label>
        <input type="text" className="form-control" id="alergens" name="alergens" placeholder="Enter your allergens" value={this.state.alergens} onChange={this.handleChange} />
      </div>
      <div className="form-group">
      <label htmlFor="vacinations">Vaccinations</label>
        <input type="text" className="form-control" id="vacinations" name="vacinations" placeholder="Enter your vaccinations" value={this.state.vacinations} onChange={this.handleChange} />
      </div>
      <div className="form-group">
      <label htmlFor="habits">Habits</label>
        <input type="text" className="form-control" id="habits" name="habits" placeholder="Enter your habits" value={this.state.habits} onChange={this.handleChange} />
      </div>
      <div className="form-group">
      <label htmlFor="medicalHistory">Medical history</label>
        <input type="text" className="form-control" id="medicalHistory" name="medicalHistory" placeholder="Enter your medical history" value={this.state.value} onChange={this.handleChange} />
      </div>
      <div className="form-group">
      <label htmlFor="familyHistory">Family history</label>
        <input type="text" className="form-control" id="familyHistory" name="familyHistory" placeholder="Enter your family history" value={this.state.familyHistory} onChange={this.handleChange} />
      </div>
      <button type="submit" className="btn btn-success">Save</button> 
    </form>
    </div>
    </div>
    );
  }
}

export default Detail;
