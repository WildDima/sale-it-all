import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const CustomLink = (props) => {
  return(
      <NavLink {...props} activeStyle={{color: 'red'}}/>
  )
}

export default CustomLink
