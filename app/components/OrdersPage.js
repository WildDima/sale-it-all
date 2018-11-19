import React, { Component } from 'react'
import CustomLink from './CustomLink'

export default class OrdersPage extends Component {
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
                <CustomLink to={'products/foo'}>Foo</CustomLink>
                /
                <CustomLink to={'products/bar'}>Bar</CustomLink>
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
