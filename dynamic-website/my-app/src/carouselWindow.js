import React from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

  const items = [
    {
      src: 'carousel/1.jpg',
      altText: 'Slide 1',
      header: 'nARRATIVE 1',
      caption: "In this narrative Steward Edden has discovered that his country's government is conducting domestic espionage against citizens. He must decide whether to blow the whistle on his country's governemnt."
    },
    {
      src: 'carousel/2.jpg',
      altText: 'Slide 2',
      header: 'Narrative 2',
      caption: 'Narrative 2'
    },
    {
      src: 'carousel/3.svg',
      altText: 'Slide 3',
      header: 'Narrative 3',
      caption: 'Narrative 3'
    }
  ];

  export default class carouselMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.animating = false
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

        const imageStyle = {
            width: "100%",
            "max-height": "350px",
            "object-fit": "cover"
        }
    
        const slides = items.map((item) => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} style={imageStyle}/>
              <CarouselCaption captionText={item.caption} captionHeader={item.header} />
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