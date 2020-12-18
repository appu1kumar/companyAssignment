import React from 'react';
import { connect } from 'react-redux';
import '../style.css';

const Cart = (props) => {
  const buyCartItem = () => {};

  let cartList = 'Cart is empty';

  if (props.cart.length > 0) {
    cartList = props.cart.map((cart) => (
      <div key={cart._id}>
        <div className="row">
          <div className="col-5 mb-3">
            <img src={cart.image} alt="images" className="cartImage" />
          </div>
          <div className="col-7 mb-3">
            <h6>{cart.title}</h6>
            <p>{cart.description}</p>
            <p>&#8377; {cart.price}</p>
            <button
              className="btn btn-outline-primary mt-2 mb-2"
              onClick={() => buyCartItem(cart._id)}
            >
              Proceed to Buy
            </button>
          </div>
        </div>
        <hr />
      </div>
    ));
  }

  return (
    <div className="container" style={{ marginTop: '30px' }}>
      <div className="row">{cartList}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(Cart);
