import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }

  handleResponse(data) {
    console.log(data);
    this.props.history.pushState(null, 'my-unicorns');
  }

  handleSubmit(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    $.ajax({
      type: 'POST',
      url: 'https://api.parse.com/1/users',
      data: JSON.stringify({username: username, password: password}),
      success: this.handleResponse
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref="username" type="text" placeholder="username"/>
        <input ref="password" type="password" placeholder="password"/>
        <input type="submit" value="Sign up"/>
        <Link to="login">Already a user? Login!</Link>
      </form>
    )
  }
}

export default Signup;
