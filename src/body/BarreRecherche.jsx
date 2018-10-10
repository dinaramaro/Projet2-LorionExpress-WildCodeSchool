import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import './BarreRecherche.css'

export default class BarreRecherche extends React.Component {
    render() {
        return (
            <section id="search">
                <Container>
                    <Row form>
                        <Col>
                            <Form inline className="justify-content-center">
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                    <Input type="text" name="destination" id="destination" placeholder="Destination" />
                                </FormGroup>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                    <Input type="date" name="date" id="date" placeholder="Date de Départ" />
                                </FormGroup>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                    <Input type="select">
                                        <option value="">Choisir Expérience</option>
                                        <option>Montagne</option>
                                        <option>Croisière</option>
                                        <option>Escalade</option>
                                    </Input>
                                </FormGroup>
                                <InputGroup className="mb-2 mr-sm-2 mb-sm-2">
                                    <InputGroupAddon addonType="prepend">€</InputGroupAddon>
                                    <Input placeholder="Amount" type="number" step="1" />
                                    <InputGroupAddon addonType="append">.00</InputGroupAddon>
                                </InputGroup>
                                <Button color="success" className="mb-2 mr-sm-2 mb-sm-2">Rechercher</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
