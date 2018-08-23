import React, { Component } from 'react';


class Help extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'Name',
      response: [],
    };
  }

   render() {
   	return (
      <div className="Help">
      	<img className="screen-resize-full" src="poster.jpg"></img>
      </div>
    );
   }
}
export default Help;