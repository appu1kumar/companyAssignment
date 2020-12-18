import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import '../style.css';

const CarouselComponent = (props) => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            src="/images/toa-heftiba.jpg"
            alt="images"
            className="carouselImagee"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/images/jakob-owens.jpg"
            alt="images"
            className="carouselImagee"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/images/j-luis-esquivel.jpg"
            alt="images"
            className="carouselImagee"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/images/ian-bevis.jpg"
            alt="images"
            className="carouselImagee"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
