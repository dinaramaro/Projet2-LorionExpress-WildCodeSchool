import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import BtnNav from './BtnNav';
import {withRouter} from 'react-router-dom';

class ModificationVoyage extends React.Component {
    constructor(props){
        super(props);
        this.state={
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
        const config = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }
        fetch(`http://92.175.11.66:3000/reacteurs/api/voyages/${this.props.match.params.id}`, config)
        .then (res => res.text())
        .then (res => {
            if (res.error) {
                alert(res.error)
            } else {
                alert('Voyage correctement modifié');
                this.props.history.push("/admin")
            }
        }).catch(e => {
            console.error(e);
            alert('Erreur lors de la modification du voyage')
        })
    }

    componentDidMount(){
        window.scrollTo(0,0);
        fetch(`http://92.175.11.66:3000/reacteurs/api/voyages/${this.props.match.params.id}`)
            .then(response => response.json())
                .then(data => 
                    this.setState({
                        title: data.title,
                        image: data.image,
                        description: data.description,
                        detail: data.detail,
                        "date-depart": data["date-depart"],
                        "date-retour": data["date-retour"],
                        prix: data.prix,
                        astuces: data.astuces,
                        lieu: data.lieu,
                        type: data.type,
                    }))
    }


  render() {
      console.log(this.state.voyage)
    return (
        <div>
            <div className="text-center">
                <BtnNav />
                <h2>Modifier le voyage</h2>
            </div>

        <Container>
        <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="title">Titre</Label>
                            <Input onChange={this.handleChange}
                                type="text"
                                name="title"
                                id="title"
                                value={this.state.title} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="image">Image</Label>
                            <Input
                                onChange={this.handleChange}
                                type="text"
                                name="image"
                                id="image"
                                value={this.state.image} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input onChange={this.handleChange} type="textarea" name="description" id="description" 
                                value={this.state.description} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="detail">Details</Label>
                            <Input onChange={this.handleChange} type="textarea" name="detail" id="detail" 
                                value={this.state.detail} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="date-depart">Date de départ (AAAA-MM-JJ)</Label>
                            <Input onChange={this.handleChange} type="text" name="date-depart" id="date-depart" 
                                value={this.state["date-depart"]} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="date-retour">Date de retour (AAAA-MM-JJ)</Label>
                            <Input onChange={this.handleChange} type="text" name="date-retour" id="date-retour" 
                                value={this.state["date-retour"]} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="prix">Prix</Label>
                            <Input onChange={this.handleChange} type="number" name="prix" id="prix" 
                                value={this.state.prix} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="astuces">Astuces</Label>
                            <Input onChange={this.handleChange} type="textarea" name="astuces" id="astuces" 
                                value={this.state.astuces} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="lieu">Lieu</Label>
                            <Input onChange={this.handleChange} type="text" name="lieu" id="lieu"
                                value={this.state.lieu} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="type">Type</Label>
                            <Input onChange={this.handleChange} type="select" name="type" id="type" placeholder="Destination" >
                                <option>Sélectionner le type de voyage</option>
                                <option value="destination" >Destination</option>
                                <option value="experience">Experience</option>
                                <option value="promotion">Promotion</option>
                            </Input>
                        </FormGroup>
                        <div className='text-center'>
                            <Button color="primary font2">Modifier</Button>
                        </div>
                    </Form>
        </Container>
    </div>
    );
  }
}

export default withRouter(ModificationVoyage);