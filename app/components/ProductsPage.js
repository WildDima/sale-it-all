import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NavLink from './CustomLink'
import Product from './Product'
import ProductPage from './ProductPage'

export default class ProductsPage extends Component {
  render() {
    const { match } = this.props
    return(
      <div className="row">
        <div className="col-xs-6 col-sm-4 col-md-3">
          <Product name={'lorem'}/>
        </div>
        <div className="col-xs-6 col-sm-4 col-md-3">
          <Product name={'ipsum'}/>
        </div>
        <hr/>
        <Route path={`${match.path}/:productName`} component={ProductPage}/>
        {this.props.children}
      </div>
    )
  }
}
