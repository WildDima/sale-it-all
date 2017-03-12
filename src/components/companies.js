import React, { Component } from 'react';
import NavLink from './navlink'

export default class Companies extends Component {
  company(name) {
    return(
      <div className="col-xs-6 col-sm-4 col-md-3">
        <img src="http://lorempixel.com/100/100/nature/"></img>
        <hr/>
        <a href="catalog">{name}</a>
        <hr/>
      </div>
    )
  }

  render() {
    return(
      <div>
        <h1>Companies</h1>
        <div className="row">
          {this.company('lorem')}
          {this.company('ipsum')}
          {this.company('dolor')}
        </div>
      </div>
    )
  }
}
