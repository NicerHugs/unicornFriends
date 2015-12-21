import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

import UserService from './../services/user';
import store from './../store';
import actions from './../actions/actions';

class Unicorn extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    UserService.addUnicornFriend(this.props.session.id, this.props.id).then(id => {
      store.dispatch(actions.RECEIVE_UNICORN_FRIEND(id))
    })
  }

  componentDidMount() {
    if (!this.props.users[this.props.creator] && !this.props.users.isFetching) {
      store.dispatch(actions.REQUEST_FETCH_USER());
      UserService.fetchUserById(this.props.creator).then(response => {
        store.dispatch(actions.RECEIVE_EXISTING_USER(response))
      });
    }
  }

  render() {
    console.log(this.props.users.isFetching);
    let userLink = {
      to: this.props.creator === this.props.session.id ? 'my-unicorns' : `users/${this.props.creator}`,
      text: this.props.creator === this.props.session.id ? 'you' : this.props.users[this.props.creator] ? this.props.users[this.props.creator].username : undefined
    }
    let btn = this.props.type === 'add' ? <input type="button" onClick={this.handleClick} value="add to my unicorns"/> : undefined;
    return (
      <li className="unicorn">
      <img />
        <h2>{this.props.name}</h2>
        <p>{this.props.color}</p>
        <p>{this.props.power}</p>
        <p>Created By: <Link to={userLink.to}>{userLink.text}</Link></p>
        {btn}
      </li>
    );
  }
}

export default Unicorn;
