import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
import './Card.css';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import "moment-timezone";

const CardsDestination = (props) => {
  return (
<Col xs="12" md="6" lg="4" className="pt-2 pb-2">
    <Card className="text-center shadow">
      <CardTitle className="mt-1 titre">{props.title}</CardTitle>
      <CardSubtitle className="mb-1">Du <Moment format="DD/MM/YYYY">{props.datedepart}</Moment> au <Moment format="DD/MM/YYYY">{props.dateretour}</Moment></CardSubtitle>
      
        <div className="image">
          <CardImg width="100%" src={props.image} alt={props.lieu} className="image-zoom" />
        </div>
     
      <CardBody className="pb-0">
        <CardText className="text-left">{props.description}</CardText>
        <div className="align-items-center">
          <Link to={`/detailvoyage/${props.id}`}>
            <Button className="button" color="info">Plus d'infos</Button> 
          </Link>
        <p className="prix">{props.prix} €</p>
        </div>
      </CardBody>
    </Card>
</Col>
  );
};

export default CardsDestination;