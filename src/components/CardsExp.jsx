import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap';
import Bouton from './Bouton';

const CardsExp = (props) => {
      return (
        <Card>
            <CardImg top width="100%" src={props.card.img}/>
            <CardBody>
                <CardTitle>{props.card.theme}</CardTitle>
                <CardText>{props.card.text}</CardText>
                <Bouton />
            </CardBody>
        </Card>
      );
  }

export default CardsExp;