import React from 'react';
import ProductsList from '../components/ProductsList';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselComponent from './CarouselComponent';

const Home = (props) => {
  return (
    <div className="container-fluid main">
      <CarouselComponent />
      <div className="container-fluid">
        <ProductsList />
      </div>
    </div>
  );
};

export default Home;
