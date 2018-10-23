import React, {Component} from 'react';
import CarouselVoyage from './components-detailvoyage/CarouselVoyage';
import Navbarvoyage from './components-detailvoyage/Navbarvoyage';
import Tips from './components-detailvoyage/Tips';
import Programme from './components-detailvoyage/Programme';
import Formulaire from './Formulaire';



class DetailVoyage extends Component {


    componentDidMount(){
        window.scrollTo(0,0)
    }
    render () {
        return (
            <div>
                <CarouselVoyage />
                <Navbarvoyage />
                <Tips />
                <Programme />
                <Formulaire />

            </div>
        )
    }
}

export default DetailVoyage;

