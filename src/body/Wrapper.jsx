import React, { Component } from 'react';
import CarouselPromo from './CarouselPromo';
import BarreRecherche from './BarreRecherche';
import ListeVoyage from './ListeVoyage';
import ContactSection from './ContactSection';

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <CarouselPromo />
                <BarreRecherche />
                <ListeVoyage />
                <ContactSection />          
            </div>
        );
    }
}

export default Wrapper;