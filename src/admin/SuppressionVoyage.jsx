import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Container, Row, Col } from 'reactstrap';
import './SuppressionVoyage.css';

class SuppressionVoyage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    cancel() {
        this.props.history.push("/admin");
    }

    elimineVoyage() {
        fetch(`http://92.175.11.66:3000/reacteurs/api/voyages/${this.props.match.params.id}`, {
            method: "DELETE",

        }).then(res => res.text())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert("Voyage supprimé")
                    this.props.history.push("/admin")
                }
            }).catch(e => {
                console.error(e);
                alert('Erreur lors de la suppression du voyage');
            });
    }

    render() {
        return (
            <Container className="suppression">
                <Row>
                    <Col>
                        <h1>Veuillez confirmer la suppression de ce voyage</h1>
                        <h2>ATTENTION: CETTE ACTION EST IRREVERSIBLE!</h2>
                    </Col>
                </Row>
                <p>&nbsp;</p>
                <Row>
                    <Col>
                        <Button className="mb-2 font2" color="danger" size="lg" onClick={() => this.elimineVoyage()}>Oui</Button>
                    </Col>
                    <Col>
                        <Button className="font2" color="success" size="lg" onClick={() => this.cancel()}>Non</Button>
                    </Col>
                </Row>
                <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
            </Container>
        )
    }
}

export default withRouter(SuppressionVoyage); 