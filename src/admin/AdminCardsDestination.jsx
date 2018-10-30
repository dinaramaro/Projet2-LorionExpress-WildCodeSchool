import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
import '../components/Card.css';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import "moment-timezone";

const AdminCardsDestination = (props) => {
  return (
  <Col xs="12" md="6" lg="4" className="pt-2 pb-2">
    <Card className="text-center">
      <CardTitle className="titre">{props.title}</CardTitle>
      <CardSubtitle>Du <Moment format="DD/MM/YYYY">{props.datedepart}</Moment> au <Moment format="DD/MM/YYYY">{props.dateretour}</Moment></CardSubtitle>
      
        <div className="image">
          <CardImg width="100%" src={props.image} alt={props.lieu} className="image-zoom" />
        </div>
     
      <CardBody h-100>
        <CardText className="text-left">{props.description}</CardText>
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
};


export default AdminCardsDestination;