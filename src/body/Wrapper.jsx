import React, { Component } from 'react';
import CarouselPromo from './CarouselPromo';
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
                <ListeVoyage />
                <ContactSection />          
            </div>
        );
    }
}

export default Wrapper;