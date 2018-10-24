import React, { Component } from 'react';
import CardsExp from '../components/CardsExp';
import CardsDestination from '../components/CardsDestination';
import './ListeVoyage.css';

import { Container, Row,} from 'reactstrap';


class ListeVoyage extends Component {
  constructor(props){
    super(props);
    this.state={
      voyage: [],
    }
  }


  componentDidMount(){
      fetch("http://92.175.11.66:3000/reacteurs/api/voyages")
        .then(response => response.json())
          .then(data => 
            this.setState({
              voyage: data,
            }))
  }



  render() {    
    return (
      <div>
        <Container className="cardsDes-box">
          <h1 className='titreDes' id='destinations'>DESTINATIONS</h1>
          <Row>
              {
                this.state.voyage.filter(card => card.type === "destination").map(
                  (card) => (
                    <CardsDestination 
                    key = {card.id}
                    id = {card.id}
                    title = {card.title}
                    image = {card.image}
                    description = {card.description}
                    detail = {card.detail}
                    datedepart = {card["date-depart"]}
                    dateretour = {card["date-retour"]}
                    prix = {card.prix}
                    astuces = {card.astuces}
                    lieu = {card.lieu}
                    type = {card.type}
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
                this.state.voyage.filter(card => card.type === "experience").map(
                  (card) => (
                    <CardsExp
                    key = {card.id}
                    id = {card.id}
                    title = {card.title}
                    image = {card.image}
                    description = {card.description}
                    detail = {card.detail}
                    datedepart = {card["date-depart"]}
                    dateretour = {card["date-retour"]}
                    prix = {card.prix}
                    astuces = {card.astuces}
                    lieu = {card.lieu}
                    type = {card.type}
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
