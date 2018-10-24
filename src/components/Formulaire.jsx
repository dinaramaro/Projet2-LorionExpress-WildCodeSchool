import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Modal, ModalBody, ModalFooter, } from 'reactstrap';
import './Formulaire.css';
import { withRouter } from 'react-router-dom';

class Formulaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: "",
            email: "",
            personne: "",
            commentaire: "",
            voyage: this.props.id,
            /*  boutonCGV: false, */
            modal: false,
            class: ''
        }
        /* this.alertForm = this.alertForm.bind(this); */
        this.handleChange = this.handleChange.bind(this);
        /*   this.buttonCGV = this.buttonCGV.bind(this); */
        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    /*   alertForm() {
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
      } */

    /*   buttonCGV() {
          this.setState({
              boutonCGV: !this.state.bouttonCGV
          })
      }
   */
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch("http://92.175.11.66:3000/reacteurs/api/clients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nom: this.state.nom, email: this.state.email, personne: this.state.personne, commentaire: this.state.commentaire, voyage: this.state.voyage }),
        }).then(res => res.json())
            .then(res => {
                if (res.error) {
                    console.log(res.error);
                } else {
                    alert(`Client enregistré!`);
                    this.props.history.push("/");
                }
            }).catch(e => {
                console.error(e);
                alert('Erreur lors de la réservation du voyage');
            });
    }

    render() {
        return (
            <Container>
                <div className='center'>
                    <Button color="success" onClick={this.toggle}>Je réserve</Button>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label className={this.state.class} for="nom" required>Nom et Prénom </Label>
                                <Input
                                    type="text"
                                    name="nom"
                                    id="nom"
                                    placeholder="Renseignez votre Nom et Prénom"
                                    onChange={this.handleChange}
                                    value={this.state.nom}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label className={this.state.class} for="email" >Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Votre email ici"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="personne">Nombres de voyageurs</Label>
                                <Input type="select" name="personne" id="personne" onChange={this.handleChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10 +</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="commentaire">Commentaires</Label>
                                <Input
                                    type="textarea"
                                    name="commentaire"
                                    id="commentaire"
                                    onChange={this.handleChange}
                                    value={this.state.commentaire}
                                />
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="checkbox"
                                        name='newsletter'
                                    />
                                    <div>Je souhaite m'inscrire à la newsletter.</div>
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="checkbox"
                                        name='boutonCGV'
                                    /*  onClick={this.buttonCGV} */
                                    />
                                    <div className={this.state.class}>J'accepte les conditions générales de ventes.</div>
                                </Label>
                            </FormGroup>
                            <Button color="primary" /* onClick={this.alertForm} */>Valider</Button>
                        </Form>
                    </ModalBody>
                    <ModalFooter>

                        <Button color="secondary" onClick={this.toggle}>Annuler</Button>
                    </ModalFooter>
                </Modal>
            </Container>

        );
    }
}

export default withRouter(Formulaire);