import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap';
import Bouton from './Bouton';
import './Card.css';

const CardsExp = (props) => {
      return (
        <Card>
            <div className="image">
            <CardImg top width="100%" src={props.card.img} className="image-zoom"/>
            </div>
            <CardBody>
                <CardTitle>{props.card.theme}</CardTitle>
                <CardText>{props.card.text}</CardText>
                <Bouton />
            </CardBody>
        </Card>
      );
  }

export default CardsExp;