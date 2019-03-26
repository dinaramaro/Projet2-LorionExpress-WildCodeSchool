import React, { Component } from 'react';
import './Footer.css';
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <div className='marge'>
                <Container fluid >
                    <Row className='footer font2'>
                        <Col lg="2" md='6' sm="6" xs="12">
                            <ul className="list">
                                <li className="list-top">Réseaux sociaux</li>
                                <a href="https://www.facebook.com/wildcodeschool/" target="_blank" rel="noopener noreferrer"><img src="http://image.noelshack.com/fichiers/2018/44/2/1540894037-1539170706-facebook.png" alt="Logo" /></a>
                                <a href="https://twitter.com/wildcodeschool" target="_blank" rel="noopener noreferrer"><img src="http://image.noelshack.com/fichiers/2018/44/2/1540894124-1539166418-twitter.png" alt="Logo" /></a>
                                <a href="https://www.instagram.com/wildcodeschool/?hl=fr" target="_blank" rel="noopener noreferrer"><img src="http://image.noelshack.com/fichiers/2018/44/2/1540894201-1539170468-instagram.png" alt="Logo" /></a>
                            </ul>
                        </Col>

                        <Col lg="2" md='6' sm="6" xs="12">
                            <ul className="list">
                                <li className="list-top">Partenaires</li>
                                <li><a href="https://wildcodeschool.fr" className="link" target="_blank" rel="noopener noreferrer">Wild Code School</a></li>
                                <li><a href="http://www.bordeaux.fr/o581/office-de-tourisme-et-des-congres-de-bordeaux-metropole" className="link" target="_blank" rel="noopener noreferrer">Office du tourisme</a></li>
                            </ul>
                        </Col>
                        <Col lg="2" md='6' sm="6" xs="12">
                            <ul className="list">
                                <li className="list-top">Mentions légales</li>
                                <li><a href="https://odyssey.wildcodeschool.fr/users/4918" className="link" target="_blank" rel="noopener noreferrer">© Lorion Express</a></li>
                                <li></li>
                            </ul>
                        </Col>
                    </Row>

                </Container>
            </div>

        );
    }
}

export default Footer;


