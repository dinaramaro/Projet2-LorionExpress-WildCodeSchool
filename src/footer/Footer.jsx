import React, { Component } from 'react';
import './Footer.css';
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <div>
                <Container fluid >
                    <Row className='footer'>
                        <Col lg="2" md='5' sm="5" xs="8">
                            <ul className="list">
                                <li className="list-top">Section</li>
                                <li><a href="/destinations/" className="link">Destinations</a></li>
                                <li><a href="/experiences/" className="link">Expériences</a></li>
                                <li><a href="/promotions/" className="link">Promotions du mois</a></li>
                            </ul>
                        </Col>

                        <Col lg="2" md='5' sm="5" xs="8">
                            <ul className="list">
                                <li className="list-top">Réseaux sociaux</li>
                                <a href="https://www.facebook.com/wildcodeschool/"><img src="http://image.noelshack.com/fichiers/2018/41/3/1539170706-facebook.png" alt="Logo" /></a>
                                <a href="https://twitter.com/wildcodeschool"><img src="http://image.noelshack.com/fichiers/2018/41/3/1539166418-twitter.png" alt="Logo" /></a>
                                <a href="https://www.instagram.com/wildcodeschool/?hl=fr"><img src="http://image.noelshack.com/fichiers/2018/41/3/1539170468-instagram.png" alt="Logo" /></a>
                            </ul>
                        </Col>

                        <Col lg="2" md='5' sm="5" xs="8">
                            <ul className="list">
                                <li className="list-top">Partenaires</li>
                                <li><a href="https://wildcodeschool.fr" className="link">Wild Code School</a></li>
                                <li><a href="http://www.bordeaux.fr/o581/office-de-tourisme-et-des-congres-de-bordeaux-metropole" className="link">Office du tourisme</a></li>
                            </ul>
                        </Col>
                        <Col lg="2" md='5' sm="5" xs="8">
                            <ul className="list">
                                <li className="list-top">Mentions légales</li>
                                <li>© Lorion Express</li>
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


