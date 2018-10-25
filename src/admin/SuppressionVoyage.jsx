import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import './SuppressionVoyage.css';

class SuppressionVoyage extends Component {

    cancel() {
        this.props.history.push("/admin");
    }

    elimineVoyage() {
        fetch(`http://92.175.11.66:3000/reacteurs/api/voyages/${this.props.match.params.id}`, {
            method: "delete",
        }).then(res => res.text())
            .then(res => {
                if (res.error) {
                    alert(res.error)
                } else {
                    alert("Voyage supprimé")
                    this.props.history.push("/admin")
                }
            }).catch(e => {
                console.error(e);
                alert('Erreur lors de la suppression du voyage')
            })
    }

    render() {
        return (
            <div className="suppression">
                <h1>Veuillez confirmer la suppression du voyage!</h1>
                <p>&nbsp;</p>
                <Button color="danger" onClick={() => this.elimineVoyage()}>Oui</Button>
                <p>&nbsp;</p>
                <Button color="success" onClick={() => this.cancel()}>Non</Button>
                <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
            </div>
        )
    }
}

export default withRouter(SuppressionVoyage); 