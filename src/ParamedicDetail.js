import React, { Component } from 'react';
import axios from 'axios';
import settings from './settings.json'

class ParamedicDetail extends Component {

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

  render() {
    let photoSrc=settings.server + '/known/' + this.state.photoId + '.jpg'

    let alert = []
    if(this.state.bloodType){
      alert.push(
        <div class="alert alert-danger" role="alert">Blood Type: {this.state.bloodType} </div>
      )
    }
    if(this.state.alergens){
      alert.push(
        <div class="alert alert-danger" role="alert">Allergens:  {this.state.alergens}</div>
      )
    }
    console.log(alert)

    return (
      <div>
        <div className="card">
          <h5 className="card-header bg-danger">Paramedic Details</h5>
          <div className="card-body">
              <div className="row user-detail">
                  <div className="col-lg-12 col-sm-12 col-12">
                      <img src={photoSrc} className="rounded-circle img-thumbnail"/>
                      <h5>{this.state.firstName} {this.state.lastName}</h5>
                      <hr/>
                      {alert}
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ParamedicDetail;
