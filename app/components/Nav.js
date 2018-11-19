import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CustomLink from './CustomLink'
import IndexLink from './IndexLink'

export default class Nav extends Component {
  render() {
    return(
      <nav>
        <IndexLink>Home</IndexLink>|
        <CustomLink to='/products'>Catalog</CustomLink>|
        <CustomLink to='/companies'>Companies</CustomLink>|
        <CustomLink to='/cart'>Cart</CustomLink>|
        <CustomLink to='/login'>SignIn/SignUp|</CustomLink>
        Admin:
        <CustomLink to='/orders'>Orders</CustomLink>|
        <CustomLink to='/company'>Company</CustomLink>|
      </nav>
    )
  }
}
