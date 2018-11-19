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
              <Product product={{ name: 'lorem', image: { thumb: '', full: '' }}} id={1}/>
            </li>
            <li>
              <Product product={{ name: 'sit', image: { thumb: '', full: '' }}} id={1}/>
            </li>
          </ul>
          <hr/>
          <NavLink to="checkout">Checkout</NavLink>
      </div>
    )
  }
}
