import React, {Component} from 'react';

class SuppressionVoyage extends Component {

componentDidMount(){
    fetch(`http://92.175.11.66:3000/reacteurs/api/voyages/${this.props.match.params.id}`, {
        method : "delete",
    }).then(res => res.text())
    .then (res => {
        if (res.error) {
            alert(res.error)
        } else {
            alert ("Voyage supprimé")
            window.location.href="/admin"
        }
    }).catch(e => {
        console.error(e);
        alert('Erreur lors de la suppression du voyage')
    })
}

    render () {
        return (
            <div>Suppression du voyage</div>
        )
    }
}

export default SuppressionVoyage;