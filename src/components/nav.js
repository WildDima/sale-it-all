import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavLink from './navlink'

export default class Nav extends Component {
  render() {
    return(
      <nav>
        <NavLink to='/'>Home</NavLink>|
        <NavLink to='/products'>Catalog</NavLink>|
        <NavLink to='/companies'>Companies</NavLink>|
        <NavLink to='/cart'>Cart</NavLink>|
        <NavLink to='/login'>SignIn/SignUp|</NavLink>
        Admin:
        <NavLink to='/orders'>Orders</NavLink>|
        <NavLink to='/company'>Company</NavLink>|
      </nav>
    )
  }
}
