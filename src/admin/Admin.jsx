import React, { Component } from 'react';
import { Button, Container, Row,} from 'reactstrap';
import { Link } from 'react-router-dom';
import BtnNav from './BtnNav';
import AdminCardsExp from './AdminCardsExp';
import AdminCardsDestination from './AdminCardsDestination';
import './Admin.css';



class Admin extends Component {
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
                <div className="text-center">
                    <BtnNav />
                    <h2>Voyages</h2>
                    <Link to="/admincreation-voyage"><Button color="secondary" size="lg">Ajouter un voyage</Button></Link>
                </div>

                <div>
                    <Container className="cardsDes-box">
                        <h1 className='titreDes' id='destinations'>DESTINATIONS</h1>
                        <Row>
                            {
                                this.state.voyage.filter(card => card.type === "destination").map(
                                    (card) => (
                                        <AdminCardsDestination
                                            key={card.id}
                                            id={card.id}
                                            title={card.title}
                                            image={card.image}
                                            description={card.description}
                                            detail={card.detail}
                                            datedepart={card["date-depart"]}
                                            dateretour={card["date-retour"]}
                                            prix={card.prix}
                                            astuces={card.astuces}
                                            lieu={card.lieu}
                                            type={card.type}
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
                                        <AdminCardsExp
                                            key={card.id}
                                            id={card.id}
                                            title={card.title}
                                            image={card.image}
                                            description={card.description}
                                            detail={card.detail}
                                            datedepart={card["date-depart"]}
                                            dateretour={card["date-retour"]}
                                            prix={card.prix}
                                            astuces={card.astuces}
                                            lieu={card.lieu}
                                            type={card.type}
                                        />
                                    )
                                )
                            }
                        </Row>
                    </Container>
                </div>

            </div>
        )
    }
}

export default Admin;
