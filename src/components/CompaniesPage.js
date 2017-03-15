import React, { Component } from 'react';
import NavLink from './CustomLink'
import Company from './Company'

export default class CompaniesPage extends Component {
  render() {
    return(
      <div>
        <h1>Companies</h1>
        <div className="row">
          <div className="col-xs-6 col-sm-4 col-md-3">
            <Company {...this.props} name={'lorem'}/>
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3">
            <Company {...this.props} name={'ipsum'}/>
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3">
            <Company {...this.props} name={'dolor'}/>
          </div>
        </div>
      </div>
    )
  }
}
