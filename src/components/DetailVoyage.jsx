import React, {Component} from 'react';
import PhotoVoyage from './components-detailvoyage/PhotoVoyage';
import Navbarvoyage from './components-detailvoyage/Navbarvoyage';
import Tips from './components-detailvoyage/Tips';
import Programme from './components-detailvoyage/Programme';
import Formulaire from './Formulaire';



class DetailVoyage extends Component {
    constructor(props){
        super(props);
        this.state={
            voyage: [],
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
            fetch(`http://campus-bordeaux.ovh:3002/reacteurs/api/voyages/${this.props.match.params.id}`)
              .then(response => response.json())
                .then(data => 
                  this.setState({
                    voyage: data,
                  }))
    }
    render () {
        return (
            <div>
                <PhotoVoyage image={this.state.voyage.image} />
                <Navbarvoyage 
                title={this.state.voyage.title}
                datedepart={this.state.voyage['date-depart']}
                dateretour={this.state.voyage['date-retour']}
                prix={this.state.voyage.prix}
                type={this.state.voyage.type}
                id ={this.props.match.params.id}
                />
                <Tips 
                astuces = {this.state.voyage.astuces}
                description={this.state.voyage.description}/>
                <Programme 
                detail={this.state.voyage.detail}
                />
                <Formulaire
                    id ={this.props.match.params.id}/>

            </div>
        )
    }
}


export default DetailVoyage;

