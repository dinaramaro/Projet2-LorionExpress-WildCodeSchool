import React from "react";
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import './CarouselPromo.css';

class CarouselPromo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, promo: [] };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    fetch("http://campus-bordeaux.ovh:3002/reacteurs/api/voyages")
      .then(response => response.json())
      .then(data =>
        this.setState({
          promo: data,
        }))
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.promo.filter(item => item.type === "promotion").length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.promo.filter(item => item.type === "promotion").length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const items1 = this.state.promo.filter(item => item.type === "promotion");
    const slides = items1.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.id}
        >
         <Link to={`/detailvoyage/${item.id}`}>
          <img className="img-fluid" src={item.image} alt={item.description} />
         
            <CarouselCaption className="caption" captionHeader={item.description} />
            <CarouselCaption className="barre align-items-center" captionHeader="&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;Promotion"/>

          </Link>

        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items1} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}
export default CarouselPromo;