import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Col} from 'reactstrap';
import Bouton from './Bouton';
import './Card.css';

const CardsExp = (props) => {
      return (
        <Col xs="12" sm="6" lg="4" className="pb-2">
            <Card>
                <div className="image">
                <CardImg top width="100%" src={props.photo} className="image-zoom"/>
                </div>
                <CardBody>
                    <CardTitle>{props.theme}</CardTitle>
                    <CardText>{props.text}</CardText>
                    <Bouton />
                </CardBody>
            </Card>
        </Col>
      );
  }

export default CardsExp;