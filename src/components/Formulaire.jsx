import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Modal, ModalBody, ModalFooter, } from 'reactstrap';
import './Formulaire.css'

class Formulaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            class: '',
            boutonCGV: false,
            modal: false
        }
        this.alertForm = this.alertForm.bind(this)
        this.changeInput = this.changeInput.bind(this)
        this.buttonCGV = this.buttonCGV.bind(this)
        this.toggle = this.toggle.bind(this);

    }


    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    alertForm() {
        if (this.state.name.length > 0 && this.state.email.length > 0 && !this.state.boutonCGV === false) {
            let message = "Votre réservation a bien été prise en compte, merci.";
            this.setState({
                class: '',
                modal: !this.state.modal
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
            <Container>
                <div className='center'>

                    <Button color="success" onClick={this.toggle}>Je réserve</Button>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalBody>
                        <Form>
          
                                    <FormGroup>
                                        <Label className={this.state.class} for="Name" required>Nom et Prénom </Label>
                                        <Input type="text" name="name"
                                            id="name"
                                            placeholder="Renseignez votre Nom et Prénom"
                                            onChange={this.changeInput}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className={this.state.class} for="exampleEmail" >Email</Label>
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
                                                name='newsletter'
                                            />{' '}
                                            <div>Je souhaite m'inscrire à la newsletter.</div>
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                name='boutonCGV'
                                                onClick={this.buttonCGV}
                                                onChange={this.changeInput} />{' '}
                                            <div className={this.state.class}>J'accepte les conditions générales de ventes.</div>
                                        </Label>
                                    </FormGroup>
    
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.alertForm}>Valider</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Annuler</Button>
                    </ModalFooter>
                </Modal>
            </Container>

        );
    }
}

export default Formulaire;