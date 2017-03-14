import React, { Component } from 'react'
import NavLink from './CustomLink'

export default class OrdersPage extends Component {
  product_link(name) {
    return(
      <NavLink to={`product/${name}`}>{name}</NavLink>
    )
  }

  render() {
    return(
      <div>
        <h1>Orders</h1>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Product</th>
              <th>Info</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>lorem@lorem.com</td>
              <td>
                {this.product_link('lorem')}
                /
                {this.product_link('ipsum')}
                /
                {this.product_link('dolor')}
              </td>
              <td>Maecenas ut neque enim. Quisque varius mi condimentum velit porta, vitae vulputate ante elementum. Nunc aliquet lacus in quam tincidunt, eu tristique purus ullamcorper.</td>
              <td><input type="checkbox" name="insurance" value="1" checked=""/></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
