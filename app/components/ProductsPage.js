import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NavLink from './CustomLink'
import Product from './Product'
import ProductPage from './ProductPage'
import Loading from 'react-loading'
import LoadingBar from './LoadingBar'
import Error from './Error'
import { connect, PromiseState } from 'react-refetch'
import { mapValues } from 'lodash'
import ProductForm from './ProductForm'

const ProductsList = (props) => {
  const { products, productRemove } = props

  return(
    <div className='row'>
    {Object.keys(products).map((key) => {
      return(<div key={key} className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-lg-2">
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
    <div>
      <ProductsList {...props} />
      <hr/>
      <Route path={`/products/:id`} component={ProductPage}/>
      {props.children}
    </div>
  )
}

class ProductsPage extends Component {
  render() {
    const { productsFetch,
            productRemove,
            productCreate } = this.props

    if (productsFetch.pending) {
      return <LoadingBar />
    } else if (productsFetch.rejected) {
      return <Error {...productsFetch}/>
    } else if (productsFetch.fulfilled) {
      return(
        <div>
          <Products products={productsFetch.value} productRemove={productRemove}/>
          <ProductForm productCreate={productCreate}/>
        </div>
      )
    }
  }
}

export default connect(props => ({
  productsFetch: '/api/products',
  productRemove: id => ({
    productRemoving: {
      method: 'DELETE',
      url: `/api/products/${id}`,
      andThen: () => ({
        productsFetch: {
          url: '/api/products',
          refreshing: true,
          force: true
        }
      })
    }
  }),
  productCreate: product => ({
    productCreation: {
      method: 'POST',
      url: 'api/products',
      body: JSON.stringify({ product }),
      andThen: () => ({
        productsFetch: {
          url: '/api/products',
          refreshing: true,
          force: true
        }
      })
    }
  })
}))(ProductsPage)
