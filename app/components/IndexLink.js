import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const IndexLink = (props) => {
  return(
      <NavLink {...props} exact to='/' activeStyle={{color: 'red'}}/>
  )
}

export default IndexLink
