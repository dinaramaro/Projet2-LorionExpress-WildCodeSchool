import React, {Component} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    
  } from 'reactstrap';
  
  const items = [
    {
      src: "http://www.toulouse.aeroport.fr/sites/default/files/venise_destination_header_1.jpg",
      altText: 'Le grand Canal de Venise'
    },
    {
      src: 'http://www.toulouse.aeroport.fr/sites/default/files/venise_destination_header_1.jpg',
      altText: 'Les gondoles de Venise'
    },
    {
      src: 'https://www.aubergesdejeunesse.com/city_images/Italy/venice.jpg',
      altText: 'Le quartier San Marco Venise'
    }
  ];
  
  class CarouselVoyage extends Component {
    constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  
    render() {
      const { activeIndex } = this.state;
  
      const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
          >
            <img className="img-fluid" src={item.src} alt={item.altText} />
            <CarouselCaption captionHeader={item.caption} />
          </CarouselItem>
        );
      });
  
      return (
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      );
    }
  }
export default CarouselVoyage;