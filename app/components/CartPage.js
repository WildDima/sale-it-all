import React, { Component } from 'react';
import NavLink from './CustomLink'
import Product from './Product'

export default class CartPage extends Component {
  render() {
    return(
      <div>
        <h1>Cart</h1>
        <hr/>
          <ul>
            <li>
              <Product name='lorem'/>
            </li>
            <li>
              <Product name='sit'/>
            </li>
          </ul>
          <hr/>
          <NavLink to="checkout">Checkout</NavLink>
      </div>
    )
  }
}
