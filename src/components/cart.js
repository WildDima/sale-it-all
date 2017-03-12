import React, { Component } from 'react';
import NavLink from './navlink'

export default class Home extends Component {
  product(name) {
    return(
      <li>
        <img src="http://lorempixel.com/100/100/nature/"/>
        <hr/>
        <NavLink to={`product/${name}`}>{name}</NavLink>
        /
        <NavLink to="products">remove</NavLink>
        <hr/>
      </li>
    )
  }

  render() {
    return(
      <div>
        <h1>Cart</h1>
        <hr/>
          <ul>
            {this.product('lorem')}
            {this.product('sit')}
          </ul>
          <hr/>
          <NavLink to="checkout">Checkout</NavLink>
      </div>
    )
  }
}
