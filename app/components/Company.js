import React, { Component } from 'react'
import NavLink from './CustomLink'

const Company = (props) => {
  return(
    <div className="col-xs-6 col-sm-4 col-md-3">
      <img src="http://lorempixel.com/100/100/nature/"></img>
      <hr/>
      <a href="catalog">{props.name}</a>
      <hr/>
    </div>
  )
}

export default Company
