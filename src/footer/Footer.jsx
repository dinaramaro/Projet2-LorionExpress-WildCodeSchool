import React, { Component } from 'react';
import './Footer.css';
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <div>
                <Container fluid >
                    <Row className='footer'>
                        <Col lg="3" md ='6' xs="12">
                            <ul className="list">
                                <li className="list-top">Section</li>
                                <li>Destinations</li>
                                <li>Expériences</li>
                                <li>Promotions du mois</li>
                            </ul>
                        </Col>

                        <Col lg="3" md ='6' xs="12">
                            <ul className="list">
                                <li className="list-top">Réseaux sociaux</li>
                                <li>Facebook</li>
                                <li>Twitter</li>
                            </ul>
                        </Col>

                        <Col lg="3" md ='6' xs="12">
                            <ul className="list">
                                <li className="list-top">Partenaires</li>
                                <li>Wild Code School</li>
                                <li>Office du tourisme</li>
                            </ul>
                        </Col>
                        <Col lg="3" md ='6' xs="12">
                            <ul className="list">
                                <li className="list-top">Mention légale</li>
                            </ul>
                        </Col>
                    </Row>

                </Container>

            </div>

        );
    }
}

export default Footer;
