import React from 'react';
import { Table, Container } from 'reactstrap';
import BtnNav from './BtnNav';


class AdminClient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            client: [],
        }
    }

    componentDidMount() {
        fetch("http://92.175.11.66:3000/reacteurs/api/clients")
            .then(response => response.json())
            .then(data => this.setState({
                client: data,
            }))
    }

    render() {
        return (
            <div>
                <div className="text-center">
                    <BtnNav />
                    <h2>Fichier clients</h2>
                </div>
                <Container>
                    <Table bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Nom et Prénom</th>
                                <th>E-mail</th>
                                <th>Nombres de voyageurs</th>
                                <th>Commentaires</th>
                                <th>Voyage Réservé</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.client.map(client => (
                                <tr>
                                    <td>{client.nom}</td>
                                    <td>{client.email}</td>
                                    <td>{client.personne}</td>
                                    <td>{client.commentaire}</td>
                                    <td>{client.title_voyage}</td>
                                </tr>
                            )                   
                            )}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}


export default AdminClient;