import React, { Component } from 'react';
import './Tips.css';
import {
    Row, Col, Container
} from 'reactstrap';

class Tips extends Component {
    render() {
        return (
           <Container>
           <Row>
           <Col xs="12" md="7">
                    <div className="description">
                        <img className="icon" src="http://image.noelshack.com/fichiers/2018/42/3/1539797156-noun-quote.png" alt="icon"/><p>Un circuit à la découverte de Venise et ses gondoles, ses canaux, ses ruelles... une ville magique sur l'eau qui ne laissera personne de marbre.</p>
                    </div>
                </Col>
                <Col xs="12" md="5" className='pr-0'>
                    <div className="tips">
                        <h3>Nos recommandations</h3>
                        <ul>
                            <li>Découvrez les ateliers de souffleurs de verre sur l'île de Murano.</li>
                            <li>Dégustez les meilleures pizzas de Venise chez Antico Forno Venezia, dans le quartier du Rialto.</li>
                        </ul>
                    </div>
                </Col>
                
            </Row>
            </Container>
        )
        
    }
}

export default Tips;