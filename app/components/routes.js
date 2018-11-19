import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './HomePage'
import ProductsPage from './ProductsPage'
import Nav from './nav'
import ProductPage from './ProductPage'
import CartPage from './CartPage'
import CheckoutPage from './CheckoutPage'
import CompaniesPage from './CompaniesPage'
import LoginPage from './LoginPage'
import CompanyPage from './CompanyPage'
import OrdersPage from './OrdersPage'

const Routes = () => {
  return(
    <Router>
      <div>
        <Nav/>
        <hr/>
        <Route exact path='/' component={HomePage}/>
        <Route path='/products' component={ProductsPage}/>
        <Route path='/cart' component={CartPage}/>
        <Route path='/companies' component={CompaniesPage}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/orders' component={OrdersPage}/>
        <Route path='/company' component={CompanyPage}/>
        <Route path='/checkout' component={CheckoutPage}/>
      </div>
    </Router>
  )
}

export default Routes
