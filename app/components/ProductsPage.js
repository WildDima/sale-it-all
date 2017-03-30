import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NavLink from './CustomLink'
import Product from './Product'
import ProductPage from './ProductPage'
import Loading from 'react-loading'
import LoadingBar from './LoadingBar'
import { connect, PromiseState } from 'react-refetch'
import { mapValues } from 'lodash'

const ProductsList = (props) => {
  const { products, productRemove } = props

  return(
    <div>
    {Object.keys(products).map((key) => {
      return(<div key={key} className="col-xs-6 col-sm-4 col-md-3">
        <Product id={key}
                 product={products[key]}
                 productRemove={productRemove}/>
      </div>)
    })}
    </div>
  )
}

const Products = (props) => {
  return(
    <div className="row">
      <ProductsList {...props} />
      <hr/>
      <Route path={`/products/:id`} component={ProductPage}/>
      {props.children}
    </div>
  )
}

class ProductsPage extends Component {
  render() {
    const { productsFetch, productRemove } = this.props

    if (productsFetch.pending) {
      return <LoadingBar />
    } else if (productsFetch.rejected) {
      return(<h1>ERROR</h1>)
    } else if (productsFetch.fulfilled) {
      return(
        <Products products={productsFetch.value} productRemove={productRemove}/>
      )
    }
  }
}

export default connect(props => ({
  productsFetch: '/api/products',
  productRemove: id => ({
    productsFetch: {
      url: `/api/products/${id}`,
      method: 'DELETE'
    }
  })
}))(ProductsPage)
