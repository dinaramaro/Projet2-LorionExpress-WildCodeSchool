import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Col, Button, } from 'reactstrap';
import {Link} from 'react-router-dom';
import '../components/Card.css';

const AdminCardsExp = (props) => {
    return (
        <Col xs="12" sm="6" lg="4" className="pb-2">
            <Card>
                <div className="image">
                    <CardImg top width="100%" src={props.image} className="image-zoom" />
                </div>
                <CardBody>
                    <CardTitle className="titre">{props.title}</CardTitle>
                    <CardText>{props.description}</CardText>
                    <Link to={`/adminmodification-voyage/${props.id}`}>
                        <Button className="button font2" color="primary">Modifier</Button>
                    </Link>
                    <Link to={`/adminsuppression-voyage/${props.id}`}>
                        <Button className="button font2" color="danger">Supprimer</Button>
                    </Link>                
                    </CardBody>
            </Card>
        </Col>
    );
}

export default AdminCardsExp;