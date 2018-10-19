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
                    <Label for="exampleEmail">Titre</Label>
                    <Input type="text" name="email" id="exampleEmail" placeholder="Paris" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Image</Label>
                    <Input type="text" name="image" id="exampleEmail" placeholder="url" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Description</Label>
                    <Input type="textarea" name="description" id="exampleEmail" placeholder="Description" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Details</Label>
                    <Input type="textarea" name="details" id="exampleEmail" placeholder="Details" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Date de départ</Label>
                    <Input type="text" name="datededepart" id="exampleEmail" placeholder="12/09/2018" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Date de retour</Label>
                    <Input type="text" name="datederetour" id="exampleEmail" placeholder="15/09/2018" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Prix</Label>
                    <Input type="text" name="prix" id="exampleEmail" placeholder="999" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Astuces</Label>
                    <Input type="textarea" name="astuces" id="exampleEmail" placeholder="Visitez la plage de sable fin" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Lieu</Label>
                    <Input type="text" name="lieu" id="exampleEmail" placeholder="Rome" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Type</Label>
                    <Input type="text" name="type" id="exampleEmail" placeholder="Destination" />
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