import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from '../components/nav';

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
          <form>
            <label>Email:</label>
            <input name="user" type="text"/>
            <input type="submit" value="Login"/>
          </form>
      </div>
    )
  }
}
