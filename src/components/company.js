import React, { Component } from 'react'

export default class Company extends Component {
  render() {
    const params = { ...this.props.match.params }

    return(
      <div>
        <h1>Company</h1>
        <img src="http://lorempixel.com/64/64/nature/"></img>
        <form class="" action="index " method="post">
          <div class="">
            <label>Upload file</label>
          <br/>
            <input type="file" name="" value=""></input>
          </div>
          <div class="">
            <div class="">
              <label>Name</label>
            <br/>
              <input></input>
            </div>
            <div class="">
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
