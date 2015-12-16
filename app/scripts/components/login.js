import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

import actions from './../actions/actions';
import store from './../store';
import UserService from './../services/user';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log('hi');
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    let data = {username: username, password: password}
    store.dispatch(actions.FETCH_SESSION());
    UserService.login(data).then( response => {
      localStorage.setItem('sessionToken', response.sessionToken);
      store.dispatch(actions.RECEIVE_SESSION(response));
      this.props.history.pushState(null, 'my-unicorns');
    })
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
