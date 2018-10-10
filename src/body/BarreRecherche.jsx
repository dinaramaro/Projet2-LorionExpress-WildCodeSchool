import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import './BarreRecherche.css'

export default class BarreRecherche extends React.Component {
    render() {
        return (
            <section id="search">
                <Container>
                    <Row>
                        <Col>
                            <Form inline className="justify-content-center">
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Input type="text" name="destination" id="destination" placeholder="Destination" size="20" />
                                </FormGroup>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Input type="date" name="date" id="date" placeholder="Date de Départ" size="25" />
                                </FormGroup>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Input type="select">
                                        <option value="">Choisir Expérience</option>
                                        <option>Montagne</option>
                                        <option>Croisière</option>
                                        <option>Escalade</option>
                                    </Input>
                                </FormGroup>
                                <InputGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <InputGroupAddon addonType="prepend">€</InputGroupAddon>
                                    <Input placeholder="Amount" type="number" step="1" size="20" />
                                    <InputGroupAddon addonType="append">.00</InputGroupAddon>
                                </InputGroup>
                                <Button color="success">Rechercher</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
