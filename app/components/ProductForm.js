import React, { Component } from 'react'

export default class ProductForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name || ''
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e, field) {
    let obj = {}
    obj[e.target.id] = e.target.value
    this.setState(obj)
    console.log(this.state)
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.productCreate(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text"
                 id='name'
                 value={this.state.name}
                 onChange={(e) => this.onChange(e, 'name')}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
