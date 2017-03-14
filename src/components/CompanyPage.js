import React, { Component } from 'react'

export default class CompanyPage extends Component {
  render() {
    const params = { ...this.props.match.params }

    return(
      <div>
        <h1>Company</h1>
        <img src="http://lorempixel.com/64/64/nature/"></img>
      <form action="index " method="post">
          <div>
            <label>Upload file</label>
          <br/>
            <input type="file" name="" value=""></input>
          </div>
          <div>
            <div>
              <label>Name</label>
            <br/>
              <input></input>
            </div>
            <div>
              <label>Description</label>
            <br/>
              <textarea></textarea>
            </div>
          </div>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
