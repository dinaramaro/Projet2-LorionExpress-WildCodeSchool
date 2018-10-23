import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
import './Card.css';
import {Link} from 'react-router-dom';

const CardsDestination = (props) => {
  return (
<Col xs="12" md="6" lg="4" className="pt-2 pb-2">
    <Card className="text-center">
      <CardTitle>{props.cardtitle}</CardTitle>
      <CardSubtitle>{props.cardsubtitle}</CardSubtitle>
      
        <div className="image">
          <CardImg width="100%" src={props.photo} alt="Paris" className="image-zoom" />
        </div>
     
      <CardBody h-100>
        <CardText className="text-left">{props.cardtext}</CardText>
        <div className="align-items-center">
        <Link to="/detailvoyage">
        <Button className="button">Plus d'infos</Button> 
        </Link>
        <p className="prix">{props.prix}</p></div>
      </CardBody>
    </Card>
</Col>
  );
};

export default CardsDestination;