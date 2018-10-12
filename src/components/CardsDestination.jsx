import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './Card.css';

const CardsDestination = ({item}) => {
  return (

    <Card className="text-center">
      <CardTitle>{item.cardtitle}</CardTitle>
      <CardSubtitle>{item.cardsubtitle}</CardSubtitle>
      
        <div className="image">
          <CardImg width="100%" src={item.photo} alt="Paris" className="image-zoom" />
        </div>
     
      <CardBody h-100>
        <CardText className="text-left">{item.cardtext}</CardText>
        <div className="align-items-center"><Button className="button">Plus d'infos'</Button> <p className="prix">{item.prix}</p></div>
      </CardBody>
    </Card>

  );
};

export default CardsDestination;