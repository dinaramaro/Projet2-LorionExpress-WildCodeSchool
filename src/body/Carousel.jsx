import React from "react";

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
  
  const items = [
    {
      src: 'https://cdn.ihs.com/events/WPC/2018/Website/Fader-Houston-sunset-6-561044716-WPC-1920x500.jpg',
      altText: 'Voyagez au Texas',
      caption: 'Voyagez au Texas'
    },
    {
      src: 'https://sustainable-solutions.info/wp-content/uploads/2014/09/lake-reflection-1920x500.jpg',
      altText: 'Découvrez des endroits incoyable !',
      caption: 'Découvrez des endroits incroyable !'
    },
    {
      src: 'http://lesparisiennes-scpo.fr/2012/wp-content/uploads/2012/12/tour-eiffel-partenariats-1920x500.png',
      altText: 'Découvrez la ville sous un nouveaux jour',
      caption: 'Découvrez la ville sous un nouveaux jour'
    }
  ];
  
  class Carousel extends React.Component {
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
export default Carousel;