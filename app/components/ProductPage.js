import React, { Component } from 'react'
import { connect, PromiseState } from 'react-refetch'
import LoadingBar from './LoadingBar'
import Error from './Error'

const Product = (props) => {
  const product = { ...props.value }
  return(
    <div className="row">
      <div className="col-md-6">
        <img src={product.image.full}></img>
      </div>
      <div className="col-md-6">
        <h3>{product.name}</h3>
        <a href="product ">Add to cart</a>
        <hr/>
        <div>
          { product.description }
        </div>
      </div>
      <div className="col-md-6">
      </div>
      <div className="col-md-6">
        <form className="" action="index " method="post">
          <div className="">
            <label>Upload file</label>
            <br/>
            <input type="file" name="" value=""></input>
          </div>
          <div className="">
            <label>Description</label>
            <br/>
            <textarea type="file" name="" value=""></textarea>
          </div>
          <input type="submit"/>
        </form>
      </div>
    </div>
  )
}

class ProductPage extends Component {
  render() {
    const { params } = this.props.match
    const { productFetch } = this.props

    if (productFetch.pending) {
      return <LoadingBar />
    } else if (productFetch.rejected) {
      return <Error {...productFetch}/>
    } else if (productFetch.fulfilled) {
      return <Product {...productFetch}/>
    }
  }
}

export default connect(props => {
  const { params } = props.match
  return({
    productFetch: `/api/products/${params.id}`
  })
})(ProductPage)
