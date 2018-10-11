import React, { Component } from 'react';
import CardsExp from '../components/CardsExp';
import CardsDestination from '../components/CardsDestination';
import './ListeVoyage.css';

import { Container, Row, Col } from 'reactstrap';

const cardsExp = [{
  img: 'https://static2.tripoto.com/media/filter/nl/img/430427/TripDocument/1511802920_dsc_1103.jpg',
  theme: 'On montage',
  text: 'Trois jours en mer seront une expérience inoubliable.'
}, {
  img: 'https://static2.tripoto.com/media/filter/nl/img/430427/TripDocument/1511802920_dsc_1103.jpg',
  theme: 'On bateau',
  text: 'Trois jours en mer seront une expérience inoubliable.'
}];

const card = [{
  cardtitle: "Paris", 
  cardsubtitle: "Du 10 au 13 Novembre 2018", 
  photo: "https://images-sanoma.cdn1.be/images/opportunity-citytrip-paris-tour-eiffel2-l7.jpg", 
  cardtext: "La Tour Eiffel, le quartier Montmartre, le musée du Louvre... Découvrez tout le patrimoine historique et culturel d'une ville au mille facettes.", 
  prix: "379€",
}, {
  cardtitle: "Barcelone", 
  cardsubtitle: "Du 03 au 07 Mars 2019", 
  photo: "https://images-sanoma.cdn1.be/images/city-trip-barcelone-4-l7.jpg", 
  cardtext: "La Sagrada Familia, La Pedrera, le Parc Güell... Un circuit sur la route des majestueuses réalisations de l'architecte Antoni Gaudi.", 
  prix: "429€",
}]
class ListeVoyage extends Component {
  render() {
    return (
      <div>
        <Container className="cardsDes-box">
          <h1 className='titreDes' id='destinations'>DESTINATIONS</h1>
          <Row>
            <Col xs="12" md="6" lg="4" className="pt-2 pb-2" >
              <CardsDestination item={card[0]} />
            </Col>
            <Col xs="12" md="6" lg="4" className="pt-2 pb-2" >
              <CardsDestination item={card[1]} />
            </Col>
            <Col xs="12" md="6" lg="4" className="pt-2 pb-2" >
              <CardsDestination item={card[0]} />
            </Col>

            <Col xs="12" md="6" lg="4" className="pt-2 pb-2" >
              <CardsDestination item={card[1]} />
            </Col>
            <Col xs="12" md="6" lg="4" className="pt-2 pb-2" >
              <CardsDestination item={card[1]} />
            </Col>
            <Col xs="12" md="6" lg="4" className="pt-2 pb-2" >
              <CardsDestination item={card[0]} />
            </Col>
          </Row>
        </Container>
        <Container className="cardsExp-box">
          <h1 className='titreExp' id='experiences'>EXPERIENCES</h1>
          <Row>
            <Col xs="12" sm="6" lg="4" className="pb-2">
              <CardsExp
                card={cardsExp[0]}
              />
            </Col>
            <Col xs="12" sm="6" lg="4" pd-2>
              <CardsExp
                card={cardsExp[0]}
              />
            </Col>
            <Col xs="12" sm="6" lg="4">
              <CardsExp
                card={cardsExp[0]}
              />
            </Col>
            <Col xs="12" sm="6" lg="4">
              <CardsExp
                card={cardsExp[0]}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ListeVoyage;
