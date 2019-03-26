import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import BtnNav from './BtnNav';
import {withRouter} from 'react-router-dom';


class CreationVoyage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            image: "",
            description: "",
            detail: "",
            "date-depart": "",
            "date-retour": "",
            prix: "",
            astuces: "",
            lieu: "",
            type: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const url = "http://campus-bordeaux.ovh:3002/reacteurs/api/voyages";
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }
        fetch(url, config)
        .then (res => res.text())
        .then (res => {
            if (res.error) {
                alert(res.error)
            } else {
                alert('Le voyage a été créé dans le catalogue');
                this.props.history.push("/admin")
            }
        }).catch(e => {
            console.error(e);
            alert('Erreur lors de la création du voyage')
        })
    }

    render() {
        return (
            <div>
                <div className="text-center">
                    <BtnNav />
                    <h2>Créer voyages</h2>
                </div>

                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="title">Titre</Label>
                            <Input onChange={this.handleChange}
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Paris"
                                value={this.state.title} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="image">Image</Label>
                            <Input
                                onChange={this.handleChange}
                                type="text"
                                name="image"
                                id="image"
                                placeholder="url"
                                value={this.state.image} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="description">Résumé</Label>
                            <Input onChange={this.handleChange} type="textarea" name="description" id="description" placeholder="description"
                                value={this.state.description} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="detail">Description détaillée</Label>
                            <Input onChange={this.handleChange} type="textarea" name="detail" id="detail" placeholder="Detail"
                                value={this.state.detail} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="date-depart">Date de départ (AAAA-MM-JJ)</Label>
                            <Input onChange={this.handleChange} type="text" name="date-depart" id="date-depart" placeholder="2018-09-18"
                                value={this.state["date-depart"]} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="date-retour">Date de retour (AAAA-MM-JJ)</Label>
                            <Input onChange={this.handleChange} type="text" name="date-retour" id="date-retour" placeholder="2018-09-22"
                                value={this.state["date-retour"]} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="prix">Prix</Label>
                            <Input onChange={this.handleChange} type="number" name="prix" id="prix" placeholder="999"
                                value={this.state.prix} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="astuces">Recommandations</Label>
                            <Input onChange={this.handleChange} type="textarea" name="astuces" id="astuces" placeholder="Visitez la plage de sable fin"
                                value={this.state.astuces} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="lieu">Lieu</Label>
                            <Input onChange={this.handleChange} type="text" name="lieu" id="lieu" placeholder="Rome"
                                value={this.state.lieu} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="type">Type de voyage</Label>
                            <Input onChange={this.handleChange} type="select" name="type" id="type" placeholder="Destination" >
                                <option>Sélectionner le type de voyage</option>
                                <option value="destination" >Destination</option>
                                <option value="experience">Experience</option>
                                <option value="promotion">Promotion</option>
                            </Input>
                        </FormGroup>
                        <div className='text-center'>
                            <Button color="primary font2" className="mb-3">Créer</Button>
                        </div>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default withRouter(CreationVoyage);