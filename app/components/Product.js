import React, { Component } from 'react'
import CustomLink from './CustomLink'
import IndexLink from './IndexLink'

const Product = (props) => {
  return(
    <div>
      <img src="http://lorempixel.com/100/100/nature/"/>
      <hr/>
      <CustomLink to={`/products/${props.name}`}>{props.name}</CustomLink>
      /
      <IndexLink>Remove</IndexLink>
      <hr/>
    </div>
  )
}

export default Product
