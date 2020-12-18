import React from 'react';
import { connect } from 'react-redux';
import ProductItems from './ProductItems';
import '../style.css';

const ProductsList = (props) => {
  return (
    <div className="product-content">
      <h2 className="product-header">Products</h2>
      <div className="row product-list">
        {props.productsList.map((product) => (
          <ProductItems
            key={product._id}
            id={product._id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productsList: state.products.products,
  };
};
export default connect(mapStateToProps)(ProductsList);
