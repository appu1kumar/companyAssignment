import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import { Modal } from 'react-bootstrap';
import '../style.css';

const ProductItems = (props) => {
  const [show, setShow] = useState(false);

  const handleCart = (e) => {
    const book = [
      ...props.cart,
      {
        _id: props._id,
        title: props.title,
        description: props.description,
        price: props.price,
        image: props.image,
        quantity: 1,
      },
    ];
    props.addToCart(book);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleOpen = () => {
    setShow(true);
  };
  return (
    <div className="col-4 mb-3">
      <div className="card">
        <div className="card-header">
          <div className="card-body">
            <div onClick={handleOpen}>
              <img src={props.image} alt="images" className="image" />
              <h6>{props.title}</h6>
              <p>{props.description.substring(0, 40)}...</p>
              <p>&#8377; {props.price}</p>
            </div>
            <button
              className="btn btn-outline-primary mt-2 mb-2"
              onClick={() => handleCart(props._id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton></Modal.Header>
        <img src={props.image} alt="images" className="modalImage" />
        <Modal.Body>
          <h6>{props.title}</h6>
          <p>{props.description}</p>
          <p>&#8377; {props.price}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (cart) => dispatch(addToCart(cart)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItems);
