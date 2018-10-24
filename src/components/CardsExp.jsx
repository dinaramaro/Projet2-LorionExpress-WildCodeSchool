import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Col, Button } from 'reactstrap';
import './Card.css';
import {Link} from 'react-router-dom';

const CardsExp = (props) => {
    return (
        <Col xs="12" sm="6" lg="4" className="pb-2">
            <Card>
                <div className="image">
                    <CardImg top width="100%" src={props.image} className="image-zoom" />
                </div>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardText>{props.description}</CardText>
                    <Link to={`/detailvoyage/${props.id}`}>
                        <Button className="button">Plus d'infos</Button>
                    </Link>
                </CardBody>
            </Card>
        </Col>
    );
}

export default CardsExp;