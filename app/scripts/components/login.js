import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }

  handleResponse(data) {
    localStorage.setItem('sessionToken', data.sessionToken);
    $.ajaxSetup({
      headers: {
        "X-Parse-Session-Token": data.sessionToken
      }
    });
    this.props.history.pushState(null, 'my-unicorns');
  }

  handleSubmit(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    $.ajax({
      type: 'GET',
      url: 'https://api.parse.com/1/login',
      data: {username: username, password: password},
      success: this.handleResponse
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref="username" type="text" placeholder="username" />
        <input ref="password" type="password" placeholder="password" />
        <input type="submit" value="Login"/>
        <Link to="signup">Not a user yet? Signup!</Link>
      </form>
    )
  }
}

export default Login;
