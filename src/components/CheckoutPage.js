import React, { Component } from 'react';
import NavLink from './CustomLink'

export default class CheckoutPage extends Component {
  render() {
    return(
      <div>
        <h1>Checkout</h1>
        <hr/>
        <form>
          <div>
            <label>Additional information</label>
            <textarea></textarea>
          </div>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
