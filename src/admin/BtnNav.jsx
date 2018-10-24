import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';

class BtnNav extends Component {
  render() {
    return (
      <div >
        <Link to="/admin"><Button className='mr-4 mt-4 mb-4' color="primary" size="lg">Espace Voyages</Button></Link>
        <Link to="/adminclient"><Button color="primary" size="lg">Espace clients</Button></Link>
      </div>
    );
  }
}

export default BtnNav;
