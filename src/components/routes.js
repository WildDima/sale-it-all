import React from 'react';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom'
import App from './app'
import Home from './home'
import Products from './products'
import Nav from './nav'
import Product from './product'
import Cart from './cart'
import Checkout from './checkout'
import Companies from './companies'
import Login from './login'
import Company from './company'
import Orders from './orders'

const Routes = () => {
  return(
    <Router>
      <div>
        <Nav/>
        <hr/>
        <Route exact path="/" component={Home}/>
        <Route path="/products" component={Products}/>
        <Route path='/product/:productName' component={Product}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/companies' component={Companies}/>
        <Route path='/login' component={Login}/>
        <Route path='/orders' component={Orders}/>
        <Route path='/company' component={Company}/>
      </div>
    </Router>
  )
}

export default Routes
