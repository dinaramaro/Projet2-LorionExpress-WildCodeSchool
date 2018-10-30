import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Col, Button } from 'reactstrap';
import './Card.css';
import {Link} from 'react-router-dom';

const CardsExp = (props) => {
    return (
        <Col xs="12" sm="6" lg="4" className="pb-2">
            <Card className="shadow">
                <div className="image">
                    <CardImg top width="100%" src={props.image} className="image-zoom" />
                </div>
                <CardBody className="pb-0">
                    <CardTitle className="mt-1 titre">{props.title}</CardTitle>
                    <CardText>{props.description}</CardText>
                    <div className="align-items-center">
                        <Link to={`/detailvoyage/${props.id}`}>
                            <Button className="button mr-5 font2">Plus d'infos</Button> 
                        </Link>
                        <p className="prix">{props.prix} €</p>
                        </div>
                </CardBody>
            </Card>
        </Col>
    );
}

export default CardsExp;