import React, { Component } from 'react';
import NavLink from './navlink'

export default class Products extends Component {
  product(name) {
    return(
      <div className="col-xs-6 col-sm-4 col-md-3">
        <img src="http://lorempixel.com/100/100/nature/"/>
        <hr/>
        <NavLink to={`products/${name}`}>{name}</NavLink>
        /
        <NavLink to="products">remove</NavLink>
        <hr/>
      </div>
    )
  }

  render() {
    return(
      <div className="row">
        {this.product('lorem')}
        {this.product('ipsum')}
        <hr/>
        {this.props.children}
      </div>
    )
  }
}
