import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import '../index.css';

const iaActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: '#ff9900' };
  } else {
    return { color: '#ffffff' };
  }
};

const Menu = (props) => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-primary">
      <div className="collapse navbar-collapse container-fluid" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/"
              style={iaActive(props.history, '/')}
            >
              Home
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/cart"
              style={iaActive(props.history, '/cart')}
            >
              <i className="fa fa-shopping-cart cartIcon"></i>
              <sup>
                <small className="cart-badge">{props.cart.length}</small>
              </sup>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  console.log(state.cart.cart);
  return {
    cart: state.cart.cart,
  };
};

export default withRouter(connect(mapStateToProps)(Menu));
