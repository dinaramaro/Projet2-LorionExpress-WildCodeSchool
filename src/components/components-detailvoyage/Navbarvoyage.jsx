import React, { Component } from 'react';
import {
  Row,
  Col,
  Container,
} from 'reactstrap';
import './Navbarvoyage.css';
import Formulaire from '../Formulaire';
import Moment from 'react-moment';
import "moment-timezone";

class Navbarvoyage extends Component {

  render() {
    const { title, prix, datedepart, dateretour } = this.props
    return (
      <Container className="pad">
        <Row>
          <Col lg="3" sm="6">
            <div className="center title brand">{title}</div>
          </Col>
          <Col lg="3" sm="6">
            <div className="center date">Du <Moment format="DD/MM/YYYY">{datedepart}</Moment> au <Moment format="DD/MM/YYYY">{dateretour}</Moment></div>
          </Col>
          <Col lg="3" sm="6">
            <div className="center price">{prix} €</div>
          </Col>
          <Col lg="3" sm="6">
            <Formulaire id={this.props.id}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Navbarvoyage;