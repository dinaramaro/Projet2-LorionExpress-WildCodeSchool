import React, {Component} from 'react';
import CarouselVoyage from './components-detailvoyage/CarouselVoyage';
import Navbarvoyage from './components-detailvoyage/Navbarvoyage';
import Tips from './components-detailvoyage/Tips';
import Programme from './components-detailvoyage/Programme';
import Formulaire from './Formulaire';



class DetailVoyage extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapse: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }
    render () {
        return (
            <div>
                <CarouselVoyage />
                <Navbarvoyage action={this.toggle} collapse={this.state.collapse}/>
                <Tips />
                <Programme />
                <Formulaire action={this.toggle} collapse={this.state.collapse}/>

            </div>
        )
    }
}

export default DetailVoyage;

