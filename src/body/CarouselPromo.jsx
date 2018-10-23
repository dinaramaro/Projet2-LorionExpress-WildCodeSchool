import React from "react";

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    
  } from 'reactstrap';
  
  const items = [
    {
      src: 'https://www.lifestorage.com/blog/wp-content/uploads/2018/01/life-storage-best-places-to-live-in-texas-d-1920x500.jpg',
      altText: 'Voyagez au Texas',
      caption: 'Voyagez au Texas'
    },
    {
      src: 'https://tripconnexion.com/wp-content/uploads/2017/04/meilleurs-sites-madagascar-agence-voyage-locale-madacameleon-2-1.jpg',
      altText: 'Découvrez des endroits incroyables !',
      caption: 'Découvrez des endroits incroyables !'
    },
    {
      src: 'https://tripconnexion.com/images/upload/agence-voyage-locale-costa-rica-best-destination-decouvertes_16897.jpg',
      altText: 'Découvrez la ville sous un nouveau jour',
      caption: 'Découvrez la ville sous un nouveau jour'
    }
  ];
  
  class CarouselPromo extends React.Component {
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
export default CarouselPromo;