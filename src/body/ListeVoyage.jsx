import React, { Component } from 'react';
import CardsExp from '../components/CardsExp';
import CardsDestination from '../components/CardsDestination';
import './ListeVoyage.css';

import { Container, Row, Col } from 'reactstrap';

const cards = [{
  type: 'experience',
  photo: 'https://media-server.clubmed.com/image/jpeg/2000/auto/crop/center/60/https%3A%2F%2Fns.clubmed.com%2Ficp%2F1-MEDIA%2F02.CROISIERES%2F1-CLUB-MED-2%2F2-PHOTOS%2FCroisieres-Ete-2018%2FClubmedcroisierescm2portofino.jpg',
  theme: 'Croisière sur bateau',
  text: 'Trois jours en mer seront une expérience inoubliable.'
}, {
  type: 'experience',
  photo: 'https://www.wonderbox.fr/wondermedias/sys_master/productmedias/h5d/hc5/874224-836x557.jpg',
  theme: 'En cabane',
  text: 'Une semaine en cabane vous offre une expérience unique.'
},{
  type: 'experience',
  photo: 'https://static2.tripoto.com/media/filter/nl/img/430427/TripDocument/1511802920_dsc_1103.jpg',
  theme: 'En montage',
  text: 'Trois jours en montage vous aide vous rapprocher de la nature.'
  
},{
  type: 'experience',
  photo: 'https://media-server.clubmed.com/image/jpeg/600/306/crop/center/60/http%3A%2F%2Fns.clubmed.com%2Ffbs%2FRWD%2FImages%2FSUN%2FVillages%2FKANV_LUXE_A115_019.jpg',
  theme: 'En mer',
  text: 'Deux jours en cabane seront une expérience unique.'
},
{
  type: 'destination',
  cardtitle: "Paris", 
  cardsubtitle: "Du 10 au 13 Novembre 2018", 
  photo: "https://objects.airfrance.com/FR/common/common/img/tbaf/destinations/PAR/slideshow/PAR-4-16_9-1920x1080.jpg", 
  cardtext: "La Tour Eiffel, le quartier Montmartre, le musée du Louvre... Découvrez tout le patrimoine historique et culturel d'une ville au mille facettes.", 
  prix: "379€",
}, {
  type: 'destination',
  cardtitle: "Barcelone", 
  cardsubtitle: "Du 03 au 06 Mars 2019", 
  photo: "https://www.mhapartments.com/assets/img/offerspages/barcelona-spain-12.jpg", 
  cardtext: "La Sagrada Familia, La Pedrera, le Parc Güell... Un circuit sur la route des majestueuses réalisations de l'architecte Antoni Gaudi.", 
  prix: "429€",
}, {
  type: 'destination',
  cardtitle: "Venise",
  cardsubtitle: "Du 15 au 19 février 2019",
  photo: "https://i.ytimg.com/vi/xplFCLKGArQ/maxresdefault.jpg",
  cardtext: "Un circuit à la découverte de Venise et ses gondoles, ses canaux, ses ruelles... une ville magique sur l'eau qui ne laissera personne de marbre. ",
  prix: "530€",
}, {
  type: 'destination',
  cardtitle: "Thaïlande",
  cardsubtitle: "Du 05 au 20 février 2019",
  photo: "https://dak95nwic4sny.cloudfront.net/73/chiang-mai-and-chiang-rai-40160900-1481624149-ImageGalleryLightboxLarge.jpg",
  cardtext: "La Thaïlande regorge de lieux merveilleux, découvrez le pays du nord au sud, de Chiang Mai à l'île de Koh Phangan, en passant par Bangkok.",
  prix: "1249€",
}, {
  type: 'destination',
  cardtitle: "Maroc",
  cardsubtitle: "Du 20 au 27 avril 2019",
  photo: "https://www.luxair.lu/sites/default/files/styles/slide_images/public/2018-07/Djemma-El-Fna-Marrakech--iStock-496667645_web_0.jpg?itok=FfVS1VK4",
  cardtext: "Découvrez le Maroc, ses medinas et ses souks animés au parfum d'épices, ses merveilleux palais, son hospitalité... circuit de Casablanca à Marrakech.",
  prix: "649€",
}, {
  type: 'destination',
  cardtitle: "Croatie",
  cardsubtitle: "Du 10 au 18 Mai 2019",
  photo: "https://www.luxair.lu/sites/default/files/styles/slide_images/public/2018-06/Dubrovnik%2C-Croatia--iStock-171352601_web.jpg?itok=eT5vL82V",
  cardtext: "Un superbe circuit de Split à Dubrovnik, à travers les îles de la Dalmatie, pour découvrir un pays au patrimoine naturel et historique riche.",
  prix: "760€"
}
];
class ListeVoyage extends Component {
  render() {
    return (
      <div>
        <Container className="cardsDes-box">
          <h1 className='titreDes' id='destinations'>DESTINATIONS</h1>
          <Row>
              {
                cards.filter(card => card.type === "destination").map(
                  card => (
                    <CardsDestination 
                    cardtitle = {card.cardtitle}
                    cardsubtitle = {card.cardsubtitle}
                    photo = {card.photo}
                    carttext = {card.cardtext}
                    prix = {card.prix}
                    />
                  )
                )
              }
          </Row>
        </Container>
        <Container className="cardsExp-box">
          <h1 className='titreExp' id='experiences'>EXPERIENCES</h1>
          <Row>
          {
                cards.filter(card => card.type === "experience").map(
                  card => (
                    <CardsExp
                    cardtitle = {card.cardtitle}
                    cardsubtitle = {card.cardsubtitle}
                    photo = {card.photo}
                    carttext = {card.cardtext}
                    prix = {card.prix}
                    />
                  )
                )
              }
          </Row>
        </Container>
      </div>
    );
  }
}

export default ListeVoyage;
