import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

import store from './../store';
import actions from './../actions/actions';
import UserService from './../services/user';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let data = {username, password: this.refs.password.value};
    store.dispatch(actions.REQUEST_NEW_USER(username))
    UserService.register(data).then(response => {
      console.log(response);
      store.dispatch(actions.RECEIVE_NEW_USER());
      store.dispatch(actions.RECEIVE_SESSION(response));
      this.refs.username.value = '';
      this.refs.password.value = '';
      this.props.history.pushState(null, '/my-unicorns');
    })
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
