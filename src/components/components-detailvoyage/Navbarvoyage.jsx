import React, {Component} from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  } from 'reactstrap';
  import './Navbarvoyage.css';
  import Formulaire from '../Formulaire';
  import Moment from 'react-moment';
  import "moment-timezone";

class Navbarvoyage extends Component {
   
  render() {
    const {title, prix, type, datedepart, dateretour} = this.props
    return (
      <Container className="pad">
        <Navbar light expand="md nav" >
          <NavbarBrand className="brand">{title}</NavbarBrand>         
            <Nav className="ml-auto" navbar>
              <NavItem className="center date">
                  Du <Moment format="DD/MM/YYYY">{datedepart}</Moment> au <Moment format="DD/MM/YYYY">{dateretour}</Moment>
              </NavItem>
              <NavItem className="center price">
                {prix} €
              </NavItem>
              <Formulaire />             
            </Nav>
        </Navbar>
      </Container>
    );
  }
}

export default Navbarvoyage;