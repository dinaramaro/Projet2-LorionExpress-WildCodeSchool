import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import BtnNav from './BtnNav';


class ModificationVoyage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            voyage : [],
        }
    }

    componentDidMount(){
        fetch(`http://92.175.11.66:3000/reacteurs/api/voyages/${this.props.match.params.id}`)
            .then(response => response.json())
                .then(data => 
                    this.setState({
                        voyage : data,
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
            <Form >
                <FormGroup>
                    <Label for="title">Titre</Label>
                    <Input type="text" name="title" id="title" value={this.state.voyage.title}/>
                </FormGroup>

                <FormGroup>
                    <Label for="image">Image</Label>
                    <Input type="text" name="image" id="image" value={this.state.voyage.image}/>
                </FormGroup>

                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" name="description" id="description" value={this.state.voyage.description}/>
                </FormGroup>

                <FormGroup>
                    <Label for="detail">Details</Label>
                    <Input type="textarea" name="detail" id="detail" value={this.state.voyage.detail}/>
                </FormGroup>

                <FormGroup>
                    <Label for="date-depart">Date de départ</Label>
                    <Input type="text" name="date-depart" id="date-depart" value={this.state.voyage["date-depart"]}/>
                </FormGroup>

                <FormGroup>
                    <Label for="date-retour">Date de retour</Label>
                    <Input type="text" name="date-retour" id="date-retour" 
                    value={this.state.voyage["date-retour"]}/>
                </FormGroup>

                <FormGroup>
                    <Label for="prix">Prix</Label>
                    <Input type="text" name="prix" id="prix" 
                    value={this.state.voyage.prix}/>
                </FormGroup>

                <FormGroup>
                    <Label for="astuces">Astuces</Label>
                    <Input type="textarea" name="astuces" id="astuces" 
                    value={this.state.voyage.astuces}/>
                </FormGroup>

                <FormGroup>
                    <Label for="lieu">Lieu</Label>
                    <Input type="text" name="lieu" id="lieu"
                    value={this.state.voyage.lieu}/>
                </FormGroup>

                <FormGroup>
                    <Label for="type">Type</Label>
                    <Input type="text" name="type" id="type"
                    value={this.state.voyage.type}/>
                </FormGroup>
                <div className='text-center'>
                <Button>Modifier</Button>
                </div>
            </Form>
        </Container>
    </div>
    );
  }
}


export default ModificationVoyage;