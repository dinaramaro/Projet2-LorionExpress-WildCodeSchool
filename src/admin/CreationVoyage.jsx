import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import BtnNav from './BtnNav';


class CreationVoyage extends React.Component {
  render() {
    return (
        <div>
            <div className="text-center">
                <BtnNav />
                <h2>Créer voyages</h2>
            </div>

        <Container>
            <Form >
                <FormGroup>
                    <Label for="title">Titre</Label>
                    <Input type="text" name="title" id="title" placeholder="Paris" />
                </FormGroup>

                <FormGroup>
                    <Label for="image">Image</Label>
                    <Input type="text" name="image" id="image" placeholder="url" />
                </FormGroup>

                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" name="description" id="description" placeholder="description" />
                </FormGroup>

                <FormGroup>
                    <Label for="detail">Details</Label>
                    <Input type="textarea" name="detail" id="detail" placeholder="Detail" />
                </FormGroup>

                <FormGroup>
                    <Label for="date-depart">Date de départ</Label>
                    <Input type="text" name="date-depart" id="date-depart" placeholder="12/09/2018" />
                </FormGroup>

                <FormGroup>
                    <Label for="date-retour">Date de retour</Label>
                    <Input type="text" name="date-retour" id="date-retour" placeholder="15/09/2018" />
                </FormGroup>

                <FormGroup>
                    <Label for="prix">Prix</Label>
                    <Input type="text" name="prix" id="prix" placeholder="999" />
                </FormGroup>

                <FormGroup>
                    <Label for="astuces">Astuces</Label>
                    <Input type="textarea" name="astuces" id="astuces" placeholder="Visitez la plage de sable fin" />
                </FormGroup>

                <FormGroup>
                    <Label for="lieu">Lieu</Label>
                    <Input type="text" name="lieu" id="lieu" placeholder="Rome" />
                </FormGroup>

                <FormGroup>
                    <Label for="type">Type</Label>
                    <Input type="text" name="type" id="type" placeholder="Destination" />
                </FormGroup>
                <div className='text-center'>
                <Button>Créer</Button>
                </div>
            </Form>
        </Container>
    </div>
    );
  }
}


export default CreationVoyage;