import React, {Component} from 'react';
import CarouselVoyage from './components-detailvoyage/CarouselVoyage';
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
            fetch(`http://92.175.11.66:3000/reacteurs/api/voyages/${this.props.match.params.id}`)
              .then(response => response.json())
                .then(data => 
                  this.setState({
                    voyage: data,
                  }))
    }
    render () {
        return (
            <div>
                {/* <CarouselVoyage image={this.state.voyage.image}/> */}
                <Navbarvoyage 
                title={this.state.voyage.title}
                datedepart={this.state.voyage['date-depart']}
                dateretour={this.state.voyage['date-retour']}
                prix={this.state.voyage.prix}
                type={this.state.voyage.type}
                />
                <Tips 
                astuces = {this.state.voyage.astuces}
                description={this.state.voyage.description}/>
                <Programme 
                detail={this.state.voyage.detail}
                />
                <Formulaire
                    id ={this.props.match.params.id} />

            </div>
        )
    }
}


export default DetailVoyage;

