import React from 'react';
import { Table, Container } from 'reactstrap';
import BtnNav from './BtnNav';

class AdminClient extends React.Component {
  render() {
    return (
        <div>
            <div className="text-center">
                <BtnNav />
                <h2>Fichier clients</h2>
            </div>
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nom et Prénom</th>
                            <th>E-mail</th>
                            <th>Nombres de voyageurs</th>
                            <th>Commentaires</th>
                            <th>Numéro du voyage</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark Otto</td>
                        <td>MarkOtto@hotmail.fr</td>
                        <td>1</td>
                        <td>Cool !</td>
                        <td>00</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Pierre Jean</td>
                        <td>PierreJean@hotmail.fr</td>
                        <td>1</td>
                        <td>Bon voyage</td>
                        <td>01</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Marc Bolini</td>
                        <td>MarcBolinio@hotmail.fr</td>
                        <td>1</td>
                        <td> Super voyage</td>
                        <td>02</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Mark Otto</td>
                        <td>MarkOtto@hotmail.fr</td>
                        <td>1</td>
                        <td>Cool !</td>
                        <td>03</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Mark Otto</td>
                        <td>MarkOtto@hotmail.fr</td>
                        <td>1</td>
                        <td>Cool !</td>
                        <td>04</td>
                    </tr>
                </tbody>
            </Table>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>


        </Container>
    </div>
    );
  }
}


export default AdminClient;