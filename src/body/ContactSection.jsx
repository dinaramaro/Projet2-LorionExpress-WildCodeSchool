import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './ContactSection.css';


class ContactSection extends Component {
    render() {
        return (
            <section id="contact">
                <Container>
                    <Row className="align-items-center">
                        <Col md="6">
                            <h2>Lorion'Express</h2>

                            <p>68 Cours de Verdun<br />
                                33000 Bordeaux<br />
                                France
                        </p>

                            <p>Tél: +33 5 55 55 55 55<br />
                                Email: info@lorionexpress.fr<br />
                            </p>

                        </Col>
                        <Col md="6">
                            <div className="map-responsive">
                                <iframe title="Adresse" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.6329934300297!2d-0.5771663851854304!3d44.84940697909841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552877d0d48f6b%3A0x5fbdab78bc865820!2s68+Cours+de+Verdun%2C+33000+Bordeaux!5e0!3m2!1sit!2sfr!4v1539085043769" width="100%" height="400" frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }

}

export default ContactSection;