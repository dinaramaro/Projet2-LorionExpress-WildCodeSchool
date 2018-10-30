import React, { Component } from 'react';
import './PhotoVoyage.css';


class PhotoVoyage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="div">  
      <img src={this.props.image} alt="voyage" className="photo img-fluid" responsive/>
      </div>
     );
  }
}
 
export default PhotoVoyage;