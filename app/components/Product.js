import React, { Component } from 'react'
import CustomLink from './CustomLink'
import IndexLink from './IndexLink'

const RemoveLink = (props) => {
  const { id, productRemove } = props
  const onClick = (e) => {
    e.preventDefault()
    return(productRemove(id))
  }
  return(
    <a href='#' onClick={ e => onClick(e) }>Remove</a>
  )
}

const Product = (props) => {
  const { id, product, productRemove } = props

  return(
    <div>
      <img src={product.image.thumb}/>
      <hr/>
      <CustomLink to={`/products/${id}`}>{product.name}</CustomLink>
      /
      <RemoveLink {...props}/>
      <hr/>
    </div>
  )
}

export default Product
