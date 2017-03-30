import React, { Component } from 'react'

const Error = (props) => {
  const { stack } = props.reason
  return(
    <div>
      <h3>{stack}</h3>
    </div>
  )
}

export default Error
