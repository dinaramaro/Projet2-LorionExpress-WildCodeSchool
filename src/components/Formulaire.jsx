import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';
import './Formulaire.css'

class Formulaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            class: '',
            boutonCGV: false,
            hidden:''
        }
        this.alertForm = this.alertForm.bind(this)
        this.changeInput = this.changeInput.bind(this)
        this.buttonCGV = this.buttonCGV.bind(this)
    }

    alertForm() {
        if (this.state.name.length > 0 && this.state.email.length > 0 && !this.state.boutonCGV === false) {
            let message = "Votre réservation a bien été prise en compte, merci.";
            this.setState({
                hidden: 'hidden'
            })
            alert(message)
        } else {
            this.setState({
                class: 'red'
            })
            let message = 'Merci de remplir tout les champs obligatoires';
            alert(message)
        }
    }

    changeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    buttonCGV() {
        this.setState({
            boutonCGV: !this.state.bouttonCGV
        })
    }

    render() {
        return (
            <Container className={this.state.hidden}>
                <Form>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label className={this.state.class} for="Name" required>Nom et Prénom </Label>
                                <Input type="text" name="name"
                                    id="name"
                                    placeholder="Renseignez votre Nom et Prénom"
                                    onChange={this.changeInput}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label className={this.state.class} for="exampleEmail">Email</Label>
                                <Input type="text" name="email" id="exampleEmail"
                                    placeholder="Votre email ici"
                                    onChange={this.changeInput}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Nombres de voyageurs</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5 ou + </option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Commentaires</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="idVoyage">Numéro du Voyage</Label>
                                <Input type="idVoyage" name="idVoyage" id="idVoyage" placeholder='5830385' disabled />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="checkbox"
                                        name='boutonCGV'
                                        onClick={this.buttonCGV}
                                        onChange={this.changeInput} />{' '}
                                    <div className={this.state.class}>J'accepte les conditions générales de ventes</div>
                                </Label>
                            </FormGroup>
                            <Button onClick={this.alertForm}>Envoyer</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>

        );
    }
}

export default Formulaire;